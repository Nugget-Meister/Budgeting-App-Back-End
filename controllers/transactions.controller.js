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
        res.status(404).json({status: "BAD", message:`Object with id ${id} not found.`})
    } 
})

transactions.post("/", (req, res) => {
    console.log(`Post request recieved`)
        if(budgetArray.find((transaction) => transaction.id == req.body.id)){
            req.body.id == nanoid(4)
        }
        budgetArray.push(req.body)
        res.status(200).json(budgetArray)

    }
)

    

    


transactions.put("/:id", (req, res) => {
    const {id} = req.params;
    console.log(`[PUT] request received for id ${id}.`)

    const query = budgetArray.find((transaction) => transaction.id == id )
    const queryFound = budgetArray.indexOf(query)

    if(query){
        budgetArray[queryFound] = req.body
        res.status(200).json(budgetArray)
    } else {
        res.status(404).json({status: "BAD", message:"Item with ID Not found."})
    }


})
transactions.delete("/:id", (req, res) => {
    const {id} = req.params
    console.log(`[DELETE] request received for item id ${id}`)
    const query = budgetArray.find((transaction) => transaction.id == id )
    const queryFound = budgetArray.indexOf(query)

    if(query){
        budgetArray.splice(queryFound,1)
        res.status(200).json(budgetArray)
    } else {
        res.status(404).json({status: "BAD", message: "Item with ID Not found."})
    }



})

module.exports = transactions