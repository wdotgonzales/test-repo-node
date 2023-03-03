const http = require('http');

const server = http.createServer((request, response) => {

    if (request.url === '/') {
        response.end("Welcome to our home page");
    }

    if (request.url === '/about') {
        response.end('Here is our short history');
    }

    response.end(`
    <div style="text-align:center">
    <h1> PAGE NOT FOUND </h1>
    <p> We can't seem to find the page your are looking for </p>
    <a href="/">Go Back Home</a>
    </div>
    `)

})

server.listen(5000);