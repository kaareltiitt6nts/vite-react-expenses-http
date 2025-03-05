import React from "react"
import ExpenseItem from "./ExpenseItem"

const ExpensesList = (props) => {
    if (props.isLoading) {
        return <p className="expenses-list__fallback">
            Kuluandmete kogumine...
        </p>
    }

    if (props.filteredExpenses.length === 0) {
        return <p className="expenses-list__fallback">
            Kulusid ei ole!
        </p>
    }

    console.log(props)

    return props.filteredExpenses.map(item => 
        <ExpenseItem
            key={item.id}
            data={item}
        />
    )
}

export default ExpensesList