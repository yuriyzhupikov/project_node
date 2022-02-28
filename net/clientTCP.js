const net = require('net');

let client = net.connect(8080);
let data='';

client.on('data', data => {
    console.log(data);
    client.end();
});