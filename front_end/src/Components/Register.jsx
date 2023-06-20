import React, { useState } from 'react'
import axios from './AXOS'

const Register = () => {
    const[formValue,setFormValue]=useState({
        name: '',
        email:'',
        passxord:"",
    })
    const handlinputChange = (e) => {
        const { name, value } = e.target
        setFormValue({ ...formValue, [name]: value })
    } 
    const handleSunmit = async (e) => {
        e.preventDefault();
        console.log(formValue)
        const res = axios.post('/register', formValue)

    }
     return (
         <form onSubmit={handleSunmit}>
            <input name='name' type='text' onChange={handlinputChange}/>
            <input name='email' type='email' onChange={handlinputChange} />
            <input name='password' type='password' onChange={handlinputChange} />

<button type='submit'>register</button>

    </form>

  )
}

export default Register