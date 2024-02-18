import React, { useState } from 'react';


export default function Calculator() {
    const [ calculation, setCalculation ] = useState(0)
    const [ firstOperand, setFirstOperand] = useState(0)
    const [ secondOperand, setSecondOperand] = useState(0)
    const [ operator, setOperator] = useState(null)

    
    function buildOperand(num) {
        if (operator === null) {
            setFirstOperand(firstOperand*10 + num);
        } else {
            setSecondOperand(secondOperand*10 + num);
        }
    }

    function applyOperator(sign) {
        if (sign === "+") {
            setOperator("+")
        } else if (sign === "-") {
            setOperator("-")
        } else if (sign === "x") {
            setOperator("x")
        } else if (sign === "/") {
            setOperator("/")
        }
    }

    function calculate() {
        var total = 0
        if (operator === "+") {
            total = firstOperand + secondOperand;
        } else if (operator === "-") {
            total = firstOperand - secondOperand;
        } else if (operator === "x") {
            total = firstOperand*secondOperand;
        } else if (operator === "/") {
            total = firstOperand / secondOperand;
        }
        setCalculation(total)
    }

    function clear() {
        setFirstOperand(0)
        setSecondOperand(0)
        setOperator(null)
        setCalculation(0)
    }

    return(
        <div className="calculator">
            <div>
                1st operand: <output name="first">{firstOperand}</output>
            </div>
            <div>
                2nd operand: <output name="second">{secondOperand}</output>
            </div>
            <div>
                total: <output name="calculation">{calculation}</output>
            </div>
            <div className="operators">
                <button onClick={() => applyOperator("+")}>+</button>
                <button onClick={() => applyOperator("-")}>-</button>
                <button onClick={() => applyOperator("x")}>x</button>
                <button onClick={() => applyOperator("/")}>/</button>
            </div>
            <div className="numbers">
                <div>
                    <button onClick={() => buildOperand(7)}>7</button>
                    <button onClick={() => buildOperand(8)}>8</button>
                    <button onClick={() => buildOperand(9)}>9</button>
                </div>
                <div>
                    <button onClick={() => buildOperand(4)}>4</button>
                    <button onClick={() => buildOperand(5)}>5</button>
                    <button onClick={() => buildOperand(6)}>6</button>
                </div>
                <div>
                    <button onClick={() => buildOperand(1)}>1</button>
                    <button onClick={() => buildOperand(2)}>2</button>
                    <button onClick={() => buildOperand(3)}>3</button>
                </div>
                <div>
                    <button onClick={() => buildOperand(0)}>0</button>
                    <button onClick={() => console.log(".")}>.</button>
                    <button onClick={() => clear()}>C</button>
                    <button onClick={() => calculate()}>=</button>
                </div>
            </div>
        </div>
    )
}