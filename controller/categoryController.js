let category = require('../models/category')
let products = require('../models/product')

let remove_special = (inp) => {
    console.log("Function : remove Special");

    let special = ['/', '\\', ' ']
    let out = ''

    for (let i = 0; i < inp.length; i++) {
        let c = inp[i]

        if (!special.includes(c)) {
            out = out + c
        }
        out = out.toLowerCase()
    }
    return out
}

exports.remove_special = remove_special

exports.addCategory = async (req, res) => {
    console.log("Controller : add Cateogary");


    let newCategory = new category({
        name: req.body.category,
        id: remove_special(req.body.category)
    })

    await newCategory.save((err, result) => {
        res.redirect('/')
    })
}

exports.addPage = (req, res) => {
    console.log("Controller : add")
    res.render('addCategory')
}


exports.singleCat = async (req, res) => {
    console.log('Function : single cat');
    let id = req.params.id;

    let cat = await category.findOne({ id: id })

    if (cat.length == 0) {
        res.send('Err : no cat')
    } else {

        let prod = await products.find({ category: cat._id })
        console.log(prod);
        res.render('singleCat', { id: id, products: prod, catName: cat.name })

    }
}

exports.deleteCat = async (req, res) => {
    let id = req.params.id
    let cat = await category.findOne({ id: id })
    let cat_id = cat._id

    let prod = await products.deleteMany({ category: cat_id }, (err) => {
        if (err) {
            console.log("Product : ", err);
        }
    })
    console.log("Deleted : ", prod);

    cat = await category.deleteOne({ id: id }, (err) => {
        if (err) {
            console.log("Category : ", err);
        }
    })
    console.log("Deleted : cat : ", cat)

    res.redirect('/')
}