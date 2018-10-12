import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
<nav className="nav-wrapper red darken-3">
 <div className="container">
   <a className="brand-logo">Poke' Times</a>
     <ul className="right">
        <li><Link to="/">Home</Link></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
     </ul>
   </div>
 </nav>
 // now the reason as to why we would get the Homepage in about and contact because what React reads is the forward which is used in home and the about or contact as well
 // that why it's best to be specific
 )
}

export default Navbar