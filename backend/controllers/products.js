
const getAllProducts = async (req, res) => {
    res.send('get all')
}

const getProduct = async (req, res) => {
    res.send('get single product')
}

module.exports = {
    getAllProducts,
    getProduct
}
