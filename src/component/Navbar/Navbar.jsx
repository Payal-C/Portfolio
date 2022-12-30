import React from 'react'
import './Navbar.css';



function Navbar() {

  
  return (
    <div className='navbar'>
        <div className="titleName">
        <div className='title'>DesignerFolio</div>
        </div>

        <nav class="list">
            <a className='listItem' href="#home">Home</a>
            <a  className='listItem' href="#about">About</a>
            <a  className='listItem'  href="#skills">Skills</a>
            <a  className='listItem'  href="#service">Service</a>
            <a className='listItem'  href="#Experience">Experience</a>
            <a className='listItem'  href="#portfolio">Portfolio</a>
            <a className='listItem'  href="#Blog">Blog</a>
            <a className='listItem'  href="#Contact">Contact</a>
        </nav>

     
    </div> 
  )
}

export default Navbar