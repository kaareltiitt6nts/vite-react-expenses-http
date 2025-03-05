import express from "express"
import fs from "fs/promises"

const app = express()
const port = 3001

const EXPENSES_PATH = "./data/expenses.json"

app.use(express.urlencoded({extended: true}))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    next()
})

app.get("/expenses", async (req, res) => {
    const file = await fs.readFile(EXPENSES_PATH, "utf-8")
    const data = JSON.parse(file)

    res.status(200).json({expenses: data})
})

app.post("/add-expense", async (req, res) => {
    const expenseData = req.body.expense
    const newExpense = {
        ...expenseData,
        id: Math.random() * 1000
    }

    const rawData = await fs.readFile(EXPENSES_PATH, "utf-8")
    const expensesData = JSON.parse(rawData)
    expensesData.push(newExpense)
    await fs.writeFile(EXPENSES_PATH, JSON.stringify(expensesData))
    res.status(201).json({message: "Expense added!"})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})