const fs = require('fs');
const readline = require('readline');

const readableStream = fs.createReadStream('testFile.txt');
const r1 = readline.createInterface({ input: readableStream });

r1.on('line', line => console.log('Line : ', line));
r1.on('close', () => console.log('Finished processing the file'));