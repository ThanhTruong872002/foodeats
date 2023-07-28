
const express = require('express')
const router = express.Router()

const {
    getAllRestaurantStatic,
    getAllRestaurants,
    getRestaurant
} = require('../controllers/restaurant')

router.route('/').get(getAllRestaurants)
router.route('/static').get(getAllRestaurantStatic)
router.route('/:id').get(getRestaurant)

module.exports = router
