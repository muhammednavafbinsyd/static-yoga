import React from 'react'
import bnrimg from './images/Shape1-removebg.png'
import './home.css'
import Button from 'react-bootstrap/Button';


const home = () => {
  return (
  
  <div className='bnr'>
   <img src={bnrimg} alt='' className='shape1'></img>
   <div className='b-texts'> <h1 className='bnrh1'>YOGA CLASS</h1> 
   <p className='bnrp'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, eaqu Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, magni</p>
   <Button className='bnrbtn' variant="success">JOIN NOW</Button>{' '}
   </div>
  
  </div>
  
  )
}

export default home