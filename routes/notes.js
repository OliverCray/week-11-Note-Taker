const notes = require('express').Router()
const { v4, uuidv4 } = require('uuid')
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils')

// GET route for retrieving all the notes
notes.get('/', (req, res) => {
    console.info(`${req.method} request received for ${req.path}`)
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})