let mongoose = require('mongoose')
let Schema = mongoose.Schema

let product = new Schema({
    name: { type: String, reqruied: true },
    manufacturer: { type: String, required: true },
    stock: { type: Number, min: 0 },
    price: { type: Number, min: 0 },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'category' }
})


module.exports = mongoose.model('product', product)
