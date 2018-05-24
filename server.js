var http = require('http')

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-type': 'text/plan' })

    response.end('hello word\n')
}).listen(8888)

console.log('server runnning at http://127.0.0.1:8888')