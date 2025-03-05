import { useEffect, useState } from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses.jsx'
import NewExpense from './components/Expenses/NewExpense/NewExpense.jsx'
import Error from './components/UI/Error.jsx'

function App() {
  const [isFetching, setIsFetching] = useState(false)
  const [expenses, setExpenses] = useState([])
  const [error, seterror] = useState(null)
  const [showerror, setShowerror] = useState(false)

  const errorHandler = () => {
    seterror(null)
    setShowerror(false)
  }

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true)
      try {
        const response = await fetch("http://localhost:3001/expenses", {method: "GET"})
        .then(response => {
          return response.json()
        })
        .then(responseData => {
          setExpenses(responseData.expenses)
        })
      } catch (error) {
        seterror({
          title: "Viga!",
          message: "Andmete hankimine ebaõnnestus. Palum proovige hiljem uuesti."
        })
        setShowerror(true)
      }
      setIsFetching(false)
    }

    getExpenses()

    console.log(expenses)
  }, [])

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses]
    })
  }

  return (
    <div className="App">
      { showerror && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses data={expenses} isLoading={isFetching}/>
    </div>
  )
}

export default App
