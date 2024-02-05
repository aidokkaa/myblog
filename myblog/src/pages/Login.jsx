import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { AuthContexProvider, AuthContext ,login} from '../context/authContext';
export const Login = () => {
  const [inputs, setInputs] =React.useState({
    username: "",
    password: "",
  });
  const [err, setError] = React.useState(null);
  const navigate = useNavigate();

  const {login}=useContext(AuthContext)
  const handleChange = (e)=>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}));
  }
  const handleSubmit=async (e)=>{
   e.preventDefault()
   try{
    await login(inputs)
    axios.post('/auth/login',inputs)
    navigate('/')
   }catch(err){
    setError(err.response.data)
   }
  }

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" onChange={handleChange} name='username' placeholder='username'/>
        <input type="password" onChange={handleChange} name='password' placeholder='password'/>
        <button onClick={handleSubmit}>login</button>
        {
          err &&
          <p>{err}</p>
        }
        <span>Dont you have an account? <Link to='/register'
        >Register</Link></span>
      </form>
    </div>
  )
}
