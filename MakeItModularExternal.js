var fs = require('fs')

module.exports = function (path, filetype, callback) {

    fs.readdir(path, function (err, list) {

        if (err) {
            return callback(err)
        }

        var newList = []
        for(var i = 0; i < list.length; i++) {

            var item = list[i]
            if (item.includes('.' + filetype)) {
                newList.push(item)
            }
        }
        return callback(null, newList)
    })
}
