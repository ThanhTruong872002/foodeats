
require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const { connectDB } = require('./configs/db')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleWare = require('./middleware/error-handler')

const authRouter = require('./routes/auth')
const productsRouter = require('./routes/products')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Chào !!!')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/products', productsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleWare)

const PORT = process.env.PORT || 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, console.log(`Server listenning on port ${PORT}...`))
    }
    catch (err) {
        console.log('Error while start server: ' + err)
    }
}

start()
