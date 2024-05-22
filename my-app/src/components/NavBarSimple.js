import React from "react";
import css from './css/NavBarSimple.module.css';


class NavBarSimple extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello Guest',
            buttonText: 'login'
        }
    }

    handlelick = () => {
        this.setState((prevState) => ({
            message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
            buttonText: prevState.buttonText === "Log out" ? "Log in" : "Log out",
        }), ()=> console.log(this.state.message))

    }

    render() {
        return(
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <span>{this.state.message}</span>
                <div>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                </div>
                
            </div>
        )
    }

}

export default NavBarSimple

