import "./Expenses.css"
import ExpenseItem from "./ExpenseItem.jsx"
import Card from "../UI/Card.jsx"
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter.jsx"
import { useState } from "react"

const Expenses = (props) => {
    const onFilterChangedHandler = (newYear) => {
        console.log(newYear)
    }
    
    return (
        <Card className="expenses">
            <ExpensesFilter onFilterChanged={onFilterChangedHandler}/>
            {
                props.data.map(item => {
                    return <ExpenseItem 
                        key={item.id}
                        data={item}
                        onFilterChanged={onFilterChangedHandler}
                    />
                })
            }
        </Card>
    )
}

export default Expenses