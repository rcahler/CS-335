var http = require('http')

var url_list = []
var response_list = []
var response_number = 0


for (var i = 2; i < process.argv.length; i++) {
    url_list.push(process.argv[i])
    response_list.push("")
}

url_list.forEach(function(item, i) {
    var url = url_list[i]

    //Previous callback does not allow indicies
    http.get(url, function(response) {
        response.setEncoding('utf8')
        response.on("data", function (data) {
            response_list[i] = response_list[i] + data 
        })
        response.on("end", function(){
            response_number++
            if (response_number == url_list.length) {
                console.log(response_list.join('\n'));
            }
        })
    })
})