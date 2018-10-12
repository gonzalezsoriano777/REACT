import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
   //setTimeout(() => {
     //   props.history.push('/about')
     //}, 2000) // Makes the homepage switch to the about page after 2 seconds
    
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

export default withRouter(Navbar) // wrapping a component, applying the properties to the prop and then supercharging a component