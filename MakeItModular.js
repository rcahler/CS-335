var path = process.argv[2]
var filetype = process.argv[3]

var mymodule = require('./MakeItModularExternal')

var callback = function(err, list) {
    list.forEach(function(file) {
        console.log(file)
    })

}

mymodule(path, filetype, callback)