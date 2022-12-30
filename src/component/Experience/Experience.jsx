import React from 'react'
import ExperienceProb from '../ExperienceProb/ExperienceProb';
import './Experience.css';
import { motion} from "framer-motion";

function Experience() {
  const transition = { duration: 4, type: "spring" };

  return (
    <div className='Exp' id='Experience'>
        <h1>Eduaction and Experience </h1>

        <div className="e-box">
            <div className="e-container1">  
                <h1>Education</h1>

                <motion.div className="e-box1"
                     initial={{ right: "-50%" }}
                     whileInView={{ left: "5%" }}
                     transition={{duration: 1 }}>
                <ExperienceProb
                    year="2010"
                    text1={"Specialize of course"}
                    text2={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered"}
                  />
                </motion.div>
                

                <motion.div className="e-box2"
                  initial={{ right: "-50%" }}
                  whileInView={{ left: "5%" }}
                  transition={{duration: 1.3 }}
                >
                <ExperienceProb 
                    year="2012"
                    text1={"Specialize of course"}
                    text2={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered"}
                  />
                </motion.div>
                  
                <motion.div className="e-box3"
                     initial={{ right: "-50%" }}
                     whileInView={{ left: "5%" }}
                     transition={{duration: 1.6 }}>
                <ExperienceProb
                    year="2010"
                    text1={"Specialize of course"}
                    text2={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered"}
                  />
                </motion.div>
            </div>

            <div className="e-container2">
                <h1>Experience</h1>
                <motion.div className="e-box1"
                     initial={{ right: "-50%" }}
                     whileInView={{ left: "8%" }}
                     transition={{duration: 1 }}>
                <ExperienceProb
                    year="2015"
                    text1={"Infosys"}
                    text2={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered"}
                  />
                </motion.div>
                

                <motion.div className="e-box2"
                  initial={{ right: "-50%" }}
                  whileInView={{ left: "8%" }}
                  transition={{duration: 1.3 }}
                >
                <ExperienceProb 
                    year="2018"
                    text1={"Wipro"}
                    text2={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered"}
                  />
                </motion.div>
                  
                <motion.div className="e-box3"
                     initial={{ right: "-50%" }}
                     whileInView={{ left: "8%" }}
                     transition={{duration: 1.6 }}>
                <ExperienceProb
                    year="2022"
                    text1={"TCS"}
                    text2={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered"}
                  />
                </motion.div>
            </div>
        </div>
        
        

    </div>
  )
}

export default Experience