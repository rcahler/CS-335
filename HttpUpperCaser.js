var socket_num = Number(process.argv[2])
var location = process.argv[3]

var http = require('http')
var map = require('through2-map')


var server = http.createServer(function (req, res) {
       
    req.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res)
})

server.listen(socket_num)