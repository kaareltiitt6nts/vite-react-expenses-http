import "./Expenses.css"
import ExpenseItem from "./ExpenseItem.jsx"
import Card from "../UI/Card.jsx"
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter.jsx"
import { useState } from "react"

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState(null)

    const onFilterChangedHandler = (newYear) => {
        const year = parseInt(newYear)
        if (!isNaN(year)) {
            setSelectedYear(year)
        }
    }

    const filterExpenses = (year) => {
        if (!year) return []

        return props.data.filter(item => item.date.getFullYear() === year)
        .map(item => <ExpenseItem
                key={item.id}
                data={item}
            />
        )
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onFilterChanged={onFilterChangedHandler} />
            {filterExpenses(selectedYear)}
        </Card>
    )
}

export default Expenses