// Express
const express = require("express")
const cors = require("cors")

// Controller Imports

const app = express()

// Baseline for send/receive
app.use(cors())
app.use(express.json())

// Routes


module.exports = app