var socket_num = Number(process.argv[2])
var net = require('net')

function correct_format(data) {
    if (Number(data) < 10) {
        data = '0' + data
    }
    return data
}
function DateFormat() {
    var date = new Date()
    var year = date.getFullYear()
    var mon = date.getMonth()
    

    var day = date.getDate()
    var hours = date.getHours()
    var mins = date.getMinutes()

    //Won't except answer without a new line
    var full_date = year + '-'+ correct_format(mon + 1) + '-' + correct_format(day) + ' ' + correct_format(hours) + ':' + correct_format(mins) + "\n"
    return full_date
}

var server = net.createServer(function(socket) {
    socket.end(DateFormat())
})

server.listen(socket_num)