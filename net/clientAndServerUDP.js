const dgram = require('dgram');
const fs = require('fs');
const port = 4000;
const defaultSize = 16;

function Client(remoteIP) {
    let inStream = fs.createReadStream(__filename);
    let socket = dgram.createSocket('udp4');

    inStream.on('readable', ()=>readData());

    function readData() {
        let message = inStream.read(defaultSize);
        if (!message) {
            return socket.unref();
        }
        socket.send(message, 0, message.length, port, remoteIP, (err, bytes) => console.log('Данный отправлены'));
    }
}

function Server() {
    let socket = dgram.createSocket('udp4');

    socket.on('message', (msg, rinfo) => process.stdout.write(msg.toString()));
    socket.on('listening', () => console.log('Server ready:', socket.address()));
    socket.bind(port);
}

if (process.argv[2] === 'client') {
    new Client(process.argv[3]);
} else {
    new Server();
}