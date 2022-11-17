const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello, world');
        res.end();
    } else if (req.url === '/about') {
        res.write('about us');
        res.end();
    } else {
        res.write('404 not found');
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000');
