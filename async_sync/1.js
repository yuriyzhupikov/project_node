// Не предсказеумый код
// Смесь асихроности и синхроности

const fs = require('fs');
const cache = {};

function inconsistentRead(filename, callback) {
    if (cache[filename]) {
        // process.nextTick(() => {
        //     console.log('3');
        //     callback(cache[filename]);
        // });
        console.log('3');
        callback(cache[filename]);
    }
    else {
        // fs.readFile(filename, 'utf8', (err, data) => {
        //     cache[filename] = data;
        //     callback(data);
        // });
        // setTimeout(()=> {
        //     let data = 'some data';
        //     cache[filename] = data;
        //     console.log('4');
        //     callback(data);
        // }, 0);
        console.log('4');
        callback(cache[filename]);
    }
}

function createFileReader(filename) {
    const listeners = [];
    console.log('2');
    inconsistentRead(filename, function (value) {
        console.log('5');
        listeners.forEach(listener => listener(value));
    });
    return {
        onDataReady: function (listener) {
            console.log('6');
            listeners.push(listener);
        }
    };
}

console.log('1');
const reader1 = createFileReader('data_txt');
reader1.onDataReady(function (data) {
    console.log('7');
    console.log('<<<<First call data: ', data);

    console.log('8');
    const reader2 = createFileReader('data_txt');
    reader2.onDataReady(function (data) {
        console.log('9');
        console.log('<<<<<Second call data: ', data);
    });
});
