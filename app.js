// Express
const express = require("express")

const transactionsController = require("./controllers/transactions.controller.js")


// Controller Imports

const app = express()
const cors = require("cors")

// Baseline for send/receive
app.use(cors())
app.use(express.json())

// Routes
app.use("/transactions", transactionsController)


module.exports = app