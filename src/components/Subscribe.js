import React from 'react'
import Button from './button.js'

const Subscribe = () => {
  return (
    <div className='subsHolder'>
      <h5>Subscribe to our newsletter for seasonal promotions, health news and savings</h5>

      <div className="inputDiv">
      <input type="text" placeholder="Enter Your Email"/>
      <Button title='Subscribe'/>
      </div>
      
    </div>
  )
}

export default Subscribe
