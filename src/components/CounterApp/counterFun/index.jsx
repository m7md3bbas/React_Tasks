import React, { useState } from "react";
import classes from "./styles.module.css";

const CounterFun = (props) => {
    const [count, setCount] = useState(0);
    function handleIncrement() {
        setCount(count + 1);
    }
    function handleDecrement() {
        setCount(count - 1);
    }
    return (
        <div className={classes["counterFun"]}>
            <h1 className={classes["customH1"]}>{props.name}</h1>
            <h3 className={classes["customH3"]}>{count}</h3>
            <button className={classes["funButton"]} onClick={handleIncrement}>
                Increment
            </button>
            <button className={classes["funButton"]} onClick={handleDecrement}>
                Decrement
            </button>
        </div>
    );
};


export default CounterFun;
