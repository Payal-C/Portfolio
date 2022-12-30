import React from 'react'
import './service.css';
import img1 from '../../images/icon.png'
import img2 from '../../images/icon-2.png'
import img3 from '../../images/icon-3.png'
import img4 from '../../images/icon-4.png'
import PostService from '../PostsService/PostService'
import {motion} from 'framer-motion';


function service() {
  return (
    <div className='service' id='service'>
      <h1>Awosome Quality Services</h1>

      
      <div className='qualityServices'>
        
        
       <div className="leftCard">

       <motion.div className="cards"
       initial={{ y:"90%" }}
       whileInView={{ y:"0%" }}
       transition={{duration : 0.5}}
       >
          <img src={img1} alt="" />
          <div className='data'>
              <h2>Web Designing</h2>
              <p>
              Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit 
              </p>
          </div>
          
        </motion.div>

        <motion.div className="cards"
       initial={{ y:"90%" }}
       whileInView={{ y:"0%" }}
       transition={{duration : 0.4}}
       >
          <img src={img2} alt="" />
          <div className='data'>
              <h2>Web Designing</h2>
              <p>
              Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit 
              </p>
          </div>
        </motion.div>
      </div>

       <div className="rightCard">

       <motion.div className="cards"
       initial={{ y:"90%" }}
       whileInView={{ y:"0%" }}
       transition={{duration : 0.5}}
       >
          <img src={img3} alt="" />
          <div className='data'>
              <h2>Web Designing</h2>
              <p>
              Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit 
              </p>
          </div>
        </motion.div>

        <motion.div className="cards"
       initial={{ y:"90%" }}
       whileInView={{ y:"0%" }}
       transition={{duration : 0.4}}
       >
          <img src={img4} alt="" />
          <div className='data'>
              <h2>Web Designing</h2>
              <p>
              Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit 
              </p>
          </div>
        </motion.div>


       </div>
       
       </div>
    </div>
  )
}

export default service