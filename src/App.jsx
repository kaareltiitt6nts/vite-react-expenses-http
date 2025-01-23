import './App.css'
import ExpenseItem from './components/ExpenseItem/ExpenseItem.jsx'

function App() {
  const data = [
    {
      date: new Date(),
      name: "Krõpsud",
      description: "Pakk Lays stronge."
    },
    {
      date: new Date(),
      name: "Dipikaste",
      description: "Väike küüslaugune dipikas."
    }
  ]

  return (
    <>
      <ExpenseItem 
        data={data[0]}
      />
      <ExpenseItem 
        data={data[1]}
      />
    </>
  )
}

export default App
