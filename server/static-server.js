
const express = require("express");
const path = require('path')
const http = require('http');

const app = express();

var server = http.createServer(app);

app.use(express.static('../dist'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})
// console.log(path.join(__dirname, 'index.html'))

app.listen(8002, () => {
    console.log('Server start http://localhost:8002/')
})



//////////////////////////////////////////////////////////////

// var staticS = require('node-static');

// var fileServer = new staticS.Server('./dist');

// require('http').createServer(function (request, response) {
//     request.addListener('end', function () {
//         fileServer.serve(request, response);
//     }).resume();
// }).listen(8100, ()=>{
//     console.log('Server start http://localhost:8100/');
// });
