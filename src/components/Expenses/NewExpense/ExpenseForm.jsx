import { Fragment, useRef, useState } from "react"
import "./ExpenseForm.css"
import Error from "../../UI/Error"

const ExpenseForm = (props) => {
    const [error, seterror] = useState(null)

    console.log(error)

    const nameRef = useRef()
    const descRef = useRef()
    const priceRef = useRef()
    const dateRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            name: nameRef.current.value,
            description: descRef.current.value,
            price: priceRef.current.value,
            date: dateRef.current.value
        }

        if (expenseData.name.trim().length === 0 ||
        expenseData.price.trim().length === 0 ||
        expenseData.date.trim().length === 0) 
        {
            seterror({
                title: "VALE SISEND!",
                message: "Sisend oli vigane. Kontrolli üle."
            })

            return
        }

        props.onSaveExpenseData({
            ...expenseData,
            id: Math.random().toString()
        })

        nameRef.current.value = ""
        descRef.current.value = ""
        priceRef.current.value = ""
        dateRef.current.value = ""
        
        resetHandler()
    }

    const resetHandler = () => {
        props.onReset()
    }

    const errorHandler = () => {
        seterror(null)
        props.onReset()
    }

    return (
        <Fragment>
            {error && 
                <Error
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            }
            <form onSubmit={submitHandler} onReset={resetHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Nimi</label><br />
                        <input type="text" id="name" ref={nameRef}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Kirjeldus</label><br />
                        <input type="text" id="desc" ref={descRef}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Hind</label><br />
                        <input type="number" min={0.01} step={0.01} id="price" ref={priceRef}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Kuupäev</label><br />
                        <input type="date" id="date" ref={dateRef}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Lisa</button>
                    <button type="reset">Katkesta</button>
                </div>
            </form>
        </Fragment>
    )
}

export default ExpenseForm