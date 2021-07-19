let express = require('express')
let app = express()
let path = require('path')
let mongoose = require('mongoose')
let cookieParser = require('cookie-parser')
let dotenv = require('dotenv')
dotenv.config()

//extra middlewares
app.use(express.urlencoded({ extended: true }))

//category Route
let indexRoute = require('./routes/indexRoute')
let categoryRoute = require('./routes/categoryRoute')
let productsRoute = require('./routes/productsRoute')

// view engines
app.set('view engine', 'pug')
app.set('views', 'views');

// console.log(process.env.MONGODB);
//db setup
let mongodb = process.env.MONGODB
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useFindAndModify', false)


// cookie parser
app.use(cookieParser())

//static Server
app.use(express.static('public'))

app.use('/', indexRoute)
app.use('/category', categoryRoute)
app.use('/products', productsRoute)

app.listen(process.env.PORT || 3000, () => {
    console.log(`started app at ${process.env.PORT || 3000}`);
})