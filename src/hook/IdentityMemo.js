import React, { useMemo, useState, useEffect, useCallback } from "react";

const IdentityMemo = () => {

    var interval
    let [region, setRegion] = useState('bali')
    
    const fetchMenu = () =>{
        console.log('fetch menu called')
        return ['nasi padang','nasi uduk','nasi gudeg']
    }

    let menu = useMemo(() => {
        console.log('use memo called ['+region+']')
        if(region === 'bali'){
            return ['ayam betutu']
        }else if(region === 'padang'){
            return ['nasi padang']
        }

        return fetchMenu()
    },[region])

    setInterval(()=>{
        let regions = ['jakarta','bandung','bali','padang','maroko','malaysia']
        let item = regions[Math.floor(Math.random()*regions.length)]
        setRegion(item)
        console.log('called item interval')
    },3000)

    const ui = <div>{menu.map((menu,index) => <div key={index}>{menu}</div>)}</div>
    return ui
}

export default IdentityMemo