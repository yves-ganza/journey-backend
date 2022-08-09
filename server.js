require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const journeyRoutes = require('./routes/journey')


// express app
const app = express()

// Middleware for request body
app.use(express.json())

// Logging middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/journey', journeyRoutes)

// Connect to DB
mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('Connected DB')

        // Server listening
        app.listen(process.env.PORT, '127.0.0.1', () => {
            console.log(`Server listening on port ${process.env.PORT}`)
        })
    })
    .catch(e => {
        console.log(e)
    })

