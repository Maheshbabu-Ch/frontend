// import React from 'react'
// import "./Style.css"
// import { Link } from 'react-router-dom'


// export default function Login() {
//   return (
//     <div className='login'>
//         <Link to="/login1">Login</Link>
//         <a>Signup</a>
//     </div>
//   )
// }

import React,{ useState } from 'react'
import "./Style.css"
import Nav from "./Navigation"
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'

export default function Login() {
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const [login, setlogin] = useState({ email: '', password: '' });
  const changeHandler = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
}
const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/login', login).then(res => { localStorage.setItem('token', res.data.token); const a= res.data; navigate('/home',{state: { a }}) }).catch(err => alert(err.response.data));
}
  return (
    <div>
        <Nav/>
    <div id='loginform'> 
      <h2>Sign-In</h2>
      <form id='loginf' onSubmit={submitHandler}>
        <table>
          <tr>
            <td>Email</td>
            <td><input name="email" type='text' placeholder='Enter your Email' onChange={changeHandler} required/></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><input name="password" type='password' placeholder='Enter your Password' onChange={changeHandler} required/></td>
          </tr>
        </table>
        <div>
          <p><input type='submit' value="Login"/></p>
            {/* <button onClick={Logcheck}>Login</button> */}

        </div>
      </form>
    </div>
    </div>
  )
}
