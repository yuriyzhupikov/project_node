const onAsyncHook = require('on-async-hook');
const http = require('http');

onAsyncHook(data => console.log(data));

http.createServer((req, res) => console.log("Start server..."))
    .listen(5000);