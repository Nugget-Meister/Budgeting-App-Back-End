const express = require("express")
const transactions = express.Router()

let budgetArray = require("../models/budget")

transactions.get("/", (req, res) => {
    res.send(200).json(budgetArray)
})