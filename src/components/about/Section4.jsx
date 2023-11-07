import React from "react";
import Wrap from "./Wrap";
import Image from "next/image";
import image from "../../../public/assets/section4.jpg";
import "../home/index.css"

const Section4 = () => {
  let array = [
    {
      topic: "Blood Donation Drives",
      head: "Organized and Frequent Blood Drives",
      para: "We regularly host blood drives to ensure a consistent supply of life-saving blood",
      date: "Mathony Ailler | Jan 11, 2023",
    },
    {
      topic: "Health Education Programs",
      head: "Empowering Communities Through Education",
      para: "We conduct educational programs to promote health awareness and well-being",
      date: "Carah Suarez | March 3, 2023",
    },
    {
      topic: "Community Health Clinics",
      head: "Accessible Healthcare Services",
      para: "Our clinics provide accessible medical care to those in need.",
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
      <p className=' text-center text-[20px] my-[20px] text-[#fff]'>Join our mission to save lives by becoming a blood donor. Your contribution can make a significant impact.</p>
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
                  <p className="text-white text-[12px]">{array[0]?.para}</p>
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
                  <p className="text-gray-700 text-[12px]">{item?.para}</p>
                  <div className="flex flex-row  justify-between">
                    <div>
                    <p className="text-[15px] mt-[6px]">{item?.date}</p>
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
