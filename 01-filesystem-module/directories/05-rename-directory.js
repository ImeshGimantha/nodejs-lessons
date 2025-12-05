const fs = require('fs');

fs.rename('dir1', 'dir2', err => {
    if (err) return console.error('Error renaming directory: ', err);
    console.log('Successfully renamed the directory');
});