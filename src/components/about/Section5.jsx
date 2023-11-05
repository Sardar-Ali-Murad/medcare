import React from 'react'
import Wrap from './Wrap'
import img1 from "../../../public/assets/building1.jpg"
import img2 from "../../../public/assets/building2.jpg"
import img3 from "../../../public/assets/building3.jpg"
import Image from 'next/image'
import "../home/index.css"

const Section6 = () => {
    let array=[
        {
            date:" 15 Aug 2022 ",
            heading:"Sales buildings",
            para:"Lorenm ipsum dolor sit amet consectetur. Vitae Read more",
            image:img2
        },
        {
            date:"  22 Aug 2022  ",
            heading:"Buy buildings",
            para:"Lorenm ipsum dolor sit amet consectetur. Vitae Read more",
            image:img2
        },
        {
            date:"  15 Aug 2022  ",
            heading:"Read buildings",
            para:"Lorenm ipsum dolor sit amet consectetur. Vitae Read more",
            image:img3
        },
    ]
  return (
    <Wrap>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]'>
        {
            array.map((item,i)=>{
                return <div className='relative rounded-lg' key={i}>
                    <Image src={item?.image} className='rounded-lg'/>
                        <div className='bg-gray-300 absolute top-[15px] py-[8px] w-[140px] flex flex-row items-center left-[10px] px-[10px] rounded-full gap-[8px]'>
                            <div className='h-[10px] w-[10px] rounded-full bg-white '></div>
                            <p className='text-white'>{item?.date}</p>
                        </div>
                        <div className='bg-gray-300 absolute bottom-[20px] left-[10px] px-[10px] py-[15px] right-[10px] rounded-lg'>
                            <h1 className='text-white text-[20px]'>{item?.heading}</h1>
                            <p className='text-white text-[14px]'>Lorenm ipsum dolor sit amet consectetur. Vitae <span className='underline'>Read more</span></p>
                        </div>
                </div>
            })
        }
      </div>
    </Wrap>
  )
}

export default Section6
