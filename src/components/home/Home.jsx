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
          In times of need, our community comes together. Find the lifeline you're looking for - a hero in someone's blood. Your well-being is our priority.
          </p>
          <a  class="btn">
            contact us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
