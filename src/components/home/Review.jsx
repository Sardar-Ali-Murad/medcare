"use client"
import React from "react";
import "./index.css";
import Img1 from "../../assets/pic-1.png";
import Img2 from "../../assets/pic-2.png";
import Img3 from "../../assets/pic-3.png";
import Image from "next/image";

const Review = () => {
  return (
    <div>
      <section class="review" id="review">
        <h1 class="heading">
          {" "}
          Save Someone's <span>Life</span>{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <Image src={Img3} alt="" height={100} width={100} />
            <h3>John S.</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <p class="text">
            The 'OUR SERVICES' section on this website is a lifesaver in itself. I've used their ambulance service multiple times, and their response time is incredible. They truly live up to their commitment of providing 24/7 care.
            </p>
          </div>

          <div class="box">
            <Image src={Img1} alt="" height={100} width={100} />
            <h3> Emily R.</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <p class="text">
            I cannot express my gratitude enough to medcare. When I needed a blood donor urgently, their platform connected me with a lifesaver. Their dedication to saving lives is truly remarkable
            </p>
          </div>

          <div class="box">
            <Image src={Img2} alt="" height={100} width={100} />
            <h3>Smith</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <p class="text">
            I had a great experience with Medcare. The expert doctors on their platform provided me with exceptional care and advice. I felt like they genuinely cared about my well-being. It's a reliable resource for healthcare
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
