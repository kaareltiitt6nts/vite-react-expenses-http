import express from "express"
import fs from "fs/promises"

const app = express()
const port = 3001

const EXPENSES_PATH = "./data/expenses.json"

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    next()
})

app.get("/expenses", async (req, res) => {
    const file = await fs.readFile(EXPENSES_PATH)
    const data = JSON.parse(file)

    console.log(data)

    res.status(200).json({expenses: data})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})