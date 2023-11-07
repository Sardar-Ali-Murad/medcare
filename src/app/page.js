import React from "react";
import Home from "@/components/home/Home";
import Icons from "@/components/home/Icons";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Doctors from "@/components/home/Doctors";
import Booking from "@/components/home/Booking";
import Review from "@/components/home/Review";
import Blogs from "@/components/home/Blogs";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Icons />
      <Services />
      <About />
      <Doctors />
      <Booking />
      <Review />
      <Blogs />
    </div>
  );
};

export default HomePage;
