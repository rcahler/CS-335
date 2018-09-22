var url = process.argv[2]
var http = require('http')
var response_complete = ""


function callback(response) {
    response.setEncoding('utf8')
    response.on("data", function (data) {
        response_complete += data
    })
    response.on("end", function(){
        console.log(response_complete.length)
        console.log(response_complete)
    })
}

http.get(url, callback)