/**
 * Error responses
 */

'use strict';

module.exports[404] = function pageNotFound(req, res) {
  var viewFilePath = '404.html';
  var statusCode = 404;
  var result = {
    status: statusCode
  };

  res.status(result.status);
  res.render(viewFilePath, function (err) {
    if (err) { return res.json(result, result.status); }

    return res.render(viewFilePath);
  });
};
