
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide product name'],
    },
    description: {
        type: String,
        required: [true, 'Please provide product description'],
    },
    price: {
        type: Number,
        required: [true, 'Please provide product price'],
    },
    countInStock: {
        type: Number,
        required: [true, 'Please provide product count In Stock'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Please provide product image'],
    },
})

module.exports = mongoose.model('Product', productSchema)
