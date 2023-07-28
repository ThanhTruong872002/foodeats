
const mongoose = require('mongoose')

const FavoriteSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true,
    },
    resId: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('Favorite', FavoriteSchema)
