'use strict';

var User = require('./user.model');
var proCtrl = require('./pro/pro.controller');
var customerCtrl = require('./customer/customer.controller');
var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');
var lwip = require('lwip');
var config = require('../../config/environment');

var validationError = function(res, err) {
  return res.json(422, err);
};

var handleError = function(res, err) {
  res.status(500).send(err);
};

/**
 * Get list of users
 * restriction: 'admin'
 */
exports.index = function(req, res) {
  User.find({}, '-salt -hashedPassword', function (err, users) {
    if(err) return res.send(500, err);
    res.json(200, users);
  });
};

/**
 * Creates a new user
 */
exports.create = function (req, res, next) {
  var newUser = new User(req.body);
  newUser.provider = 'local';
  newUser.role = 'user';
  newUser.save(function(err, user) {
    if (err) return validationError(res, err);
    var token = jwt.sign({_id: user._id }, config.secrets.session, { expiresInMinutes: 60*5 });
    res.json({ token: token, accountType: 'User' });
  });
};

/**
 * Get a single user
 */
exports.show = function (req, res, next) {
  var userId = req.params.id;

  User.findById(userId, function (err, user) {
    if (err) return next(err);
    if (!user) return res.send(401);
    res.json(user.profile);
  });
};

/*
 *   Gets an image with a File Descriptor
 *   with optional thumbnail
 * */

exports.getImage = function(req, res) {
  var sgfs = require('skipper-gridfs')({
    uri: config.mongo.uri + '.images'
  });
  var fd = req.params.fd,
    ext = fd.split('.')[1],
    thumb = req.params.thumb == 'thumb',
    type;

  if (/jpe?g/.test(ext))  type = 'jpeg';
  else if ('png' == ext)  type = 'png';
  else return handleError(res, "Unknown File Type: " + type);

  var reader = sgfs.read;
  reader(fd, function (err, image) {
    if(err) { return handleError(res, err); }
    if(!image) { return res.status(404).send('Could not find image.'); }
    lwip.open(image, type , function(err, lwipImage){
      if (err == 'Error: Unsupported number of channels') {
        return res.type('image/'+type).status(200).send(image);
      }
      else if (err) { return handleError(res, err); }


      var w = lwipImage.width(),
        h = lwipImage.height(),
        cropSize = Math.min(w,h);


      var batch = lwipImage.batch();
      // if thumb was specified, make 100x100
      if (thumb) batch = batch.crop(cropSize,cropSize).resize(100,100);
      // Set MIME type and send buffer to client
      batch.toBuffer( type , function(err, resizedImage) {
        return res.type('image/'+type).status(200).send(resizedImage);
      })
    })
  });
};



exports.uploadProfilePic = function (req, res) {
  req.file('profile').upload({
    getTypeFromHeader: true,
    adapter: require('skipper-gridfs'),
    uri: config.mongo.uri + '.images'
  }, function (err, uploadedFiles) {
    if (err) return res.status(500).send(err);

    var file = uploadedFiles[0];
    User.update(
      { _id: req.user._id },
      {
        image: {
          fd: file.fd,
          fileId: file.extra.fileId,
          url: '/api/users/image/'+ file.fd
        }
      })
      .exec()
      .then(function(doc){
        return res.status(200).json({
          message: uploadedFiles.length + ' file(s) uploaded successfully!',
          file: file,
          url: '/api/users/image/'+ file.fd
        });
      }, function(err){
        return res.status(500).send(err);
      })
  })  ;
};


/**
 * Deletes a user
 * restriction: 'admin'
 */
exports.destroy = function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if(err) return res.send(500, err);
    return res.send(204);
  });
};

/**
 * Change a users password
 */
exports.changePassword = function(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findById(userId, function (err, user) {
    if(user.authenticate(oldPass)) {
      user.password = newPass;
      user.save(function(err) {
        if (err) return validationError(res, err);
        res.send(200);
      });
    } else {
      res.send(403);
    }
  });
};

/**
 * Get my info
 */
exports.me = function(req, res, next) {
  var userId = req.user._id;
  User.findOne({
    _id: userId
  }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt
    if (err) return next(err);
    if (!user) return res.json(401);
    var type = user._accountType;
    if (type === 'Pro') {
      return proCtrl.me(req,res,next);
    }
    else {
      res.status(200).json(user);
    }
  });
};

/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};