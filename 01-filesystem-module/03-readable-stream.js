const fs = require('fs');

const readableStream = fs.createReadStream('testFile.txt', {encoding: 'utf8'});

readableStream.on('data', chunk => console.log(chunk));
readableStream.on('end', () => console.log('Finished reading the file.'));
readableStream.on('error', err => console.error('Error: ', err));