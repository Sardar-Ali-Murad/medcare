import React from 'react'

const Wrap = ({children}) => {
  return (
    <div className='px-[30px] md:px-[50px] lg:px-[70px] py-[100px]'>
      {children}
    </div>
  )
}

export default Wrap
