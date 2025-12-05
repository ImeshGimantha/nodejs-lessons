const fs = require('fs');

// asynchronous method
fs.readdir('./', (err, files) => {
    if (err) return console.error('Error reading directory : ', err);
    console.log('Directory content(asynchronous) : ', files);
});

// synchronous method
const files = fs.readdirSync('./');
console.log('Directory content(synchronous) : ', files);