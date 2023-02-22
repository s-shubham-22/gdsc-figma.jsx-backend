const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const { TaskRouter } = require('./routes')

dotenv.config({ path: './env/.env' })

const app = express()
const PORT = process.env.PORT || 5000

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Home Page!')
})

app.use('/task', TaskRouter)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`)
})
