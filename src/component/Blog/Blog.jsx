import React from 'react'
import './Blog.css'
import img1 from '../../images/b-1.jpeg'
import img2 from '../../images/b-2.webp'
import {motion} from 'framer-motion'


function Blog() {
  return (
    <div className='blog' id='Blog'>
        <h1>Latest Articles</h1>
        <div className="blog-container">
            
            <div className="l-blog">
                <motion.img src={img1} alt="" 
                initial={{ opacity: 0 }}
                 whileInView={{ opacity: 2 }}
                transition={{ duration: 2 }}
                />
                    <h2>Lorem ipsum dolor sit </h2>
                    <div className="blog-content">
                        <p>
                        Lorem ipsum dolor sit amet elit. Nullam commodo mattis mi. Nullam eu erat lectus. Proin viverra risus vitae luctus. Proin ut ante, vitae sapien. Fusce sem ac erat rhoncus, ornare mattis nisl massa et eros vitae pulvin
                        </p>
                    </div>
                    <motion.button className='btn1'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    >Read More... </motion.button>
            </div>

            <div className="r-blog">
                <motion.img src={img2} alt=""
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 2 }}
                    transition={{ duration: 2 }}
                />
                    <h2>Lorem ipsum dolor sit </h2>
                    <div className="blog-content">
                        <p>
                        Lorem ipsum dolor sit amet elit. Nullam commodo mattis mi. Nullam eu erat lectus. Proin viverra risus vitae luctus. Proin ut ante, vitae sapien. Fusce sem ac erat rhoncus, ornare mattis nisl massa et eros vitae pulvin
                        </p>
                    </div>
                    <motion.button className='btn1'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    >Read More... </motion.button>
            </div>
        </div>

    </div>
  )
}

export default Blog