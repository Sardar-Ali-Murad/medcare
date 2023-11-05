import React from 'react'
import  Headers  from './Headers'
import Footer from './Footer'


const Overlay = ({children}) => {
  return (
    <div className="text-[#fff]">
      <Headers/>
      {children}
      <Footer/>
    </div>
  )
}

export default Overlay
