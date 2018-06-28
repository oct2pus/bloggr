var fs = require('fs');


// return an array of file paths
exports.getNames = function (path) {

  var arr = new Array();

  arr = fs.readdirSync(path);

  if (!path.endsWith('/')) {
    path = path + '/';
  }

  var i = 0;
  // note to me, ele does not modify the element of arr
  // but i can modify arr directly from forEach
  arr.forEach(ele => {
    ele = path + ele;
    arr[i] = ele;
    i++;
  });

  return arr;
}
