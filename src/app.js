require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const logger = require('./logger')
const bookmarksRouter = require('./bookmarks-router')
const validateBearerToken = require('./validate-bearer-token')
const errorHandler = require('./error-handler')

const app = express()

app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common'))
app.use(helmet())
app.use(cors())
app.use(validateBearerToken)
app.use(bookmarksRouter)
app.use(errorHandler)

module.exports = app 



