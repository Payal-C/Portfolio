import {React, useState} from 'react'
import './Home.css'
import homeimg from '../../images/h-perso1.jpeg';
import { motion} from "framer-motion";


function Home() {

  //transition
  const transition = { duration: 4, type: "spring" };

  return (
    <div className='home' id='home'>
        <div className="h-content">
            <div className='h-head'>I'm <span>Priya Chauhan</span> Web Designer</div>
            <div className='homebtn'>
              
              <motion.button className='h-btn'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>Hire Me</motion.button>
              
              <motion.button className='h-btn'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>Contact Me</motion.button>
            
            </div>
        </div>
        <div className="homeimg">
            <motion.img src={homeimg} alt="" 
               initial={{ right: "-10%" }}
               whileInView={{ left: "0%" }}
               transition={transition}
            />
        </div>
       
          <motion.div
          className="h-box"
          initial={{ right: "-10%" }}
          whileInView={{ left: "0%" }}
          transition={transition}
        />
        
    </div>
  )
}

export default Home