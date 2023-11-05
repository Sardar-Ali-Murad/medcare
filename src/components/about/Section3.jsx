import React from "react";
import Wrap from "./Wrap";
// import device1 from "../../../public/assets/device1.jpg";
import device1 from "../../../public/assets/blood3.jpg"
import device2 from "../../../public/assets/blood3.jpg"
// import device2 from "../../../public/assets/device2.jpg";
import device3 from "../../../public/assets/device3.jpg";
import device4 from "../../../public/assets/device4.jpg";
import Image from "next/image";
import { FaMobileScreen } from "react-icons/fa6";
import { AiOutlineSwapRight } from "react-icons/ai";
import "../home/index.css"

const Section3 = () => {
  let array = [
    {
      date: "February 24,2022",
      heading: "Importance of Keyword Resarch in a Blog",
      mainImage: device1,
    },
    {
      date: "February 24,2022",
      heading: "Popular Email Marketing Techniques 2023",
      mainImage: device2,
    },
    {
      date: "February 24,2022",
      heading: "8 Best SEO Techniques for you in 2023",
      mainImage: device2,
    },
    {
      date: "February 24,2022",
      heading: "What are backlinks and Why They are Important",
      mainImage: device1,
    },
  ];
  return (
    <Wrap>
       <h1 class="heading">
          <span>BECOME</span> DONAR
        </h1>
      <p className='text-gray-500 text-center text-[20px] my-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className="mt-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-[50px]">
        {array.map((item,i) => {
          return (
            <div key={i} className="flex flex-col md:flex-col lg:flex-row bg-[#e5e7eb] gap-[30px] px-[20px] p rounded-lg pb-[10px]">
              <Image src={item?.mainImage} className="h-[100%] w-[200px] p-[12px] rounded-full" />
              <div className="flex flex-col gap-[15px] rounded-full mt-[30px]">
                <div className="flex flex-row items-center gap-[15px]">
                  <FaMobileScreen className="text-blue-600" />
                  <h1 className="text-gray-700">{item?.date}</h1>
                </div>
                <h1 className="text-[18px] font-bold">{item?.heading}</h1>
                <div className="flex flex-row items-center gap-[10px] bg-blue-500 h-[40px] w-[120px] text-white text-center justify-center rounded-full cursor-pointer text-[12px]">
                  <p>Read more</p>
                  <AiOutlineSwapRight />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrap>
  );
};

export default Section3;
