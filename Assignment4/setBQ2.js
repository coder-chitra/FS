const fs = require('fs');

const readableStream = fs.createReadStream('data.txt', 'utf8');

readableStream.on('data', (chunk) => {
    console.log("Received Data:");
    console.log(chunk);
});

readableStream.on('end', () => {
    console.log("End of Stream");
});