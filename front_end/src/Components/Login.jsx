import { Button } from 'bootstrap'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from './AXOS'
import { useNavigate } from 'react-router-dom'
const Login = ({ setisLoggedin }) => {
    useEffect(()=>{
        csrf()
    },[])
    const [loggingCredentials, setloggingcredentials] = useState({
        email:"", password:''
    })
    const[user,seUser]=useState('')
const handlinputChange = (e)=>{
    const{name,value}=e.target
    setloggingcredentials({...loggingCredentials,[name]:value})
}
    const getUser = async () => {
        const { data } = await axios.get("/api/user");
        seUser(data);
    };

const csrf = async() => axios.get("/sanctum/csrf-cookie");
const navigate = useNavigate()
const handleSunmit=async(e)=>{
    e.preventDefault();
csrf()
    console.log(loggingCredentials)
     await axios.post('/login',loggingCredentials)
    setisLoggedin(true)
    navigate('/')
    window.location.reload()


}
  return ( <form > <input onChange={handlinputChange} name='email' type='email'/>
          <input onChange={handlinputChange} name='password' type='password' />
      <button onClick={handleSunmit} type='submit'>Log in</button>


    </form>
  )
}

export default Login