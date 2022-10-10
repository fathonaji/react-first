import React from "react";

const InputText = ({label, value, onChange}) => {

    const ui = <div style={{marginBottom: "1rem"}}>
                <label>
                    {label}: <input type="text" value={value} onChange={onChange} />
                </label>
            </div>
    return ui
}

export default InputText