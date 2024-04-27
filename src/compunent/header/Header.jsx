import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
    <a href="#home" className='logo'>Hoang</a>
    <i class="fa-solid fa-bars" id='menu-icon'></i>
    <nav className="navbar">
        <a href="#home" className='active'>Home</a>
        <a href="#experience">Experiences</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a> 
        <a href="#contact">Contact</a>
    </nav>
  </header>
  )
}

export default Header