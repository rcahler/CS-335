var socket_num = Number(process.argv[2])
var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
       
    var parsed_url = url.parse(req.url, true)
    var time = new Date(parsed_url.query.iso)
    var result = null

    if(parsed_url.pathname.includes("parse")) {
        //parsetime
        result = {
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds()
        }
    } else if (parsed_url.pathname.includes("unix")) {
        result = {
            unixtime: time.getTime()
        }
    }

    res.end(JSON.stringify(result))

    

})

server.listen(socket_num)