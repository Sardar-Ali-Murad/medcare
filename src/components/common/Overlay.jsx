import React from 'react'
import  Headers  from './Headers'
import Footer from './Footer'


const Overlay = ({children}) => {
  return (
    <div>
      <Headers/>
      {children}
      <Footer/>
    </div>
  )
}

export default Overlay
