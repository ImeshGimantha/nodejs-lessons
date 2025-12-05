const fs = require('fs');

const writableStream = fs.createWriteStream('testFile.txt');

writableStream.write('This is the text create using writableStream');
writableStream.end();
writableStream.on('finish', () => console.log('Finished writing to the file'));