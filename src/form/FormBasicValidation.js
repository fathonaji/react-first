import React from "react";
import InputText from "./InputText";
import is from "./library/FieldValidator";

const FormBasicValidation = () => {
    const [form, setForm] = React.useState({
        name: '',
        phone: '',
        email: ''
    })
    const [error, setError] = React.useState({
        name: 'name minimal 3 karakter',
        phone: 'phone minimal 3 karakter',
        email: 'email minimal 3 karakter',
    })

    const handleSubmit = event => {
        event.preventDefault()
        if(error['name'].length > 0){
            alert(error['name'])
        }else if(error['phone'].length > 0){
            alert(error['phone'])
        }else if(error['email'].length > 0){
            alert(error['email'])
        }else{
            alert('validasi sukses')
        }
    }

    const handleChange = (field,e) => {
        const val = e.target.value
        setError('')
        if(val.length < 3){
            setError({...error, [field]: `${field} minimal 3 karakter`})
        }else{
            setError({...error, [field]: ''})
        }
        setForm({...form, [field]:val})
    }

    const ui = <form onSubmit={handleSubmit}>
        <InputText label="Name" value={form.name} onChange={(e) => handleChange('name',e)} />
        <InputText label="Phone" value={form.phone} onChange={(e) => handleChange('phone',e)} />
        <InputText label="Email" value={form.email} onChange={(e) => handleChange('email',e)} />
        <input type='submit' value='Submit' />
    </form>

    return ui
}

export default FormBasicValidation