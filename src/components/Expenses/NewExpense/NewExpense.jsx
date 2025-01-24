import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = (props) => {
    const newExpenseDataHandler = (expenseData) => {
        props.onAddExpense(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={newExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense