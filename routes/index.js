let express = require('express')
let route = express.Router()


route.get('/', (req, res) => {
    res.render('home', { title: "header" })
})



module.exports = route;