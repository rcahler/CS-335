var socket_num = Number(process.argv[2])
var location = process.argv[3]

var http = require('http')
var fs = require('fs');

var server = http.createServer(function (req, res) {
       var file_stream = fs.createReadStream(location)
       file_stream.pipe(res)
})

server.listen(socket_num)