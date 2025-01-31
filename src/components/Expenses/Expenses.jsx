import "./Expenses.css"
import ExpenseItem from "./ExpenseItem.jsx"
import Card from "../UI/Card.jsx"
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter.jsx"
import { useState } from "react"

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState(2023)

    const onFilterChangedHandler = (newYear) => {
        const year = parseInt(newYear)
        if (!isNaN(year)) {
            setSelectedYear(year)
        }
    }

    let expensesContent = <p>Kulusid ei ole!</p>
    const filteredExpenses = props.data.filter(item => 
        new Date(item.date).getFullYear() === selectedYear
    )

    if (filteredExpenses.length !== 0) {
        expensesContent = filteredExpenses.map(item => 
            <ExpenseItem
                key={item.id}
                data={item}
            />
        )
    }
    
    

    return (
        <Card className="expenses">
            <ExpensesFilter onFilterChanged={onFilterChangedHandler} />
            {expensesContent}
        </Card>
    )
}

export default Expenses