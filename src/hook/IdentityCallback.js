import React, { useCallback, useEffect, useState } from "react";

const IdentityCallback = () => {
    let [menu, setMenu] = useState([])

    const fetchMenu = useCallback(() =>{
        return ['nasi padang','nasi uduk','nasi gudeg']
    },[])

    useEffect(() => {
        let data = fetchMenu()
        setMenu(data)
    },[fetchMenu])

    setInterval(()=>{
        const rand = menu.sort(() => Math.random() - 0.2)
        setMenu(rand)
    },1000)

    const ui = <div>{menu.map((menu,index) => <div key={index}>{menu}</div>)}</div>
    return ui
}

export default IdentityCallback