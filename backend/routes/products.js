
const express = require('express')
const router = express.Router()

const {
    getAllProductsStatic,
    getAllProducts,
    getProduct
} = require('../controllers/products')

router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductsStatic)
router.route('/:id').get(getProduct)

module.exports = router
