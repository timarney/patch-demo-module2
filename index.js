const flatten = require("lodash.flatten");
const mergeWith = require("lodash.mergewith");

const other = [1, 2, 5];

const arr = [1, [1, 2], 3, 4];

const moduleName = "module 2";

const print = () => {
  console.log(`== ${moduleName} ==`);
  console.log("flatten & merge")
  console.log(mergeWith(flatten(arr),other));
  console.log("============");
};
print()
module.exports.print = print;
