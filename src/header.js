
import React, { useState } from 'react'
import logo from '../src/images/Vector-Smart-Object11.png'
import './header.css'
import {Link} from 'react-router-dom'





function Header() {
 
const [link,setLink]=useState("HOME")


function linkClick(linkText){
setLink(linkText)

}

  return (
    <div  className='navbar'>

     <div className='logo'>
     <img src={logo} className='image-logo' alt=''></img>
     </div>
     <div className='nav-text' >

      
        <Link onClick={()=>linkClick ("HOME")} className='link-header' to ='/'>         <p style={{ WebkitTextFillColor: link === 'HOME' ? ' #6c9894' : '' }}   className='navtexts'>HOME</p></Link>
        <Link onClick={()=>linkClick("ABOUT")} className='link-header'  to='/aboutus'> <p style={{ WebkitTextFillColor: link === 'ABOUT' ? ' #6c9894' : '' }}     className='navtexts'>ABOUT</p></Link>
        <Link onClick={()=>linkClick("SERVICE")} className='link-header' to ='/services'><p style={{ WebkitTextFillColor: link === 'SERVICE' ? ' #6c9894' : '' }}  className='navtexts'>SERVICES</p></Link>
        <Link onClick={()=>linkClick("CONTACT")} className='link-header' to='/contactus'><p style={{ WebkitTextFillColor: link === 'CONTACT' ? ' #6c9894' : '' }}  className='navtexts'>CONTACT US</p></Link>

        </div>
  
       
       </div>
  

  )
}

export default Header