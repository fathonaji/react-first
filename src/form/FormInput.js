import React from "react";
import InputText from "./InputText";

const FormInput = () => {
    const [form, setForm] = React.useState({
        name: '',
        phone: '',
        email: ''
    })
    const handleSubmit = event => {
        event.preventDefault()
        console.log(JSON.stringify(form))
    }

    const ui = <form onSubmit={handleSubmit}>
        <InputText label="Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
        <InputText label="Phone" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />
        <InputText label="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
        <input type='submit' value='Submit' />
    </form>

    return ui
}

export default FormInput