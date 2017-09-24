var express = require('express')
var app = express()

app.use(express.static('./dist'))
app.use(express.static('./dist/pages', { extensions: ['html'] }))

app.listen(3000)
