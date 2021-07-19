let express = require('express')
let route = express.Router()

let home = require('../controller/homeController')


route.get('/', home.getHomePage)
route.get('/login', home.getLoginPage)
route.post('/login', home.loginPost)
route.get('/about', home.about)


module.exports = route;