const fs = require('fs');

const dirName = 'newDir3';

if (fs.existsSync(dirName)) {
    console.log('Directory exists');
} else {
    console.log('Directory does not exists');
}