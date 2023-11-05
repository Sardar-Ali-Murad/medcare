"use client"
import React from "react";
import "./index.css";
import { GiDoctorFace } from "react-icons/gi";
import { BsPeople } from "react-icons/bs";
import { IoBedSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";

const Icons = () => {
  return (
    <div>
      <section class="icons-container">
        <div class="icons">
          <GiDoctorFace className="icon" />
          <h3>140+</h3>
          <p>doctors at work</p>
        </div>

        <div class="icons">
          <BsPeople className="icon" />
          <h3>1040+</h3>
          <p>satisfied patients</p>
        </div>

        <div class="icons">
          <IoBedSharp className="icon" />
          <h3>500+</h3>
          <p>bed facility</p>
        </div>

        <div class="icons">
          <FaBuilding className="icon" />
          <h3>80+</h3>
          <p>available hospitals</p>
        </div>
      </section>
    </div>
  );
};

export default Icons;
