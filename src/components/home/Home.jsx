"use client"
import React from "react";
import "./index.css";
import Img1 from "../../assets/home-img.svg";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <section class="home" id="home">
        <div class="image">
          <Image src={Img1} alt=""  height={100} width={100}/>
        </div>

        <div class="content">
          <h3>stay safe, stay healthy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed
            autem vero? Magnam, est laboriosam!
          </p>
          <a  class="btn">
            {" "}
            contact us{" "}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
