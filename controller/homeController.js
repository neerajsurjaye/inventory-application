let category = require('../models/category')


exports.getHomePage = async (req, res) => {
    let data = await category.find({})


    if (data.length == 0) {
        data = null
    }

    res.render('home', { components: data })
}


exports.getLoginPage = (req, res) => {
    // console.log(req.cookies);
    if (req.cookies.auth == 'loggedin') {
        res.clearCookie('auth')
        res.render('message', { message: "Logged out" })
    }
    else {
        res.render('login')
    }
    // res.render('login')
}

exports.loginPost = (req, res) => {

    if (req.body.password == "password") {
        res.cookie('auth', 'loggedin', { maxAge: 1000 * 60 * 60 })
        res.render('message', { message: "Logged in" })
    } else {
        res.render('message', { message: "Wrong Password" })
    }
}


exports.auth = (req, res, next) => {
    if (req.cookies.auth == 'loggedin') {
        next()
    } else {
        res.render('message', { message: "Login to do this operation" })
    }
}