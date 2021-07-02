let category = require('../models/category')

exports.addCategory = (req, res) => {
    console.log("add Cateogary");

    let newCategory = new category({
        name: req.body.category
    })

    newCategory.save((err, result) => {
        res.redirect('/')
    })
}

exports.addPage = (req, res) => {
    console.log("add")
    res.render('addCategory')
}