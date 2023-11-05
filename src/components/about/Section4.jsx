import React from "react";
import Wrap from "./Wrap";
import Image from "next/image";
import image from "../../../public/assets/section4.jpg";
import "../home/index.css"

const Section4 = () => {
  let array = [
    {
      topic: "Article",
      head: "Asking God for Inspiration",
      para: "Namaskar, welcome to Incredible India, where culture echoes, tradition speaks, beauty enthralls and diversity",
      date: "Mathony Ailler | April 11, 2023",
    },
    {
      topic: " Story ",
      head: "The Right Fit",
      para: "Namaskar, welcome to Incredible India, where culture echoes, tradition speaks, beauty enthralls and diversity",
      date: "Carah Suarez | April 3, 2023",
    },
    {
      topic: " Campus news ",
      head: "Fist Week of May 2023",
      para: "Namaskar, welcome to Incredible India, where culture echoes, tradition speaks, beauty enthralls and diversity",
      date: "Kevin Nguyen | April 1, 2023",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-[#FBCEB1] to-[#E52B50]">
      <Wrap>
        <div className="wrap">
        <h1 class="heading">
          <span>WHAT</span> WE DO
        </h1>
      <p className='text-gray-500 text-center text-[20px] my-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row border border-gray-400">
          <div className="flex-1 relative">
            <div className="h-[100%]">
            <Image src={image} className="h-[100%] rounded-l-lg rounded-bl-lg" />
            </div>
            <div className="absolute bottom-[0px] px-[50px] bg-gray-700 text-white rounded-bl-lg">
            <div className="mb-[40px] flex flex-col gap-[10px] mt-[20px]">
                  <h1 className="text-blue-600">{array[0]?.topic}</h1>
                  <h1 className="text-[20px]">{array[0]?.head}</h1>
                  <p className="text-white">{array[0]?.para}</p>
                  <div className="flex flex-row  justify-between">
                    <div>
                    <p>{array[0]?.date}</p>
                    </div>
                    <div>
                      <p className="mt-[10px] text-blue-400 underline cursor-pointer text-[13px]">Read</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="flex-1 bg-[white] px-[50px] py-[20px] rounded-r-lg rounded-br-lg">
            {array.map((item,i) => {
              return (
                <div className="mb-[40px] flex flex-col gap-[10px]" key={i}>
                  <h1 className="text-blue-600">{item?.topic}</h1>
                  <h1 className="text-[20px]">{item?.head}</h1>
                  <p className="text-gray-700">{item?.para}</p>
                  <div className="flex flex-row  justify-between">
                    <div>
                    <p>{item?.date}</p>
                    </div>
                    <div>
                      <p className="mt-[10px] text-blue-400 underline cursor-pointer text-[13px]">Read</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="bg-[#D2122E] border text-white border-gray-300 w-[200px] h-[40px] flex flex-row items-center justify-center cursor-pointer hover:bg-[#FBCEB1] hover:text-white transition-all duration-75 rounded-lg">
                <p>Read More</p>
            </div>
          </div>
        </div>
      </Wrap>
    </div>
  );
};

export default Section4;
