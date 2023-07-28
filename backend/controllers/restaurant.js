
const Restaurant = require('../models/Restaurant')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllRestaurantStatic = async (req, res) => {
    res.send('get all product static')
}

const getAllRestaurants = async (req, res) => {
    res.send('get all product')
}

const getRestaurant = async (req, res) => {
    res.send('get product')
}

module.exports = {
    getAllRestaurantStatic,
    getAllRestaurants,
    getRestaurant
}
