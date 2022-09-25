/*import React, { useState } from 'react'
import { Button } from './Button'
import './Header.css'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
function Header() {
 const [click, setClick] = useState(false);
 const [dropdown, setDropdown] = useState(false);
 const handleClick = () => setClick(!click);
 const closeMobileMenu = () => setClick(false);
 
 const onMouseEnter = () => {
  if (window.innerWidth < 960) {
   setDropdown(false)
  } else {
   setDropdown(true)
  }
 };

 const onMouseLeave = () => {
  if (window.innerWidth < 960) {
   setDropdown(true)
  } else {
   setDropdown(false);
  }
 };

 return (
  <>
   <nav className='navBar'>
     <Link to='/' className='navbar-logo'>
      <h1>Cultural Club</h1>
     </Link>

    <div className='menu-icon' onClick={handleClick}>
     <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    </div>
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
     <li className='nav-item'>
      <Link to="/" className='nav-links' onClick={closeMobileMenu}>
       Home
      </Link>
     </li>
     <li className='nav-item'>
      <Link to="/AboutUs" className='nav-links' onClick={closeMobileMenu}>
       About Us
      </Link>
     </li>
     <li className='nav-item'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
     >
      <Link to="/Activities" className='nav-links' onClick={closeMobileMenu}>
       Activities<i className='fas fa-caret-down' />
      </Link>
      {dropdown && <Dropdown />}
     </li>
     <li className='nav-item'>
      <Link to="/ContactUs" className='nav-links' onClick={closeMobileMenu}>
       Contact Us
      </Link>
     </li>
     <li className='nav-item'>
      <Link to="/SignUp" className='nav-links-mobile' onClick={closeMobileMenu}>
       Reach Us Out!!
      </Link>
     </li>
    </ul>
    <Button />
   </nav>
  </>
 )
}
export default Header
*/
import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Button } from './Button'
import logo from './logo.webp'
import "./Header.css"

function Header() {
  return (
    <div>
      <Navbar className="color-nav .text-white" sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand className="nav-logo box-shadow .text-white pull-left" href="/">
          <img src={logo} alt="logo" width="60px" /><h1>Cultural Club</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="right-aligned" id="basic-navbar-nav" >
          <Nav className="nav-items navbar-dark .text-white">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/AboutUs">About Us</Nav.Link>
            <NavDropdown title="Activities" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Dance">Dance</NavDropdown.Item>
              <NavDropdown.Item href="/Singing">
                Singing
              </NavDropdown.Item>
              <NavDropdown.Item href="/ArtAndLiterature">Literature And Art</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Competitions">
                Competitions</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button />
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header