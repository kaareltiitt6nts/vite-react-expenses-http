const ExpenseItem = () => {
    return (
        <div className="expense-item">
            <h1 className="expense-item__name">Nimi</h1>
            <div>
                <p className="expense-item__date">Kuupaev</p>
                <p className="expense-item__description">Kirjeldus</p>
            </div>
        </div>
    )
}

export default ExpenseItem