var express = require('express');
var app = express();
var Client = require('node-rest-client').Client

var client = new Client()

app.listen(3030, function () {
    console.log('Magic Happening on Port 3030')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


client.get('https://api.agent.com/public/profiles', { headers: { 'X-Authorization': '}kpJ/}RUXG7*6qm2wM6^ZX=x3?7+&TM=' } }, function (response) {
    module.exports = response 
})




