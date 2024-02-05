import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export const Register = () => {
  const [inputs,setInputs]=React.useState({
    username:"",
    email:"",
    password:""
  })
  const [err,setErr]=React.useState(null);
  const navigate =useNavigate()
  const handleChange = (e)=>{
     setInputs(prev=>({...prev,[e.target.name]:e.target.value}));
  }

   const handleSubmit=async e=>{
    e.preventDefault();
     try{
       await axios.post("/auth/register", inputs);
      navigate('/login')
    
     }
     catch(err){
   setErr(err.response.data)
     }
   }
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" name='username'  onChange={handleChange} placeholder='username'/>
        <input required type="email" name='email' onChange={handleChange} placeholder='email'/>
        <input required type="password" name = 'password' onChange={handleChange} placeholder='password'/>
        <button onClick={handleSubmit}>Register</button>
       {
        err &&
        <p>This is an error</p>
       }
        <span>Do you have an account? <Link to='/login'
        >Login</Link></span>
      </form>
    </div>)}