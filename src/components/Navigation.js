// import { Nav, Navbar, NavLink } from "react-bootstrap";
// import { Link } from 'react-router-dom'

// function Navigation() {
//     return (
//         <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
//             <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" className="ms-auto"/>
//             <Navbar.Collapse id="navbarScroll">
//             <Nav className="ms-auto">
//                     <NavLink  eventKey="1" as={Link} to="/">Home</NavLink>
//                     <NavLink  eventKey="2" as={Link} to="/contact">Contact</NavLink>
//                     <NavLink  eventKey="3" as={Link} to="/about">About</NavLink>
//                 </Nav>
//             </Navbar.Collapse>    
//         </Navbar>
//     );
// }

// export default Navigation

import React from 'react'
import "./Style.css"
import { Link } from 'react-router-dom'
import logo from "../logo1.png"


export default function Navigation() {
  return (
    <div className='login'>
        <div id="logo">
            <img src={logo}></img>
        </div>
        <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/about">About</Link>
        </div>
    </div>
  )
}