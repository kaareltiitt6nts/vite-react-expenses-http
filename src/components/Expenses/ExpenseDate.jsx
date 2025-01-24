import "./ExpenseDate.css"

const ExpenseDate = (props) => {
    return (
        <div className="expense-date">
            <div className="expense-date__month">{props.data.toLocaleString("default", {month:"long"})}</div>
            <div className="expense-date__day">{props.data.getDay()}</div>
            <div className="expense-date__year">{props.data.getFullYear()}</div>
        </div>
    )
}

export default ExpenseDate