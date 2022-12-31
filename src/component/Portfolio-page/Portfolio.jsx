import React from 'react'
import './Portfolio.css'
import images from './ImagesP'
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from 'react'


function Portfolio() {
  const [width, setwidth] = useState(0);
  const Cards = useRef();

  useEffect(()=>{
    console.log(Cards.current.scrollWidth, Cards.current.offsetWidth);
    setwidth(Cards.current.scrollWidth - Cards.current.offsetWidth)
  },[]); 

  return (
    <div className='port' id='portfolio'>
        <h1>My Excellent Portfolio</h1>
        
        <motion.div ref={Cards} className='Cards'>

          <motion.div 
          drag="x" 
          dragConstraints={{right:0, left:-width}}
          className='innerCard'>
            {images.map((Image)=>{
              return(
                <motion.div  className='item' key={Image}>
                  <motion.img src={Image} alt="" />
                </motion.div>
              )
            })}
          </motion.div>
    
       </motion.div>
    </div>
  )
}

export default Portfolio