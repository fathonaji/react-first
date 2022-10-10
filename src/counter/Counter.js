import React from "react";

const Counter = () => {
    const [number, increment] = React.useState(0)

    return <div style={{marginBottom:'2rem'}}>
        <h1>Counter App</h1>
        <p>Nilai counter saat ini: {number}</p>
        <button onClick={() => increment(number+1)}>Tambah</button>
    </div>
}

export default Counter