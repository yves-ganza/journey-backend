require('dotenv').config()

const express = require('express')
const journeyRoutes = require('./routes/journey')

// express app
const app = express()

// Logging middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/journey', journeyRoutes)

// Server listening
app.listen(process.env.PORT, 'localhost', () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})
