import './App.css'
import ExpenseItem from './components/ExpenseItem/ExpenseItem.jsx'

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
    <>
      {
        data.map(item => (
          <ExpenseItem key={item.id} data={item} />
        ))
      }
    </>
  )
}

export default App
