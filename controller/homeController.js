let category = require('../models/category')


exports.getHomePage = async (req, res) => {
    let data = await category.find({})


    if (data.length == 0) {
        data = null
    }

    res.render('home', { components: data })
}


exports.getLoginPage = (req, res) => {
    res.render('login')
}

exports.loginPost = (req, res) => {
    if (req.body.password == "Pass1234") {
        res.render('message', { message: "Logged in" })
    } else {
        res.render('message', { message: "Wrong Password" })
    }
}