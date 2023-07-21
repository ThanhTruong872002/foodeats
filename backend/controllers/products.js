
const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({}).sort({ createAt: -1 })
    res.status(StatusCodes.OK).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
    res.send('get all product')
}

const getProduct = async (req, res) => {
    const { id } = req.params
    const product = await Product.findOne({ _id: id })
    res.status(StatusCodes.OK).json({ product })
}

module.exports = {
    getAllProductsStatic,
    getAllProducts,
    getProduct
}
