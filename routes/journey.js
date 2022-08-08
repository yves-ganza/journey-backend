const express = require('express')

const router = express.Router()

// Get all entries
router.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
})

// Get a single entry
router.get('/:id', (req, res) => {
    res.json({})
})

// Add a new entry
router.post('/', (req, res) => {
    res.json({})
})

// Update an entry
router.patch('/:id', (req, res) => {
    res.json({})
})

module.exports = router