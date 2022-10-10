import React from "react"

const ControlledForm = () => {
    const [name, setName] = React.useState('')
    const [isMember, setIsMember] = React.useState(false)
    const [gender, setGender] = React.useState('perempuan')
    const [comment, setComment] = React.useState('')
    const [category, setCategory] = React.useState('')

    const handleSubmit = event => {
        event.preventDefault()
        console.log(name)
    }

    const ui = <div style={{textAlign: "left"}}>
        <form onSubmit={handleSubmit}>
            <div style={{marginBottom: "1rem"}}>
                <label>
                    Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
            </div>
            <div style={{marginBottom: "1rem"}}>
                <label>
                    Member: <input type="checkbox" checked={isMember} onChange={(e) => setIsMember(e.target.checked)} />
                </label>
            </div>
            <div style={{marginBottom: "1rem"}}>
                <label>
                    Gender: <input type="radio" name="gender" checked={gender === "laki-laki"} 
                    onChange={(e) => setGender("laki-laki")} /> Laki-Laki
                    <input type="radio" name="gender" checked={gender === "perempuan"} 
                    onChange={(e) => setGender("perempuan")} /> Perempuan
                </label>
            </div>
            <div style={{marginBottom: "1rem"}}>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            </div>
            <div style={{marginBottom: "1rem"}}>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value='food'>Food</option>
                    <option value='drink'>Drink</option>
                </select>
            </div>
            <div style={{marginBottom: "3rem"}}>
                <input type="submit" value="Submit"/>
            </div>
        </form>
    </div>

    return ui
}

export default ControlledForm