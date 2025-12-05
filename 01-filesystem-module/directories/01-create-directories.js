const fs = require('fs');

// Asynchronous method
fs.mkdir('newDir', err => {
    if (err) return console.error('Error creating directory : ', err);
    console.log('Directory created successfully');
});

// Synchronous method
fs.mkdirSync('newDir2');
console.log('New directory created successfully');