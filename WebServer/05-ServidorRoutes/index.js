

    const server = require('http');
    const fs = require('fs');

    server.createServer((req, res) => { 

      if (req.url === '/'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('Estas conectado al server localhost:1337...')
      } else if (req.url === '/api'){
        res.writeHead(200, { 'content-type':'application/json' });
        users = [{ id: 01, name: 'Fernanda', lastname: 'Castillo'}, {id: 02, name: 'Edwar', lastname: 'Castillo'}, {id: 03, name: 'Karlins', lastname: 'Medina'}]
        res.end(JSON.stringify(users));
      } else{
        res.writeHead(404, {'content-type': 'text/plain'});
        res.end(' Not Found :( ')
      }        
    }).listen(1337, '127.0.0.1')