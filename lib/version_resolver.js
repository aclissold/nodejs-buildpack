var fs = require('fs');
var path = require('path');
var file = path.join(__dirname, '..', 'files', 'versions.json');
var version;

fs.readFile(file, 'utf8', function (err, data) {
  if (!err) {
    var node = JSON.parse(data);
    version = node.stable;
  }

  console.log(version);
});
