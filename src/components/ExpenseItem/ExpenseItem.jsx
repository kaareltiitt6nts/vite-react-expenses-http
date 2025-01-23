const ExpenseItem = (props) => {
    console.log(props.data)
    return (
        <div className="expense-item">
            <h1 className="expense-item__name">{props.data.name}</h1>
            <div>
                <h2 className="expense-item__date">{props.data.date.toDateString()}</h2>
                <p className="expense-item__description">{props.data.description}</p>
            </div>
        </div>
    )
}

export default ExpenseItem