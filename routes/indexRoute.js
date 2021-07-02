let express = require('express')
let route = express.Router()

let home = require('../controller/homeController')


route.get('/', home.getHomePage)



module.exports = route;