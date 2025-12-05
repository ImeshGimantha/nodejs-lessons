const fs = require('fs');

fs.stat('./', (err, stats) => {
    if (err) return console.error('Error getting stats: ', err);
    console.log('Directory stats: ', stats);
    console.log('is directory: ', stats.isDirectory());
})