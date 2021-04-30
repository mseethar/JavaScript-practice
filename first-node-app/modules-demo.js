const mod = require('./modules-code');

console.log(mod);

mod.PI = 31.4;
console.log(mod); // NOTE: This is absolutely modifiable

// Implicit variables
console.log('module is an', typeof module, module);
console.log('require is a', typeof require, require);
