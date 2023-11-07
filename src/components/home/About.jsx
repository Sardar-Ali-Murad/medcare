"use client"
import React from "react";
import "./index.css";
import Img1 from "../../assets/about-img.svg";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <section class="about" id="about">
        <h1 class="heading">
          {" "}
          <span>about</span> us{" "}
        </h1>

        <div class="row">
          <div class="image">
            <Image src={Img1} alt="" height={100} width={100} />
          </div>

          <div class="content">
            <h3>we take care of your healthy life</h3>
            <p>
            Our mission is to be your trusted partner in maintaining a healthy and vibrant life. With a team of dedicated healthcare professionals and state-of-the-art facilities, we are committed to providing you with the highest quality care.
            </p>
            <p>
            Our approach goes beyond just treating illnesses; we focus on holistic healthcare, emphasizing prevention, early intervention, and ongoing support. We believe in empowering you with the knowledge and resources needed to make informed decisions about your health.
            </p>
            <a  class="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
