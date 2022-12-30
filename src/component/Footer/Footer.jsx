import React from 'react'
import './Footer.css'
import { FaInstagram, FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF} from "react-icons/fa";


function Footer() {
  return (
    <div className='footer' id='footer'>
        <div>Priya Chauhan</div>
        <div>123 Street, Maharashtra, India</div>
        <div>+1234567890 <span>info@123gmail.com</span></div>

        <div className="icons">
        <FaInstagram className='iconsName'/>
        <FaGithub className='iconsName'/>
        <FaLinkedinIn className='iconsName'/>
        <FaTwitter className='iconsName'/>
        <FaFacebookF className='iconsName'/>
        
        </div>

        <div className="div">
            <p>your site name, All Rights Reserve. Designed by HTML designer</p>
        </div>
    </div>
  )
}

export default Footer