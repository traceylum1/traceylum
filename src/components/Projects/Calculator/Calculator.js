


function clickAdd() {
    console.log("plus")
}

function clickMinus() {
    console.log("minus")
}

function clickMultiply() {
    console.log("multiply")
}

function clickDivide() {
    console.log("divide")
}

export default function Calculator() {
    return(
        <div className="calculator">
            <button onClick={clickAdd}>+</button>
            <button onClick={clickMinus}>-</button>
            <button onClick={clickMultiply}>x</button>
            <button onClick={clickDivide}>/</button>
        </div>
    )
}