import React, { useEffect, useState } from "react";

const Identity = () => {
    let [menu, setMenu] = useState([])

    useEffect(() => {
        const fetchMenu = () =>{
            return ['nasi padang','nasi uduk','nasi gudeg']
        }
        let data = fetchMenu()
        setMenu(data)
    },[])

    const ui = <div>{menu.map((menu,index) => <div key={index}>{menu}</div>)}</div>
    return ui
}

export default Identity