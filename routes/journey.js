const express = require('express')

const router = express.Router()

const {
    getAllEntries,
    getEntry,
    createEntry,
    updateEntry,
    deleteEntry
} = require('../controllers/entryController')

// Get all entries
router.get('/', getAllEntries)

// Get a single entry
router.get('/:id', getEntry)

// Add a new entry
router.post('/', createEntry)

// Update an entry
router.patch('/:id', updateEntry)

// Delete an entry
router.delete('/:id', deleteEntry)

module.exports = router