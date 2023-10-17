// Express
const express = require("express")
const cors = require("cors")

const transactions = require("./controllers/transactions.controller")

// Controller Imports

const app = express()

// Baseline for send/receive
app.use(cors())
app.use(express.json())

// Routes
app.listen("/transactions", transactions)

module.exports = app