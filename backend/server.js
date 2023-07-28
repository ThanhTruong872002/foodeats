
// const importData = require('./seederScript')
// importData()

require("dotenv").config();
require("express-async-errors");
const cors = require("cors");
const express = require("express");
const app = express();

const { connectDB } = require("./configs/db");
const authenticationMiddleware = require("./middleware/authentication")
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleWare = require("./middleware/error-handler");

const authRouter = require("./routes/auth");
const restaurantRouter = require("./routes/restaurant");

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Chào !!!");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", authenticationMiddleware, restaurantRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleWare);

const PORT = process.env.PORT || 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`Server listenning on port ${PORT}...`));
    } catch (err) {
        console.log("Error while start server: " + err);
    }
};

start();
