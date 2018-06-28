var load = require('./src/loader.js');

// call functions
function main() {

  // get file directories
  let md = load.getNames("content/md");
  let html = load.getNames("content/html");

  // test stuff don't mind me~
  // md.forEach(ele => {
  //   console.log(ele);
  // });

  // html.forEach(ele => {
  //   console.log(ele);
  // })
  return 0;
}

// call main
main();