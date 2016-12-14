var express = require('express')
var app = express()

app.get('/', function (req, res) {
    var ip = req.ip.split(':')[3]
    var lang = req.get('Accept-Language')
    var software = req.get('user-agent')
    var retObj = {
        ipaddress: ip,
        language: lang,
        software: software
    }
    res.send(retObj)
})

app.listen(8080, function () {
  console.log('Whoami app listening on port 8080!')
})