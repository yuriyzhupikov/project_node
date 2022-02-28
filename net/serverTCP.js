const net = require('net');
let clients = 0;

let server = net.createServer(client => {
    clients++;
    let clientId = clients;
    console.log('Client connected:', clientId);

    client.on('end', () => console.log('Client disconnected:', clientId));

    client.write('Welcome client:' + clientId);
    client.pipe(client);
});

server.listen((8080, () => console.log('Server started on port 8000')));