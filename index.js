const flatten = require("lodash.flatten");
const arr = [1, [1, 2], 3, 4];

const moduleName = "module 2";

const print = () => {
  console.log(`== ${moduleName} ==`);
  console.log(flatten(arr));
  console.log("============");
};

module.exports.print = print;
