let express = require('express')
let app = express()
let path = require('path')

let index_route = require('./routes/index')

//view engines
app.set('view engine', 'pug')
app.set('views', 'views');

//static Server
app.use(express.static('public'))

app.use('/', index_route)

app.listen(3000)