"use client"
import React from "react";
import "./index.css";
import { TbCheckupList } from "react-icons/tb";
import { FaAmbulance } from "react-icons/fa";
import { FaDochub } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { BiBed } from "react-icons/bi";
import { FaHeartBroken } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <section class="services" id="services">
        <h1 class="heading">
          {" "}
          our <span>services</span>{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <i class="fas fa-notes-medical"></i>
            <TbCheckupList className="icon" />
            <h3>free checkups</h3>
            <p>
            Your health matters, and so does your wallet. Get your checkup for free.
            </p>
            <a  class="btn">
              
              learn more
            </a>
          </div>

          <div class="box">
            <i class="fas fa-ambulance"></i>
            <FaAmbulance className="icon" />
            <h3>24/7 ambulance</h3>
            <p>
            Emergency care at your doorstep, any time, day or night
            </p>
            <a class="btn">
              learn more
            </a>
          </div>

          <div class="box">
            <i class="fas fa-user-md"></i>
            <FaDochub className="icon" />
            <h3>expert doctors</h3>
            <p>
            Skilled professionals dedicated to your well-being
            </p>
            <a  class="btn">
              learn more
            </a>
          </div>

          <div class="box">
            <i class="fas fa-pills"></i>
            <GiMedicines className="icon" />
            <h3>medicines</h3>
            <p>
            Access to the medications you need, when you need them.
            </p>
            <a  class="btn">
              {" "}
              learn more
            </a>
          </div>

          <div class="box">
            <i class="fas fa-procedures"></i>
            <BiBed className="icon" />
            <h3>bed facility</h3>
            <p>
            Comfortable and safe facilities for your recovery.
            </p>
            <a  class="btn">
              learn more
            </a>
          </div>

          <div class="box">
            <i class="fas fa-heartbeat"></i>
            <FaHeartBroken className="icon" />
            <h3>total care</h3>
            <p>
            Comprehensive healthcare solutions, because you deserve the best.
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

export default Services;
