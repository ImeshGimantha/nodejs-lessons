const http = require('http');
const url = require('url');

const logRequest = (req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next(req, res);
}

const server = http.createServer((req, res) => {

    logRequest(req, res, (req, res) => {
        const { pathname } = url.parse(req.url);
    
        if (pathname.startsWith('/product/')) {
            const productId = pathname.split('/')[2];
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end(`Product ID: ${productId}`);
        } else {
            res.writeHead(404, {'content-type': 'text/plain'});
            res.end('Product ID not Found');
        }
    });

});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});