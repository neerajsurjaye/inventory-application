let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let category = new Schema({
    name: { type: String, required: true }
})

module.exports = mongoose.model('category', category)