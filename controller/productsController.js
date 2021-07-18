const product = require('../models/product')
const category = require('../models/category');


exports.addProd = (req, res) => {
    let id = req.params.id;
    // console.log(req.params);
    res.render('addProducts', { id: id })
}

exports.addProdPost = async (req, res) => {
    let data = req.body
    let id = req.params.id

    let cat = await category.findOne({ id: id })


    if (cat.length == 0) {
        res.send('Err : no cat')
    } else {
        data.stock = data.stock || 0
        data.price = data.price || 0

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

exports.getProduct = async (req, res) => {
    let id = req.params.id

    let prod = await product.findOne({ _id: id }).populate("category")


    let url


    if (prod.category) {
        url = `/category/${prod.category.id}`
    }

    res.render('singleProduct', { product: prod, url: url })
}


exports.updateProduct = async (req, res) => {


    let id = req.params.id


    let data = await product.findOneAndUpdate({ _id: id }, req.body, (err) => {
        if (err) {
            console.log(err);
        }
    })



    res.redirect(req.body.url || '/')
}


exports.deleteProduct = async (req, res) => {
    let id = req.params.id

    let prod = await product.findByIdAndDelete(id).populate('category')
    let url = `/category/${prod.category.id}`

    res.redirect(url || '/')
}
