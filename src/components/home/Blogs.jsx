"use client"
import React from "react";
import "./index.css";
import Img1 from "../../assets/blog-2.jpg";
import Img2 from "../../assets/blog-1.jpg";
import Img3 from "../../assets/blog-3.jpg";
import Image from "next/image";

const Blogs = () => {
  return (
    <div>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          
          our <span>blogs</span>
        </h1>

        <div class="box-container">
          <div class="box">
            <div class="image">
              <Image src={Img1} alt="" height={100} width={100} />
            </div>
            <div class="content">
              <div class="icon">
                <a>
                  <i class="fas fa-calendar"></i> 1st may, 2021
                </a>
                <a>
                  <i class="fas fa-user"></i> by admin
                </a>
              </div>
              <h3>Unlocking the Power of Regular Blood Donations</h3>
              <p>
              Discover how a simple act of giving blood can save lives and make a significant impact on your community.
              </p>
              <a  class="btn">
                learn more
              </a>
            </div>
          </div>

          <div class="box">
            <div class="image">
              <Image src={Img2} alt="" height={100} width={100}/>
            </div>
            <div class="content">
              <div class="icon">
                <a >
                  <i class="fas fa-calendar"></i> 1st march, 2022
                </a>
                <a>
                  <i class="fas fa-user"></i> by admin
                </a>
              </div>
              <h3>Emergency Health Tips: Be Prepared for Any Situation</h3>
              <p>
              Learn valuable insights on staying safe and taking quick action during health emergencies
              </p>
              <a  class="btn">
                learn more
              </a>
            </div>
          </div>

          <div class="box">
            <div class="image">
              <Image src={Img3} alt="" height={100} width={100}/>
            </div>
            <div class="content">
              <div class="icon">
                <a >
                  <i class="fas fa-calendar"></i> 1st october, 2023
                </a>
                <a >
                  <i class="fas fa-user"></i> by admin
                </a>
              </div>
              <h3>Mental Health Matters: Breaking the Stigma</h3>
              <p>
              Explore the importance of mental well-being and how to support yourself and others in need.
              </p>
              <a  class="btn">
                learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
