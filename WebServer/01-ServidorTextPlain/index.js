

    const server = require('http');
    server.createServer((req, res) => { 
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('Estas conectado al server localhost:1337...')
     }).listen(1337, '127.0.0.1')