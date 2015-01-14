'use strict';

var User = require('./user.model');
var proCtrl = require('./pro/pro.controller');
var fs = require('fs');
var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');
var gm = require('gm');
var config = require('../../config/environment');

var inspect = require('util').inspect;

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


exports.uploadProfilePic = function (req, res) {
  var ss3 = require('skipper-s3')({
    key: config.s3.accessKey,
    secret: config.s3.secret,
    bucket: config.s3.bucket,
  });

  req.file('profile').upload({
    adapter: ss3
  }, function (err, uploadedFiles) {
    if (err) return res.status(500).send(err);

    var file = uploadedFiles[0];
    var thumbTemp = '.tmp/s3-upload-part-queue/thumb-'+ file.fd;

    ss3.read(file.fd, function(err, s3Image) {
      gm(s3Image)
        .options({imageMagick: true})
        .filter('Lanczos')
        // TODO: Find out how to resize Center without creating a file.
        .thumb(100, 100, thumbTemp, 90,'center',
        function onThumbCreate() {
          var Uploader = require('s3-streaming-upload').Uploader;
          var upload = new Uploader({
            accessKey: config.s3.accessKey,
            secretKey: config.s3.secret,
            bucket: config.s3.bucket,
            objectName: "thumb-" + file.fd,
            stream: fs.createReadStream(thumbTemp)
          });

          upload.on('completed', function (err, s3res) {
            if (err) handeError(res,err);

            User.update(
              { _id: req.user._id },
              {
                image: {
                  url: file.extra.Location,
                  thumb: s3res.location,
                  fd: file.fd
                }
              })
              .exec()
              .then(function(doc){
                fs.unlink(thumbTemp);
                return res.status(200).json({
                  message: uploadedFiles.length + ' file(s) uploaded successfully!',
                  file: file,
                  url: file.extra.Location,
                  thumbUrl: s3res.location
                });
              }, function(err){
                return res.status(500).send(err);
              });
          });

          upload.on('failed', function (err) {
            handleError(res,err);
          });
        });
    });
  });
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