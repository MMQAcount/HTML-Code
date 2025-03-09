import { useState } from "react";
import './counter.css'
const Counter = () => {
    const [count, setCounter] = useState(0);
        function increment () {
            setCounter(count+1);
        }
        function decrement () {
            setCounter(count-1);
        }
        function reset () {
            setCounter(0);
        }

    return(
        <div className="container">
            <h1>Counter App</h1>
            <h1> {count} </h1>
            <div className="buttons">
                <button onClick={increment} disabled={count >= 10}>
                    Increment
                </button>

                <button onClick={decrement} className={`${count == 0 ? "disable_reset": "able_reset"}`}>
                    Decrement
                </button>
                {count >= 10 ? 
                <button onClick={reset}>
                    Reset
                </button> : ""}
            </div>
            <div className="flag" style={(count >= 0 && count <= 5)? {backgroundColor: 'green'}: (count >= 6 && count <= 10)? {backgroundColor: 'orange'}: {backgroundColor: 'red'}}>
            </div>
        </div>
    );
}

export default  Counter;