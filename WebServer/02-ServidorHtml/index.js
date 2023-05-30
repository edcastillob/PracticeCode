
const server = require('http');
const fs = require('fs');

server.createServer((req, res)  => { 
    res.writeHead(200, { 'content-type':'text/html' });
    let html = fs.readFileSync( __dirname + '/index.html');
    res.end(html);
 }).listen(1337, '127.0.0.1')