import React from "react";

class StatefulGreeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            buttonNumber: 0
        };
    }

    handleClick(){
        this.setState((prevState, prevProps) => {
            console.log("Previous state:", prevState)
            console.log("Previous Props", prevProps)
            return {
                introduction: this.state.introduction === "Hello" ? "Goodbye" : "Hello",
            buttonText: this.state.buttonText === 'Exit' ? 'Enter' : "Exit",
            }
            
        
        })
    }

    handleIncrement(){
        this.setState((prevState, prevProps) => {
            console.log("Previous state:", prevState)
            console.log("Previous Props", prevProps)
            return {
                buttonNumber: prevState.buttonNumber+1
            }
            
        
        })
    }


    render() {
        return(
            <div>
                <h1>{this.state.introduction} {this.props.name} {this.props.greeting} </h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.handleIncrement()}>{this.state.buttonNumber}</button>
            </div>
        ) 
    }
}

export default StatefulGreeting