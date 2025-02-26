import { useEffect, useState } from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses.jsx'
import NewExpense from './components/Expenses/NewExpense/NewExpense.jsx'

/*
const data = [
  {
    id: 0,
    date: new Date("2025-05-19"),
    name: "Krõpsud",
    price: 3.59,
    description: "Pakk Lays stronge."
  },
  {
    id: 1,
    date: new Date("2023-07-25"),
    name: "Dipikaste",
    price: 2.50,
    description: "Väike küüslaugune dipikas."
  },
  {
    id: 2,
    date: new Date("2024-06-05"),
    name: "Šnitslipraad",
    price: 5.60,
    description: "Mõnus praad."
  }
]*/

function App() {
  const [expenses, setExpenses] = useState(() => {
    const expenseFormLocalStorage = JSON.parse(localStorage.getItem("expenses"))
    return expenseFormLocalStorage || []
  })

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  })

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses data={expenses}/>
    </div>
  )
}

export default App
