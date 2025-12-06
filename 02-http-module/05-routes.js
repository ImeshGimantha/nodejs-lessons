const http = require('http');
const url = require('url');

// routes handler
const routes = {
    '/': (req, res) => {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('Welcome to homepage');
    },
    '/about': (req, res) => {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('Welcome to about');
    },
    '/notFound': (req, res) => {
        res.writeHead(404, {'content-type': 'text/plain'});
        res.end('Page not found');
    },
}

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url);

    if (routes[pathname]) {
        routes[pathname](req, res);
    } else {
        routes['/notFound'](req, res);
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});