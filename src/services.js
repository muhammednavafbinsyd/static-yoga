import React, { useState } from 'react'
import'./services.css'
import image from './images/img1.png'
import image2 from './images/img2.png'
import image3 from './images/img3.png'


function Services() {
  
  const [imagesArray] = useState( [
    { image: image, text: 'NEWBIES CLASS' },
    { image: image2, text: 'ADVANCED CLASS' },
    { image: image3, text: 'EXPERT CLASS' }
  ]);
  const myImages = imagesArray.map((item,Index ) => (
    <div className='imgs1' key={Index}>
      <img className='images' src={item.image} alt='' />
      <p className='services-p2'>{item.text}</p>
    </div>
  ));


  return (
    <div className='services'> 
    <div className='services-texts'>
        <h1 className='services-h1'> CHOOSE CLASS</h1>
     <p className='services-p'> It is a long established fact that a reader will be distracted by the readable <br></br>content of a page when looking at its layout.The point of using <br></br>Lorem Ipsum</p>
     </div>

     {/* <div className='imgs'>
       <div className='imgs1'>
        <img className='images' src={image} alt=''></img>
        <p className='services-p2'>  NEWBIES CLASS</p>
        </div>
        <div className='imgs1'>
        <img className='images'  src={image2} alt=''></img>
        <p className='services-p2'>  ADVANCED CLASS</p>
        </div>
        <div className='imgs1'> 
        <img className='images' src={image3} alt=''></img>
        <p className='services-p2'>EXPERT CLASS</p>
        </div> */} 

    
       {/* </div> */}
     
 



 <div className='imgs'>{myImages}</div>;





     </div>

  

    
  )
}

export default Services
