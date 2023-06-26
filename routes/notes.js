const notes = require('express').Router()
const { v4: uuidv4 } = require('uuid')
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils')

// GET route for retrieving all the notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

// GET route for a specific note
notes.get('/:id', (req, res) => {
    const noteId = req.params.id
    readFromFile('./db/db.json')
      .then((data) => JSON.parse(data))
      .then((json) => {
        const result = json.filter((note) => note.id === noteId)
        return result.length > 0
          ? res.json(result)
          : res.json('A note with that id does not exist')
      })
})

// POST route for a new note
notes.post('/', (req, res) => {
    console.log(req.body)
  
    const { title, text } = req.body
  
    if (req.body) {
      const newnote = {
        title,
        text,
        id: uuidv4(),
      }
  
      readAndAppend(newnote, './db/db.json')
      res.json('Note added successfully')
    } else {
      res.error('Error in adding note')
    }
})

module.exports = notes