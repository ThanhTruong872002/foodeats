
const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true,
    },
    productId: {
        type: String,
        require: true,
    },
    rating: {
        type: Number,
        require: true
    },
    foodQuality: {
        type: Boolean,
        require: true
    },
    deliveryOnTime: {
        type: Boolean,
        require: true
    },
    orderCorrect: {
        type: Boolean,
        require: true
    },
    content: {
        type: String,
    },
    time: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Review', ReviewSchema)

