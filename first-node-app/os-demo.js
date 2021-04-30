const os = require('os');

console.log(`Free mem: ${os.freemem()}`);
console.log(`Total mem: ${os.totalmem()}`);
console.log(os.endianness());