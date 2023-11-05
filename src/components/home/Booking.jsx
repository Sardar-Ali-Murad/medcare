"use client"
import React from "react";
import "./index.css";
import Img1 from "../../assets//book-img.svg";
import Image from "next/image";

const Booking = () => {
  return (
    <section class="book" id="book">
      <h1 class="heading">
        {" "}
        <span>book</span> now{" "}
      </h1>

      <div class="row">
        <div class="image">
          <Image src={Img1} alt="" height={100} width={100} />
        </div>

        <form action="">
          <h3>book appointment</h3>
          <input type="text" placeholder="your name" class="box" />
          <input type="number" placeholder="your number" class="box" />
          <input type="email" placeholder="your email" class="box" />
          <input type="date" class="box" />
          <input type="submit" value="book now" class="btn" />
        </form>
      </div>
    </section>
  );
};

export default Booking;
