import React from 'react'
import './Navbar.css';
import { useRef } from 'react';
import {FaAlignJustify, FaRegWindowClose} from 'react-icons/fa'



function Navbar() {

  
  return (
    <div className='navbar'>
        <div className="titleName">
        <div className='title'>DesignerFolio</div>
        </div>

        <nav className="list">
            <a className='listItem' href="#home">Home</a>
            <a  className='listItem' href="#about">About</a>
            <a  className='listItem'  href="#skills">Skills</a>
            <a  className='listItem'  href="#service">Service</a>
            <a className='listItem'  href="#Experience">Experience</a>
            <a className='listItem'  href="#portfolio">Portfolio</a>
            <a className='listItem'  href="#Blog">Blog</a>
            <a className='listItem'  href="#Contact">Contact</a>
        </nav>

        <div className="bars">
          <FaAlignJustify className='bars' id="bars"/>
        </div>

        <div className='closeIcon'>
          <FaRegWindowClose className='closeIcon' id="closeIcon"/>
        </div>
     
    </div> 
  )
}

export default Navbar