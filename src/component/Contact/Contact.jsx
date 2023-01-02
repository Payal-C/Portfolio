import React from 'react'
import './Contact.css'
import img1 from '../../images/contact.jpeg'
import {motion} from 'framer-motion';

function Contact() {
  return (
    <div className='contact' id='Contact'>
        <h1>Contact Me</h1>
        <div className="c-container">
            <motion.img 
            src={img1} alt="" 
            initial={{ y:"50%" }}
               whileInView={{ y:"0%" }}
               transition={{duration : 1}}
            /> 


            <div className="c-content">
            <form action="">
                 <div class="inputBox">
                    <input type="text" class="type" placeholder="name"/>
                    <input type="email" class="email" placeholder="email"/>
                 </div>

                 <div class="inputBox">
                    <input type="text" class="text" placeholder="Subject"/>
                 </div>
                 <textarea placeholder="address" name="" id="" cols="30" rows="10"></textarea>
                 <motion.button className='btn1'
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}>
                 Send Message</motion.button>
                
            </form>
                
            </div>
            <div>
            
            </div>


        </div>

    </div>
  )
}

export default Contact