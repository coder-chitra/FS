const WebSocket = require('ws');

const client = new WebSocket('ws://localhost:8080');

client.on('open', () => {

    console.log("Connected to Server");

    client.send("Hello Server");

});

client.on('message', (message) => {
    console.log("Server Response:", message.toString());
});

client.on('close', () => {
    console.log("Connection Closed");
});