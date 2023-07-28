
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    imageUrl: {
        type: String,
    },
})

module.exports = mongoose.model('Product', ProductSchema)
