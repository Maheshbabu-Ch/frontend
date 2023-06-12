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

import React from 'react'
import "./Style.css"
import Nav from "./Navigation"
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate,Navigate } from 'react-router-dom'

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  function Logcheck()
  {
      console.log(email,password)
      // useNavigate('/home')

  }
  function save(e)
      {
        console.log(e.target)
        setEmail(e.target.value)
    }
  return (
    <div>
        <Nav/>
    <div id='loginform'> 
      <form id='loginf'>
        <table>
          <tr>
            <td>Email</td>
            <td><input type='text' value={email} placeholder='Enter your Email' onChange={save}/></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><input type='password' value={password} placeholder='Enter your Password' onChange={(e)=>setPassword(e.target.value)}/></td>
          </tr>
        </table>
        <div>
          {/* <p><input type='submit' value="Login" onClick={Logcheck}/></p> */}
            <button onClick={Logcheck}>Login</button>

        </div>
      </form>
    </div>
    </div>
  )
}
