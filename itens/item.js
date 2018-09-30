const restful = require('mode-restful')
const mongoose = restful.mongoose

const itemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    amount: {type: Number, min: 0, required: true}
})

module.exports = restful.model('Item', itemSchema)