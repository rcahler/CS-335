var path = process.argv[2]
var fileType = process.argv[3]

var fs = require('fs')

fs.readdir(path, function (err, list) {
    for(var i = 0; i < list.length; i++) {
        var item = list[i]
        if (item.includes('.' + fileType)) {
            console.log(item)
        }
    }
})
