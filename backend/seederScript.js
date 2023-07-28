
require('dotenv').config()

const { connectDB } = require('./configs/db')
const productData = require('./data/products')
const restaurantData = require('./data/restaurant')
const Product = require('./models/Product')
const Restaurant = require('./models/Restaurant')

const importData = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany({})
        await Product.insertMany(productData)

        await Restaurant.deleteMany({})
        await Restaurant.insertMany(restaurantData)
        console.log('Data Import Success')
    }
    catch (err) {
        console.log('Import Fail')
        process.exit(1)
    }
}

module.exports = importData
