const mongoose = require('mongoose')

const Schema = mongoose.Schema

const entrySchema = new Schema({
    title: {
        type: String,
    },
    stamp: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Entry', entrySchema)