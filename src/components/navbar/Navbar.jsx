import React from "react";
// import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Navbar.css';


const NavbarMenu = () => {
    return(
<ul>
  <li><NavLink to="/home">Home</NavLink></li>
  <li><NavLink to="/calendar">Calendar</NavLink></li>
  <li><NavLink to="/event">Event</NavLink></li>
  <li className='about'><NavLink to="/about">About</NavLink></li>
</ul>
    )
}




export default NavbarMenu;