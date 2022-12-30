import React from 'react'
import './Review.css'
import p1 from '../../images/p-1.jpg'

function Review() {
  return (
    <div className='Review' id='review'>

        <img src={p1} alt="" />
        <div className="r-box">
            <p>
                I love the the overall interface of naukri. It has a smooth, intuitive interface along with some of the best features we can rely on. I also love the sorting and advanced filtering options which saves me lots of time and helps me
            </p>
            <h2>Customer Name</h2>
            <span>Profession</span>
        </div>

    </div>
  )
}

export default Review