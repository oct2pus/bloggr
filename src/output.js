// requires/globals
var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    fs        = require('fs');

// return an array of converted text
exports.toMarkdown = function (paths) {
  var arr = new Array();
  
  var i = 0;
  paths.forEach(_ele => {
    let file = fs.readFileSync(paths[i], 'utf8');
    console.log(file);
    let converted = converter.makeHtml(file);
    converted = '<div>\n' + converted + '\n</div>\n';
    arr[i] = converted;
    i++;
  });

  return arr;
}
