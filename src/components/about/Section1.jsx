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
            userName:"Dr. Sarah Johnson",
            role:"MBBS, MD in Internal Medicine, Board-Certified Physician",
            heading:"Dedicated to Excellence",
            para:"Our team members are driven by a passion for providing top-notch healthcare services."
        },
        {
            mainImage:s1,
            userName:"Dr. John Mitchell",
            role:"DDS, DMD in Dentistry, Specialist in Oral Surgery",
            heading:"A Wealth of Experience?",
            para:"With years of experience, our experts are well-equipped to address your healthcare needs."
        },
        {
            mainImage:s1,
            userName:"Dr. Emily Roberts",
            role:" PhD in Psychology, Licensed Clinical Psychologist",
            heading:"A Personal Touch",
            para:"We believe in treating you not just as a patient but as a valued member of our extended healthcare family"
        },
    ]
  return (

    <Wrap>
         <h1 class="heading">
          <span>Our</span> Foundation
        </h1>
      <p className='text-gray-500 text-center text-[20px] my-[20px]'>Built on the principles of compassion, community, and care, our foundation is the cornerstone of our commitment to your well-being.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] mt-[50px]'>
         {
            array.map((item,i)=>{
                return <div key={i} className='border border-gray-100 shadow-gray-50 shadow-lg'>
                    <div className='relative rounded-lg'>
                    <Image src={item?.mainImage} className='w-[100%] h-[60%] rounded-lg'/>
                    <div className='absolute bottom-0 left-0 px-[10px] py-[5px] bg-[white] flex gap-[10px] items-center'>
                        <Image src={user} className='h-[40px] w-[40px] rounded-full'/>
                        <div className='flex flex-col gap-[4px]'>
                            <h1 className='text-[14px] text-gray-900'>{item?.userName}</h1>
                            <p className='text-gray-700 text-[12px]'>{item?.role}</p>
                        </div>

                    </div>
                    </div>
                    <div className='flex flex-col gap-[10px] my-[20px] mx-[20px]'>
                        <h1 className='text-[20px]  text-gray-900'>{item?.heading}</h1>
                        <p className='text-gray-500'>{item?.para}</p>
                    <div className='flex flex-row items-center gap-[10px]'>
                        <p className='text-blue-600 cursor-pointer text-[14px]'>Read More</p>
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
