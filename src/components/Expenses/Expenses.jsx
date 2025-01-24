import "./Expenses.css"
import ExpenseItem from "./ExpenseItem.jsx"
import Card from "../UI/Card.jsx"
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter.jsx"

const Expenses = (props) => {
    const onFilterChangedHandler = (date) => {
        console.log(date.getYear())
    }
    
    return (
        <Card className="expenses">
            {
                props.data.map(item => {
                    return <ExpenseItem 
                        key={item.id} 
                        data={item} 
                        onFilterChanged={onFilterChangedHandler}
                    />
                })
            }
        </Card>
    )
}

export default Expenses