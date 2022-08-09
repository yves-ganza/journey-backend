const Entry = require('../models/entryModel')
const mongoose = require('mongoose')

const getAllEntries = async (req, res) => {
    try {
        const entries = await Entry.find()
        res.status(200).json(entries)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getEntry = async (req, res) => {
    try {
        const {id} = req.params

        // Check for a valid id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({ error: 'No such entry' })
        }

        const data = await Entry.findById(id)

        if(!data){
            return res.status(404).json({ error: 'No such entry' })
        }

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const createEntry = async (req, res) => {
    const { title, data } = req.body
    try{
        const newEntry = await Entry.create(
            {
                title: title, 
                data: data, 
                stamp: Date.now().toString()
            }
        )
        res.status(200).json(newEntry)
    }catch(error){
        res.status(400).json({error: e.message})
    }
}

const updateEntry = async (req, res) => {
    try {
        const {id} = req.params

        // Check for a valid id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({ error: 'No such entry' })
        }

        const data = await Entry.findOneAndUpdate({_id: id}, {...req.body})

        if(!data){
            return res.status(404).json({ error: 'No such entry' })
        }

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteEntry =  async (req, res) => {
    try {
        const {id} = req.params

        // Check for a valid id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({ error: 'No such entry' })
        }

        const data = await Entry.findOneAndDelete({_id: id})

        if(!data){
            return res.status(404).json({ error: 'No such entry' })
        }

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { getAllEntries, getEntry, createEntry, updateEntry, deleteEntry}