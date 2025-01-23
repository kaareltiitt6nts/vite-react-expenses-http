import "./Expenses.css"
import ExpenseItem from "./ExpenseItem.jsx"
import Card from "../UI/Card.jsx"

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {
                props.data.map(item => (
                    <ExpenseItem key={item.id} data={item} />
                ))
            }
        </Card>
    )
}

export default Expenses