
const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({}).sort({ createAt: -1 })
    res.status(StatusCodes.OK).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
    const { sort, type, price } = req.query
    const objectQuery = {}
    if (type) {
        objectQuery.type = type
    }
    res.json({ msg: sort })
}

const getProduct = async (req, res) => {
    const { id } = req.params
    if (!id) {
        throw new BadRequestError('Please provide id product')
    }
    const product = await Product.findOne({ _id: id })
    if (!product) {
        throw new NotFoundError(`No product with id = ${id}`)
    }
    res.status(StatusCodes.OK).json({ product })
}

module.exports = {
    getAllProductsStatic,
    getAllProducts,
    getProduct
}
