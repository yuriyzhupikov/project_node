const asyncHooks = require('async_hooks');
const http = require('http');
const fs = require('fs');

const hooks = {
    init: init
}

const asyncHook = asyncHooks.createHook(hooks);

asyncHook.enable();

http.createServer((req, res) => {
    res.end('Hello, World!');
}).listen(5000);

function init(asyncId, type, triggerId) {
    fs.writeSync(1, `${type} \n`);
}