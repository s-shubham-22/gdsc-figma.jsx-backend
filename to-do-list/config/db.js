const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: '../env/.env' })

const MONGO_URI =
    process.env.MONGO_URI || 'mongodb://localhost:27017/gdsc-to-do-list'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log(`MongoDB Connected`)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports = connectDB
