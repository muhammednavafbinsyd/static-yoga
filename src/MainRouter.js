import React from 'react'
import HOME from './home'
import Aboutus from './aboutus'
import Services from './services'
import CONTACTUS from './contactus'
import { Route, Routes } from 'react-router-dom'


const mainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path ="/" element={<HOME/>} />
        <Route path ="/aboutus" element={< Aboutus/>} />
        <Route path ="/services" element={< Services/>} />
        <Route path ="/contactus" element={< CONTACTUS/>} />
      </Routes>
     
    </div>
  )
}

export default mainRouter
