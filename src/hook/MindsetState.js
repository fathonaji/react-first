import React, { useEffect, useState } from "react";

const MindsetState = () => {
    let [seconds, setSeconds] = useState(0)

    useEffect(function(){
        let intervalId = setInterval(()=>{
            setSeconds(detik => detik + 1)
        },1000)

        return () => {
            console.log('clear interval id')
            clearInterval(intervalId)}
    },[])

    console.log(seconds)
    const ui = <p>Interval: {seconds}</p>

    return ui
}

export default MindsetState