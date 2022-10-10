import React, { useEffect, useState } from "react";

const Editing = ({value}) => {
    const [txtValue, setTxtValue] = useState("")
    const [seconds, setSeconds] = useState(0)
    
    useEffect(function(){
        if(!txtValue) return;
        console.log('masuk sini 1')
        txtValue.length > 0 && localStorage.setItem("edit-text",txtValue)
    }, [txtValue])

    useEffect(function(){
        console.log('masuk sini 2')
        setTxtValue(localStorage.getItem("edit-text"))

        let interval = setInterval(() => {
            console.log('masuk sini 3')
            setSeconds(sec => sec+1)
        },1000)

        return function(){
            console.log('masuk sini 4')
            clearInterval(interval)
        }
    },[])

    const ui = <div>
        <p>Waktu: {Math.floor(seconds/60)} menit {seconds % 60} detik</p>
        <textarea value={txtValue} onChange={e => setTxtValue(e.target.value)} 
        style={{width:'60%', height: '20%', marginBottom: '2rem'}} />
    </div>
    return ui
}

export default Editing