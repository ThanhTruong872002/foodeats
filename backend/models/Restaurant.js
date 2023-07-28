
const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    delivery_fee: {
        type: Number
    },
    time: {
        type: Number
    },
    food_type: {
        type: String,
        enum: ['burger', 'pizza', 'sandwiches', 'wings', 'coffe-tea',
            'indian', 'chinese', 'thai', 'american']
    },
    imageUrl: {
        type: String,
    }
})

module.exports = mongoose.model('Restaurant', RestaurantSchema)
