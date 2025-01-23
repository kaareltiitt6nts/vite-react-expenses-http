import Card from "../UI/Card.jsx"
import ExpenseDate from "./ExpenseDate.jsx"
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <div>
                <h1 className="expense-item__name">{props.data.name}</h1>
                <p className="expense-item__description">{props.data.description}</p>
                <p className="expense-item__date">{props.data.price}</p>
            </div>
            <ExpenseDate data={props.data} />
        </Card>
    )
}

export default ExpenseItem