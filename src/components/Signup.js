import React from 'react'
import "./Style.css"
import Nav from "./Navigation"
export default function Signup() {
  return (
    <div><Nav/>
    <div id='loginform'> 
      <form id='loginf'>
        <table>
            <tr>
                <td>Name</td>
                <td><input type='text' placeholder='Enter your Name' /></td>
            </tr>
          <tr>
            <td>Email</td>
            <td><input type='text' placeholder='Enter your Email'/></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><input type='password' placeholder='Enter your Password'/></td>
          </tr>
        </table>
        <div>
          <p><input type='submit' value="Signup"/></p>
        </div>
      </form>
      </div>
    </div>
  )
}
