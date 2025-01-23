import "./ExpenseItem.css"
import "./ExpenseDate.css"

const ExpenseItem = (props) => {
    console.log(props.data)
    return (
        <div className="expense-item">
            <div>
                <h1 className="expense-item__name">{props.data.name}</h1>
                <p className="expense-item__description">{props.data.description}</p>
            </div>
            <div className="expense-date">
                <div className="expense-date__month">{props.data.date.toLocaleString("default", {month:"long"})}</div>
                <div className="expense-date__day">{props.data.date.getDay()}</div>
                <div className="expense-date__year">{props.data.date.getYear()}</div>
            </div>
        </div>
    )
}

export default ExpenseItem