const express = require('express');
const ah = require('./hooks');

const app = express();
const port = 3000;

app.use((req, res, next) => {
    const data = {headers: req.headers};
    ah.createRequestContext(data);
    next();
});

app.get('/', (req, res) => {
    const reqContext = ah.getRequestContext();
    res.json(reqContext);
});

async function startServer() {
    try {
        app.listen(port, () => console.log(`Server running on port ${port}`));
    } catch (e) {
        console.error(e.message);
    }
}

startServer();