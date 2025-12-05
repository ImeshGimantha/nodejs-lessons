const fs = require('fs');

const readableStream = fs.createReadStream('testFile.txt');
const writableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writableStream);

writableStream.on('finish', () => console.log('File copied successfully'));