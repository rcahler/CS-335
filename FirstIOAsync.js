var fs = require('fs')

function findNewLine() {
    fs.readdir(path, function (err, list) {
    for(var i = 0; i < list.length; i++) {
        var item = list[i]
        if (item.includes('.' + fileType)) {
            console.log(item)
        }
    }
})
}

findNewLine()
