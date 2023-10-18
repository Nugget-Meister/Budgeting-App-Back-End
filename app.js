// Express
const express = require("express")

const transactionsController = require("./controllers/transactions.controller.js")

const badQuotesArray = require("./models/badquotes.js")

// Controller Imports

const app = express()
const cors = require("cors")

// Baseline for send/receive
app.use(cors())
app.use(express.json())





// Routes
app.use("/transactions", transactionsController)


// Catch all
app.get("*", (req,res) => {
    const randomNum = Math.floor(Math.random() * badQuotesArray.length)
    const quote = badQuotesArray[randomNum]
    // console.log(randomNum ,quote)
    res.status(404).json({status: "BAD", message: [quote]})
})

module.exports = app