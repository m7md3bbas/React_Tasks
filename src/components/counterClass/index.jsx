import React, { Component } from "react";
import classes from "./styles.module.css";
class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        return (
            <div className={classes["counterClass"]}>
            <h1 className={classes["customH1"]}>{this.props.name}</h1>
            <h3 className={classes["customH3"]}>{this.state.count}</h3>
            <button className={classes["customButton"]} onClick={this.handleIncrement}>Increment</button>
            <button className={classes["customButton"]} onClick={this.handleDecrement}>Decrement</button>
            </div>
        )
    }

}

export default CounterClass