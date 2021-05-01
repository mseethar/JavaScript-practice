const fs = require('fs');

let files = fs.readdirSync('.');
console.log('readdirSync', files);

fs.readdir('.', (err, files) => {
    if(err) console.log('Error occured', err);
    else console.log('readdirAsync', files);
});