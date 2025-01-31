import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = (props) => {
    const [Enabled, setEnabled] = useState(false)
    const newExpenseDataHandler = (expenseData) => {
        props.onAddExpense(expenseData)
    }

    const resetHandler = () => {
        setEnabled(false)
    }

    const startHandler = () => {
        setEnabled(true)
    }

    return (
        <div className="new-expense">
            {
                Enabled === false && <button onClick={startHandler} className="form-start-btn">Alusta</button>
            }
            {
                Enabled === true && <ExpenseForm onSaveExpenseData={newExpenseDataHandler} onReset={resetHandler}/>
            }
        </div>
    )
}

export default NewExpense