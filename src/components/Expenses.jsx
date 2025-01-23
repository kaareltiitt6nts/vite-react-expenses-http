import "./Expenses.css"
import ExpenseItem from "./ExpenseItem.jsx"

const Expenses = (props) => {
    return (
        <div className="expenses">
            {
                props.data.map(item => (
                    <ExpenseItem key={item.id} data={item} />
                ))
            }
        </div>
    )
}

export default Expenses