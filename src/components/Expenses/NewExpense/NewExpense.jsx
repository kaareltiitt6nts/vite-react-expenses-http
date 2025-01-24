import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = (props) => {
    const newExpenseDataHandler = (expenseData) => {
        console.log(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={newExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense