const http = require('http');
const fs = require('fs');
const PORT = 8080

const server = http.createServer((req, res) => {

    if (req.method == 'GET' && req.url == '/') {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
          });
    } else {
        fs.readFile('404.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
          });
    }

})

server.listen(PORT, () => {
    console.log(`Servidor pronto na porta ${PORT}`)
})