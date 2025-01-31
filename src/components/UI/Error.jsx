import "./Error.css"

import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import Card from "./Card"
import Button from "./Button"

const BackDrop = () => {
    return (
        <div className="backdrop-root"/>
    )
}

const ModalOverlay = (props) => {
    return (
        <Card className="modal">
            <header className="header">
                {props.title}
            </header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="footer">
                <Button onClick={props.onConfirm}>Selge, sain!</Button>
            </footer>

        </Card>
    )
}

const Error = (props) => {
    return (
        <Fragment>
            {
                ReactDOM.createPortal(
                    <BackDrop onConfirm={props.onConfirm}/>,
                    document.getElementById("backdrop-root")
                )
            }

            {
                ReactDOM.createPortal(
                    <ModalOverlay
                        title={props.title}
                        message={props.message}
                        onConfirm={props.onConfirm}
                    />,
                    document.getElementById("backdrop-root")
                )
            }
        </Fragment>
    )
}

export default Error