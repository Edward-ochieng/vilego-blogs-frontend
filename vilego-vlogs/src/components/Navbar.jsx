import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <Fragment>
    <nav className='navbar'>
      <div className='nav-header'>
      {/* <i classname="fa-solid fa-blog"></i> */}
        <h1>Vilego-blogs</h1>
      </div>
      <div className='navbar-nav' >
        <ul className='nav-ul'>
          <li>
        <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/article">Blog</NavLink>
        </li>
        <li>
        <NavLink to="/login">Login</NavLink>
        </li>
        <li>
        <NavLink to="/signup">SignUp</NavLink>
        </li>
        </ul>
      </div>
    </nav>
    </Fragment>
  )
}

export default Navbar