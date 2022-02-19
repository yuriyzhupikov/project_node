var CountStream = require('./countstream');
var countStream = new CountStream('eBooks');
var http = require('http');

http.get('http://www.manning.com', function (res) {
    res.pipe(countStream);
    //console.log(res);
});

countStream.on('total', function (count) {
    console.log('Total matches:', count);
});