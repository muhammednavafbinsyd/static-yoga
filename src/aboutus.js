import React from 'react'
import './aboutus.css'
import aboutimg from './images/banner4image.jpg'
import Button from 'react-bootstrap/Button';
function aboutus() {
  return (
    <div className='about'>
    <img src={aboutimg} alt='' className='aboutimg'></img>
    <div className='about-texts'>
    <h1  className='about-h1'>BEST INSTRUCTOR</h1>
    <p className='about-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat illum velit eveniet. Optio, illum sequi dolor sit amet consectetur adipisicing elit.?</p>
    <Button className='about-btn' variant="primary">READ MORE</Button>{' '}
    </div>
    
   
    </div>
  )
}

export default aboutus