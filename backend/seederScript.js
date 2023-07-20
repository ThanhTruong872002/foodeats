
require('dotenv').config()

const productData = require('./data/products')
const { connectDB } = require('./configs/db')
const Product = require('./models/Product')

const importData = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany({})
        await Product.insertMany(productData)
        console.log('Data Import Success')
        process.exit()
    }
    catch (err) {
        console.log('Import Fail')
        process.exit(1)
    }
}

importData()
