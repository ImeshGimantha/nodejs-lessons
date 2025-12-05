const fs = require('fs');

// to delete empty directories
fs.rmdir('newDir', err => {
    if (err) return console.error('Error removing directory : ', err);
    console.log('Successfully removed directory');
});

// to delete not empty directories
fs.rm('newDir2', { recursive: true }, err => {
    if (err) return console.error('Error removing directory : ', err);
    console.log('Successfully removed directory(recursively)');
});