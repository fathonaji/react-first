import React from "react";

const UncontrolledForm = () =>{
    const inputName = React.useRef(null)
    const inputFile = React.useRef(null)

    const handleSubmit = event => {
        event.preventDefault()
        console.log(`name: ${inputName.current.value}`)
        console.log(`file: ${inputFile.current.files[0].name}`)
    }

    const ui = <form onSubmit={handleSubmit}>
        <label>
            Name: <input type="text" ref={inputName}/>
        </label>
        <label>
            File: <input type='file' ref={inputFile} />
        </label>
        <input type="submit" value="Submit"/>
    </form>

    return ui
}

export default UncontrolledForm