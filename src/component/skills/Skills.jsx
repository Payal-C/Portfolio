import React from 'react'
import './skills.css'
import skillImg from '../../images/gif2.gif';
import {motion} from 'framer-motion'

function skills() {
  return (
    <div className='skills' id='skills'>
        <h1>My Skills </h1>
        <div className="inner-skills-box">
        

        <motion.div className="coding"
        initial={{ y:"100%" }}
        whileInView={{ y:"0%" }}
        transition={{duration : 1}}
        >
          <h2>Coading skills</h2>

          <motion.div 
          initial={{ y:"100%" }}
          whileInView={{ y:"0%" }}
          transition={{duration : 1}}
          className="bar1">
          <div>HTML <span>95%</span></div>  
          <motion.progress id="file" value="95" max="100"> 32% </motion.progress>
          </motion.div>

          <motion.div  
          initial={{ y:"100%" }}
          whileInView={{ y:"0%" }}
          transition={{duration : 1}}
          className="bar2">
          <div>CSS <span>85%</span></div>  
          <progress id="file" value="85" max="100"> 32% </progress>
          </motion.div>

          <motion.div  
          initial={{ y:"100%" }}
          whileInView={{ y:"0%" }}
          transition={{duration : 1}}
          className="bar3">
          <div>JavaScript <span>90%</span></div>  
          <progress id="file" value="90" max="100"> 32% </progress>
          </motion.div>

          <motion.div 
          initial={{ y:"100%" }}
          whileInView={{ y:"0%" }}
          transition={{duration : 1}}
          className="bar4">
          <div>React <span>80%</span></div>  
          <progress id="file" value="80" max="100"> 32% </progress>
          </motion.div>

          <motion.div 
          initial={{ y:"100%" }}
          whileInView={{ y:"0%" }}
          transition={{duration : 1}}
          className="bar5">
          <div>Angular JS <span>75%</span></div>  
          <progress id="file" value="75" max="100"> 32% </progress>
          </motion.div>
          
        </motion.div>

        <motion.div className="design"
        initial={{ y:"100%" }}
        whileInView={{ y:"0%" }}
        transition={{duration : 1}}>
          <h2>Designing skills</h2>

              <motion.div
              initial={{ y:"100%" }}
              whileInView={{ y:"0%" }}
              transition={{duration : 1}}
              className="bar6">
              <div>UX/UI<span>95%</span></div>  
              <progress id="file" value="95" max="100"> 32% </progress>
              </motion.div>

              <motion.div 
              initial={{ y:"100%" }}
              whileInView={{ y:"0%" }}
              transition={{duration : 1}}
              className="bar7">
              <div>Web design <span>85%</span></div>  
              <progress id="file" value="85" max="100"> 32% </progress>
              </motion.div>

              <motion.div
              initial={{ y:"100%" }}
              whileInView={{ y:"0%" }}
              transition={{duration : 1}}
              className="bar8">
              <div>Logo design<span>90%</span></div>  
              <progress id="file" value="90" max="100"> 32% </progress>
              </motion.div>

        </motion.div>
        <div className="s-img">
        <img src={skillImg} alt="" /> 
      </div>
      </div>

    </div>
  )
}

export default skills