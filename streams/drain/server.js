const http = require('http');

const server = http.createServer((req, res) => {
    let body ='';
    let countChunk = 0;

    req.setEncoding('utf8');

    req.on('data', (chunk) => {
        body += chunk;
        countChunk++;
    });

    req.on('end', () => {
        try {
            const data = JSON.parse(body);

            res.write(typeof data);
            res.end(countChunk.toString());
        } catch (e) {
            res.statusCode = 400;
            return res.end(`error: ${e.message}`);
        }
    });
});

server.listen(1337);