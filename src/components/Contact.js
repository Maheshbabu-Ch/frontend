import React, { Component } from 'react'
import axios from 'axios'

export default class Contact extends Component {
  state = { users: []}
  componentDidMount()
  {
    // axios.get("http://localhost:4000/retrieve")
    axios.get("https://projectbackend-pxjw.onrender.com/retrieve")

    .then((res)=>
      {
       console.log(res.data)
       this.setState({users:res.data})

      })
  }
  render() {
    return (
      <div>
          {
              this.state.users.map((usr)=>(
                  <div key={usr._id}>
                    <p>{usr.name}</p>
                  </div>
              ))
          }
      </div>
    )
  }
}

