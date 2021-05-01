const _ = require('underscore');

// INFO: require loads the modules as below
// 1. Looks for a core module by the given name
// 2. Looks for a file or folder (folder with an index.js file)
// 3. Searches in node_modules directory.

let res = _.contains([1, 2, 3, 4, 5], 5);
console.log(res);