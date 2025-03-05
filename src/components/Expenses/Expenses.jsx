import "./Expenses.css"
import ExpenseItem from "./ExpenseItem.jsx"
import Card from "../UI/Card.jsx"
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter.jsx"
import { useState } from "react"
import ExpensesList from "./ExpensesList.jsx"

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState(2023)

    const onFilterChangedHandler = (newYear) => {
        const year = parseInt(newYear)
        if (!isNaN(year)) {
            setSelectedYear(year)
        }
    }

    const filteredExpenses = props.data.filter(item => 
        new Date(item.date).getFullYear() === selectedYear
    )

    return (
        <Card className="expenses">
            <ExpensesFilter onFilterChanged={onFilterChangedHandler} />
            <ExpensesList isLoading={props.isLoading} filteredExpenses={filteredExpenses}></ExpensesList>
        </Card>
    )
}

export default Expenses