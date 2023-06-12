// import React, { Component } from 'react'

// export default class About extends Component {
//   state = {
//     employees :[]
//   }
//   componentDidMount()
//   {
//     fetch("https://reqres.in/api/users?page=2")
//     .then((res) => {
//       console.log(res)
//       return res.json()
//     })
//     .then((updated) => {
//       console.log(updated.data)
//       this.setState({
//         employees: updated.data 
//       })
//       })
//   }
//   render()
//   {
//     return (
//         <div>
//             { 
//                 this.state.employees.map((employee) => (
//                 <div>
//                   <p> Name:- {employee.first_name}</p>
//                   <p> Email:- {employee.email}</p>
//                   <img src={employee.avatar} width="8%" alt='#'/>
//                 </div>
//               ))
//             }
//           </div>
//     )
//   }
// }




import React from 'react'
import './Style.css'

export default function Home() {
  return (
    <div className='home'>
      <div id="sec1">
        <h1>Tweetify</h1>
        <p id="caption"> Where conversations take flight! </p>
      </div>
      <div>
      <p>Join the Tweetify community and share your thoughts, ideas, and updates with the world. </p>

        <p> Welcome to Tweetify, the ultimate social platform for connecting, engaging, and expressing yourself! With Tweetify, you can post updates, follow others, and join vibrant discussions on a wide range of topics. Share your thoughts, insights, and moments that matter with our diverse community of users.</p>
      </div>
    </div>
  )
}


