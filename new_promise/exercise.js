var fs = require("fs");
var Promise = require("bluebird");
/*
 Example of reading file using callback:

 fs.readFile(fileName, encoding, function(err, result) {

 });
*/

module.exports = function(fileName, encoding) {
  return new Promise(function(resolve, reject) {
    fs.readFile(fileName, encoding, function(err, result) {
      if (err) reject(err);
      else resolve(result);
    });
  });
};
