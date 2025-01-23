import './App.css'
import ExpenseItem from './components/Expenses/ExpenseItem.jsx'
import Expenses from './components/Expenses/Expenses.jsx'

function App() {
  const data = [
    {
      id: 0,
      date: new Date(),
      name: "Krõpsud",
      price: 3.59,
      description: "Pakk Lays stronge."
    },
    {
      id: 1,
      date: new Date(),
      name: "Dipikaste",
      price: 2.50,
      description: "Väike küüslaugune dipikas."
    },
    {
      id: 2,
      date: new Date(),
      name: "Šnitslipraad",
      price: 5.60,
      description: "Mõnus praad."
    }
  ]

  return (
    <Expenses data={data}/>
  )
}

export default App
