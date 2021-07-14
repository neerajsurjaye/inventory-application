let category = require('../models/category')


exports.getHomePage = async (req, res) => {
    let data = await category.find({})


    if (data.length == 0) {
        data = null
    }

    res.render('home', { components: data })
}
