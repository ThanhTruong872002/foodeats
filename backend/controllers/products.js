
const jwt = require('jsonwebtoken')

const getAllProducts = async (req, res) => {
    res.send('get single product')
}

const getProduct = async (req, res) => {
    res.send('get single product')
}

module.exports = {
    getAllProducts,
    getProduct
}
