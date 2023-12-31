const express = require('express')
const path = require('path')
const reqLogger = require('./middleware/reqLogger')
const api = require('./routes/index')

const PORT = process.env.PORT || 3001

const app = express()

// Import custom middleware, reqLogger
app.use(reqLogger)

// Middleware for parsing JSON and urlencoded form data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', api)

app.use(express.static('public'))

// GET route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

// GET route for notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
})

// Wildcard route to direct users to homepage
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})