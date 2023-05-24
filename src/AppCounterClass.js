import { Component } from "react";

class AppCounterClass extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    render() {
        return <>
            <h1>{this.state.counter}</h1>
            <button onClick={
                () => this.setState({
                    counter: this.state.counter - 1
                })
            }>-1</button>
            <button onClick={
                () => this.setState({
                    counter: this.state.counter + 1
                })
            }>+1</button>
        </>;
    }
}

export default AppCounterClass;