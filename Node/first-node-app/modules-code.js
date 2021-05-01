// INFO: Wrapper function signature -> (function(exports, require, module, __filename, __dirname)
// INFO: Every module is wrapped in a function called a Wrapper function and that is how they are exported and reused outside / elsewhere, with require function
// In node every JS file is a module
// All the variables, constants and functions defined inside a module (or a file) is private to that module.
// They are not available outside of that module.
// to make them available oiutside of the modules, they need to be exported

// TODO: What is immediately invoked function expression.

let thisOneIsPrivate = true;

const thisOneBeExported = 3.14;
// TODO: This is modifiable. Learn how to export members that are immutable
module.exports.PI = thisOneBeExported;

//console.log(require);

// INFO: We can override the exports with the following
// module.exports = <something?

// INFO: We cannot override the exports like this
// exports = <something>
console.log('__filename is', __filename);
console.log('__dirname is', __dirname);