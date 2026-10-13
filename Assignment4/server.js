const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

console.log("WebSocket Server Started on Port 8080");

server.on('connection', (socket) => {

    console.log("Client Connected");

    socket.on('message', (message) => {
        console.log("Received:", message.toString());

        socket.send("Message received successfully");
    });

    socket.on('close', () => {
        console.log("Client Disconnected");
    });

});