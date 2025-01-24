import { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState("")
    const [date, setDate] = useState("")

    const updateName = (event) => setName(event.target.value)
    const updateDescription = (event) => setDesc(event.target.value)
    const updatePrice = (event) => setPrice(event.target.value)
    const updateDate = (event) => setDate(event.target.value)

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            name: name,
            desc: desc,
            price: price,
            date: new Date(date)
        }

        props.onSaveExpenseData({
            ...expenseData,
            id: Math.random().toString()
        })

        setName("")
        setDesc("")
        setPrice("")
        setDate("")
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Nimi</label><br />
                    <input type="text" value={name} onChange={updateName}/>
                </div>
                <div className="new-expense__control">
                    <label>Kirjeldus</label><br />
                    <input type="text" value={desc} onChange={updateDescription}/>
                </div>
                <div className="new-expense__control">
                    <label>Hind</label><br />
                    <input type="number" min={0.01} step={0.01} value={price} onChange={updatePrice}/>
                </div>
                <div className="new-expense__control">
                    <label>Kuupäev</label><br />
                    <input type="date" value={date} onChange={updateDate}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Lisa</button>
            </div>
        </form>
    )
}

export default ExpenseForm