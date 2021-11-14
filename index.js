const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let path = './';

    switch (req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/contact-me':
            path += 'contact-me.html';
            break;
        default:
            path += '404.html';
            break;
    }

    res.setHeader('Content-Type', 'text/html');

    fs.readFile(path, (err, data) => {
        if (err) {
            console.error(err);
            res.end();
        }
        else res.end(data);
    });
})

server.listen(8080, () => console.log('listening on port ' + port));