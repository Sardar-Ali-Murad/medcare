import React from "react";
import Wrap from "./Wrap";
import device1 from "../../../public/assets/blood.avif"
import device2 from "../../../public/assets/blood.avif"
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
      heading: "The Life-Saving Power of Blood Donation",
      mainImage: device1,
    },
    {
      date: "February 24,2022",
      heading: "Who Can Donate Blood: Eligibility Criteria",
      mainImage: device2,
    },
    {
      date: "February 24,2022",
      heading: "Donating Blood: What to Expect",
      mainImage: device2,
    },
    {
      date: "February 24,2022",
      heading: "Frequently Asked Questions About Blood Donation",
      mainImage: device1,
    },
  ];
  return (
    <Wrap>
       <h1 class="heading">
          <span>BECOME</span> DONAR
        </h1>
      <p className='text-gray-500 text-center text-[20px] my-[20px]'>Join our mission to save lives by becoming a blood donor. Your contribution can make a significant impact.</p>
      <div className="mt-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-[50px]">
        {array.map((item,i) => {
          return (
            <div key={i} className="flex flex-col md:flex-col lg:flex-row bg-[#e5e7eb] gap-[30px] px-[20px] p rounded-lg pb-[10px]">
              {/* <div className="flex flex-row justify-center items-center">
              <Image src={item?.mainImage} className="w-[100px] h-[100px] p-[12px] rounded-full" />
              </div> */}
              <div className="flex flex-col gap-[15px] rounded-full mt-[30px]">
                <div className="flex flex-row items-center gap-[15px]">
                  <FaMobileScreen className="text-blue-600" />
                  <h1 className="text-gray-700">{item?.date}</h1>
                </div>
                <h1 className="text-[20px] text-gray-900">{item?.heading}</h1>
                <div className="flex flex-row items-center gap-[10px] bg-[#9e1b32] h-[40px] w-[120px] text-white text-center justify-center rounded-full cursor-pointer text-[12px]">
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
