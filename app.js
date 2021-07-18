let express = require('express')
let app = express()
let path = require('path')
let mongoose = require('mongoose')
let cookie_parser = require('cookie-parser')

//extra middlewares
app.use(express.urlencoded({ extended: true }))

//category Route
let indexRoute = require('./routes/indexRoute')
let categoryRoute = require('./routes/categoryRoute')
let productsRoute = require('./routes/productsRoute')

// view engines
app.set('view engine', 'pug')
app.set('views', 'views');

//db setup
let mongodb = 'mongodb://127.0.0.1:27017/inventory'
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useFindAndModify', false)


// cookie parser
app.use(cookie_parser())

//static Server
app.use(express.static('public'))

app.use('/', indexRoute)
app.use('/category', categoryRoute)
app.use('/products', productsRoute)

app.listen(3000)