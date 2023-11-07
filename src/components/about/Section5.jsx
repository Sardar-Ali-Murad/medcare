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
            date:" 15 Aug 2023",
            heading:"Join Our Cause",
            para:"Become a part of our community and help make a positive impact on the lives of others",
            image:img2
        },
        {
            date:"  22 March 2023",
            heading:"Get Involved",
            para:"Your support matters. Find out how you can contribute to our mission",
            image:img2
        },
        {
            date:"15 May 2023",
            heading:"Contact Us",
            para:"Have questions or want to connect with us? We're here to assist you.",
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
                        <div className='bg-[#E52B50] absolute top-[15px] py-[8px] w-[140px] flex flex-row items-center left-[10px] px-[10px] rounded-full gap-[8px]'>
                            <div className='h-[10px] w-[10px] rounded-full bg-white '></div>
                            <p className='text-white text-[12px]'>{item?.date}</p>
                        </div>
                        <div className=' absolute bottom-[20px] left-[10px] px-[10px] py-[15px] right-[10px] rounded-lg bg-[#FBCEB1]'>
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
