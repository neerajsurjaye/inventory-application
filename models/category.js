let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let category = new Schema({
    name: { type: String, required: true },
    id: { type: String, required: true }
})

category.virtual('catId').get(function () { return this._id })


module.exports = mongoose.model('category', category)