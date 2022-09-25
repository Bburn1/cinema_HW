const express = require('express')
require('dotenv').config()
const cors = require('cors')

const path = require('path')
const movieRouters = require('./routers/movieRouters')
const actorRouters = require('./routers/actorRouters')
const directorRouter = require('./routers/directorRouter')
const studioRouter = require('./routers/studioRouter')
const genreRouters = require('./routers/genreRouters')
// const locationRouters = require('./routers/locationRouters')
const moviesByActorRouters = require('./routers/movieByActorRouters')
const moviesByDirectorRouters = require('./routers/movieByDirectorRouters')
const movieDirectorsActorsRouters = require('./routers/movieDirectorsActorsRouters')

const nationalityRouters = require('./routers/nationalityRouter')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use('/api', movieRouters)
app.use('/api', actorRouters)
app.use('/api', directorRouter)
app.use('/api', studioRouter)
app.use('/api', genreRouters)
app.use('/api', nationalityRouters)
// app.use('/api', locationRouters)
app.use('/api', moviesByActorRouters)
app.use('/api', moviesByDirectorRouters)
app.use('/api', movieDirectorsActorsRouters)

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))

// app.get('/download', (req, res) => {
//   res.download(__dirname, '..', 'public', 'about.html')
// })

// app.get('/movie*', (req, res) => {
//   res.send('List of movies')
// })

// app.('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
// })
