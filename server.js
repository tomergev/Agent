var express = require('express');
var app = express();

app.listen(3030, function () {
    console.log('Magic Happening on Port 3030')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})



