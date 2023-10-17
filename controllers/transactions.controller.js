const {nanoid} = require("nanoid")

const express = require("express")
const transactions = express.Router()

let budgetArray = require("../models/budget");


transactions.get("/", (req, res) => {
    console.log("[GET] request received.");
    res.status(200).json(budgetArray);
})

transactions.get("/:id", (req, res) => {
    const {id} = req.params;

    console.log(`[GET] request for id:${id} received.`)

    const query = budgetArray.find((transaction) => transaction.id == id )

    if(query) {
        console.log(`Dispensing...`)
        res.status(200).json(query)
    }else {
        console.log(`Object with id: ${id} Not found`)
        res.status(404).json({status: "BAD"})
    } 
})

transactions.post("/", (req, res) => {
    const standard = {
        item_name: "wtring",
        amount: "Number",
        date: "String",
        from: "String",
        category: "String"
    }
    
    const received = Object.keys(req.body)
    console.log(`Post request recieved`)
    
    req.body.id = nanoid(4)

    budgetArray.push(req.body)

    res.status(200).json(budgetArray)
})
transactions.put("/:id", (req, res) => {
    const {id} = req.params;
    console.log(`[PUT] request received.`)

})
transactions.delete("/:id", (req, res) => {
    const {id} = req.params
    console.log(`[DELETE] request received for item id ${id}`)

})

module.exports = transactions