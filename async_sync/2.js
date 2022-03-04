const fs = require('fs');

function readJSON(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            return callback(err);
        }

        // let parsed;
        // console.log(data);
        // try {
        //     parsed = JSON.parse(data);
        // } catch (e) {
        //     return callback(err);
        // }

        callback(null, JSON.parse(data));
    });
}

readJSON('data.txt', (err, data) => {
    if (err) {
        return console.log(err);
    }
    console.log(data);
})