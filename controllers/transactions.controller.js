const express = require("express")
const transactions = express.Router()

let budgetArray = require("../models/budget")

transactions.get("/", (req, res) => {
    console.log("Get request recieved")
    res.status(200).json(budgetArray)
})

module.exports = transactions