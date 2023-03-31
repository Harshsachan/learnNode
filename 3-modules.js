// Commonjs, every file in node is module (by  default)
// Modules - Encapsulated Code (only share minimum) 

const names = require('./3.1-module_help')
const sayH = require('./3.2-module_help2')
console.log(names);
sayH("Harshit")
sayH(names.name2)
sayH(names.name3)
sayH(names.name4)
//require('./3.1-module_help')
