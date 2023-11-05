import React from "react";
import Image from "next/image";
import blog1 from "../../../public/assets/blood.avif";
import blog2 from "../../../public/assets/blood.avif";
import blog3 from "../../../public/assets/blood.avif";
import user1 from "../../../public/assets/user.jpg";
import user2 from "../../../public/assets/user2.jpg";
import user3 from "../../../public/assets/user3.jpg";
import { AiOutlineRight } from "react-icons/ai";
import Wrap from "./Wrap";
import "../home/index.css";

const Section2 = () => {
  let array = [
    {
      mainImage: blog1,
      heading: "A Leading Global Agency In 15 Years.",
      userImage: user1,
      name: "Jhon catla",
      date: "15-12-2023",
      para: "Lorem ipsum dolor sit amet consectetur Eius iusto debitis doloremque nulla reiciendis illum.",
    },
    {
      mainImage: blog2,
      heading: "A Leading Global Agency In 15 Years..",
      userImage: user2,
      name: "Credon catla",
      date: "15-12-2023",
      para: "Lorem ipsum dolor sit amet consectetur Eius iusto debitis doloremque nulla reiciendis illum.",
    },
    {
      mainImage: blog3,
      heading: "Startup Leading Global Agency In 5 Years..",
      userImage: user3,
      name: "Jhon catla",
      date: "15-9-2023",
      para: "Lorem ipsum dolor sit amet consectetur Eius iusto debitis doloremque nulla reiciendis illum.",
    },
  ];
  return (
    <div className="section2Wrap">
      <Wrap>
        <h1 class="heading">
          <span>Save</span> Life
        </h1>
        <p className="text-gray-500 text-center text-[20px] my-[20px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] mt-[80px]">
          {array.map((item, i) => {
            return (
              <div
                key={i}
                className="bg-[white] px-[30px] py-[30px] rounded-lg flex flex-col gap-[15px] border border-gray-200"
              >
                <Image src={item?.mainImage} className="rounded-lg" />
                <h1 className="text-[18px] text-gray-900">{item?.heading}</h1>
                <div className="flex flex-row gap-[10px] items-center">
                  <Image
                    src={item?.userImage}
                    className="h-[40px] w-[40px] rounded-full"
                  />
                  <div>
                    <h1 className="text-[18px]">{item?.name}</h1>
                    <p className="text-[14px] text-gray-400">{item?.date}</p>
                  </div>
                </div>
                <p className="text-gray-600">{item?.para}</p>
                <div className="bg-[#9e1b32] flex flex-row items-center gap-[10px] h-[40px] w-[120px] text-white p-[5px] rounded-lg cursor-pointer text-[13px]">
                  <p>Read more</p>
                  <AiOutlineRight />
                </div>
              </div>
            );
          })}
        </div>
      </Wrap>
    </div>
  );
};

export default Section2;
