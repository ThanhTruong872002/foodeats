
const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    productId: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('Cart', CartSchema)
