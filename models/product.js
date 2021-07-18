let mongoose = require('mongoose')
let Schema = mongoose.Schema

let product = new Schema({
    name: { type: String, default: 'null' },
    manufacturer: { type: String, default: 'null' },
    stock: { type: Number, min: 0, default: 0 },
    price: { type: Number, min: 0, default: 0 },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'category' }
})


module.exports = mongoose.model('product', product)
