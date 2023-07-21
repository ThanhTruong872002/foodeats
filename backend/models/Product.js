
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
    delivery_fee: {
        type: Number,
        required: [true, 'Please provide delivery fee'],
    },
    time_cook: {
        type: Number,
        required: [true, 'Please provide time cook'],
    },
    type: {
        type: String,
        required: [true, 'Please choose type of food'],
        enum: ['burger', 'pizza', 'sandwiches', 'wings', 'coffe-tea',
            'indian', 'chinese', 'thai', 'american']
    },
    rating: {
        type: Number,
        default: 5.0
    },
    imageUrl: {
        type: String,
        required: [true, 'Please provide product image'],
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
})

module.exports = mongoose.model('Product', productSchema)
