//var x=;
// Nodes wraps this whole module code into a function called module wrapper function.
let url = 'https://mylogger.io/log';

function log(message) {
    console.log(message);
}

exports.log = log;
// Can be written as module.exports.log

// NOTE: If there is a single element being exported we can very well say
// module.exports = 

console.log('require is', require);
console.log(exports);
console.log(__filename);
console.log(__dirname);