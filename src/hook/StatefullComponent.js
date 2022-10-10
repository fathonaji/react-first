import React, { useState } from "react";

const StatefullComponent = ({text}) => {

    const [counter, setCounter] = useState(0)

    const updateCounter = currentCounter => {
        return currentCounter+1
    }

    const handleClick = () => {
        setCounter(abc => abc + 1)
    }

    let ui = <button onClick={handleClick}>{text} {counter}</button>

    return ui
}

export default StatefullComponent