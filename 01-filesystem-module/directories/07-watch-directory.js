const fs = require('fs');

fs.watch('./', (eventType, fileName) => {
    console.log(`Event: ${eventType}`);
    if (fileName) console.log(`File name: ${fileName}`);
});