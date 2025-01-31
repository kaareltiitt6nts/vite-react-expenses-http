import "./ExpenseDate.css"

const ExpenseDate = (props) => {
    const date = new Date(props.data)

    return (
        <div className="expense-date">
            <div className="expense-date__month">{date.toLocaleString("default", {month:"long"})}</div>
            <div className="expense-date__day">{date.getDate()}</div>
            <div className="expense-date__year">{date.getFullYear()}</div>
        </div>
    )
}

export default ExpenseDate