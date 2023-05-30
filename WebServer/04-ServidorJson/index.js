

const server = require('http');
const fs = require('fs');

server.createServer((req, res) => { 
    res.writeHead(200, { 'content-type':'application/json' });
    users = [{ id: 01, name: 'Fernanda', lastname: 'Castillo'}, {id: 02, name: 'Edwar', lastname: 'Castillo'}, {id: 03, name: 'Karlins', lastname: 'Medina'}]
    res.end(JSON.stringify(users));
 }).listen(1337, '127.0.0.1')