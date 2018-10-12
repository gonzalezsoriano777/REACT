import React from 'react'

const Navbar = () => {
    return (
<nav className="nav-wrapper red darken-3">
 <div className="container">
   <a className="brand-logo">Poke' Times</a>
     <ul className="right">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
     </ul>
   </div>
 </nav>
 // now the reason as to why we would get the Homepage in about and contact because what React reads is the forward which is used in home and the about or contact as well
 // that why it's best to be specific
 )
}

export default Navbar