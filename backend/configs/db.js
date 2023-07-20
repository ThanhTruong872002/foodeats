
const mongoose = require('mongoose')

const connectDB = (url) => {
    try {
        mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    }
    catch (err) {
        console.log('Connect database fail')
    }
}

module.exports = {
    connectDB
}
