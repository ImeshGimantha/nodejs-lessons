const fs = require('fs');

const content = "This is new content for testFile in filesystem lesson";

fs.writeFile('testFile.txt', content, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File written successfully");
})