import React from "react";
import '../style/style.sass'
import btnStyle from '../style/button.module.css'
import headerStyle from '../style/header.module.sass'

const Styling = () => {
    const ui = <div>
        <button className={btnStyle.default}>Test</button>
        <button className='default'>Test</button>
        <h1 className={headerStyle.default}>Test</h1>
        </div>
    return ui
}

export default Styling