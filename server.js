const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const postsRoutes = require('./routes/posts')
const db = require('./db/connection')
const PORT = process.env.PORT || 3000

const app = express()

// example of custom express middleware
// catch requests for favicon
const ignoreFavicon = (req, res, next) => {
    if (req.originalUrl.includes('favicon.ico')) {
        res.status(204).end()
    }
    next()
}

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(ignoreFavicon)
app.use('/api', postsRoutes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))