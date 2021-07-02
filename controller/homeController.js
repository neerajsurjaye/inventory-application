let category = require('../models/category')

exports.getHomePage = async (req, res) => {
    let data = await category.find({})
    let cats = data.map((obj) => {
        return obj.name
    })

    if (cats.length == 0) {
        cats = null
    }

    res.render('home', { components: cats })
}
