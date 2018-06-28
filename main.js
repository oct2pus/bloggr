var load = require('./src/loader.js');
var convert = require('./src/output.js');

// call functions
function main() {

  // get file directories
  let md = load.getNames("content/md");
  let html = convert.toMarkdown(md);

  html.forEach(ele => {
    console.log(ele);
  });

  return 0;
}

// call main
main();
