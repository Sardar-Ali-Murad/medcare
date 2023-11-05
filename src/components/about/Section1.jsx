import React from 'react'
import Image from 'next/image'
import s1 from "../../../public/assets/blood1.jpg"
import s2 from "../../../public/assets/blood2.png"
import s3 from "../../../public/assets/blood3.jpg"
import user from "../../../public/assets/user.jpg"
import {BsArrowRight}  from "react-icons/bs"
import Wrap from './Wrap'
import "../home/index.css"

const Section1 = () => {
    let array=[
        {
            mainImage:s1,
            userName:"Andrea William",
            role:"Designer",
            heading:"How to give a better feedback",
            para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
        {
            mainImage:s2,
            userName:"Jonathan Hope",
            role:"Designer",
            heading:"Should UI designers learn how to code?",
            para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
        {
            mainImage:s3,
            userName:"Michael Smith",
            role:"Designer",
            heading:"Step by step to conduct usability typesetting",
            para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
    ]
  return (

    <Wrap>
         <h1 class="heading">
          <span>Our</span> Foundation
        </h1>
      <p className='text-gray-500 text-center text-[20px] my-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] mt-[50px]'>
         {
            array.map((item,i)=>{
                return <div key={i} className='border border-gray-100 shadow-gray-50 shadow-md'>
                    <div className='relative '>
                    <Image src={item?.mainImage}/>
                    <div className='absolute bottom-0 left-0 px-[10px] py-[5px] bg-[white] flex gap-[10px] items-center'>
                        <Image src={user} className='h-[40px] w-[40px] rounded-full'/>
                        <div className='flex flex-col gap-[7px]'>
                            <h1 className='text-[18px]'>{item?.userName}</h1>
                            <p className='text-gray-700'>{item?.role}</p>
                        </div>

                    </div>
                    </div>
                    <div className='flex flex-col gap-[10px] my-[20px] mx-[20px]'>
                        <h1 className='text-[20px] font-bold'>{item?.heading}</h1>
                        <p className='text-gray-500'>{item?.para}</p>
                    <div className='flex flex-row items-center gap-[10px]'>
                        <p className='text-blue-600 cursor-pointer'>Read More</p>
                        <BsArrowRight className='text-blue-600 cursor-pointer'/>
                    </div>
                    </div>
                </div>
            })
         }
      </div>
    </Wrap>
  )
}

export default Section1
