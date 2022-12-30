import React from 'react'
import './About.css'
import img from '../../images/about-1.jpeg'
import Resume from '../../images/Resume.docx';
import {motion} from 'framer-motion'

function About() {
    //transition
    const transition = { duration: 4, type: "spring" };

  return (
    <div className='about' id='about'>
        <div className="a-img">
            <div className='a-box'></div>
            <img src={img} alt="" />
        </div>
        <motion.div className="description"
        initial={{ right: "-10%" }}
        whileInView={{ left: "-5%" }}
        transition={transition}
        >
            
                <div className='a-head'>UI/UX Designer & Web Developer</div>
                <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum. Amet dolor stet lorem diam dolor justo et dolor dolor dolor</p>
                <ol className="a-list">
                    <motion.li className="listItem"><span>Name:</span> Priya Chauhan</motion.li>
                    <li className="listItem"><span> Degree:</span> Master</li>
                    <li className="listItem"><span>Phone:</span>  +012 345 6789</li>
                    <li className="listItem"><span>Address:</span>  123 Street, Maharashtra, India</li>
                    <li className="listItem"><span>Birthday</span> : 1 April 1990</li>
                    <li className="listItem"><span>Experience:</span>  10 Years</li>
                    <li className="listItem"><span>Email:</span>  info@example.com</li>
                    <li className="listItem"><span>Freelance:</span>  Available</li>
                </ol>
            

                <a href={Resume} download>
                    <motion.button className="btn1"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >Download CV</motion.button>
                </a>
        </motion.div>
        
    </div>
  )
}

export default About