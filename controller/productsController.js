let product = require('../models/product')
let category = require('../models/category')

exports.addProd = (req, res) => {
    let id = req.params.id;
    // console.log(req.params);
    res.render('addProducts', { id: id })
}

exports.addProdPost = async (req, res) => {
    let data = req.body
    let id = req.params.id

    let cat = await category.findOne({ id: id })

    console.log(cat);
    if (cat.length == 0) {
        res.send('Err : no cat')
    } else {


        let prodInstance = new product({
            name: data.name,
            manufacturer: data.manufacturer,
            stock: data.stock,
            price: data.price,
            category: cat._id
        })

        await prodInstance.save((err) => {
            console.log(err)
        })

    }

    res.redirect(`/category/${id}`)
}