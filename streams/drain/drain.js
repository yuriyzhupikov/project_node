const fs = require('fs');
const path = require('path');

const writer = fs.createWriteStream(path.resolve(__dirname, "data.txt"));
writeOneMillionTimes(writer, "Hello ", "utf8", callback);

function writeOneMillionTimes(writer, data, encoding, callback) {
    let i = 1000000;
    let countDrain = 0;

    write();

    function write() {
        let ok = true;
        do {
            i--;
            if (i === 0) {
                writer.write(data, encoding, callback);
            } else {
                ok = writer.write(data, encoding);
            }
        } while (i > 0 && ok);

        if (i > 0) {
            writer.once('drain', () => {
                console.log("called drain");
                console.log(countDrain++);
                write();
            });
        }
    }
    return countDrain;
}

function callback() {
    console.log("cb");
}