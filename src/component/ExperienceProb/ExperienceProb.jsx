import React from 'react'
import './ExperienceProb.css'

const Education = ({year, text1, text2}) => {
  return (
    <div className='Education'>
        <div className="e-desc">
               
                <span className='year'>{year}</span>
                <div className="e-data">
                    <span>{text1} </span>
                    <p>{text2}</p>
                </div>
            
            </div>
    </div> 
  )
}

export default Education