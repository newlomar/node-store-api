require('dotenv').config()

const connectDB = require('./db/connect')
const connect = require('./db/connect')
const Product = require('./models/product')

const jsonProducts = require('./products.json')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('success')
    } catch (error) {
        console.log(error)
    }
}

start()