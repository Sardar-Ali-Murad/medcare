"use client"
import React from "react";
import "../home/index.css";

const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", );
  };
  return (
    <div>
      <section class="footer">
        <div class="box-container">
          <div class="box">
            <h3 className="text-[20px]">quick links</h3>
            <a className="cursor-pointer">
              <i class="fas fa-chevron-right"></i> home{" "}
            </a>
            <a  className="cursor-pointer">
              
              <i class="fas fa-chevron-right"></i> services{" "}
            </a>
            <a className="cursor-pointer">
              
              <i class="fas fa-chevron-right"></i> about{" "}
            </a>
            <a className="cursor-pointer">
              <i class="fas fa-chevron-right"></i> doctors{" "}
            </a>
            <a className="cursor-pointer">
              <i class="fas fa-chevron-right"></i> book{" "}
            </a>
            <a className="cursor-pointer">
              <i class="fas fa-chevron-right"></i> review{" "}
            </a>
            <a className="cursor-pointer">
              <i class="fas fa-chevron-right"></i> blogs{" "}
            </a>
          </div>

          <div class="box">
            <h3>our services</h3>
            <a className="cursor-pointer">
              <i class="fas fa-chevron-right"></i> dental care
            </a>
            <a className="cursor-pointer">
              <i class="fas fa-chevron-right"></i> message therapy{" "}
            </a>
            <a className="cursor-pointer">
              <i class="fas fa-chevron-right"></i> cardioloty{" "}
            </a>
            <a className="cursor-pointer">
              <i class="fas fa-chevron-right"></i> diagnosis{" "}
            </a>
            <a className="cursor-pointer">
              <i class="fas fa-chevron-right"></i> ambulance service{" "}
            </a>
          </div>

          <div class="box">
            <h3>contact info</h3>
            <a className="cursor-pointer">
              <i class="fas fa-phone"></i> +123-456-7890{" "}
            </a>
            <a className="cursor-pointer">
              <i class="fas fa-phone"></i> +923186881689
            </a>
            <a className="cursor-pointer">
              <i class="fas fa-envelope"></i> email@gmail.com
            </a>
            <a className="cursor-pointer">
              <i class="fas fa-envelope"></i> sardarmuradwork@gmail.com
            </a>
            <a className="cursor-pointer">
              <i class="fas fa-map-marker-alt"></i> Lahore, Pakistan - 400104
            </a>
          </div>

          <div class="box">
            <h3>follow us</h3>
            <a className="cursor-pointer">
              <i class="fab fa-facebook-f"></i> facebook{" "}
            </a>
            <a className="cursor-pointer">
              <i class="fab fa-twitter"></i> twitter{" "}
            </a>
            <a className="cursor-pointer">
              <i class="fab fa-twitter"></i> twitter{" "}
            </a>
            <a className="cursor-pointer">
              <i class="fab fa-instagram"></i> instagram{" "}
            </a>
            <a className="cursor-pointer">
              <i class="fab fa-linkedin"></i> linkedin{" "}
            </a>
            <a className="cursor-pointer">
              <i class="fab fa-pinterest"></i> pinterest{" "}
            </a>
          </div>
        </div>

        <div class="credit" onClick={()=>openInNewTab("https://www.facebook.com/sardar.ali.muradd")} >
          created by <span className="cursor-pointer">Sardar Ali Murad</span> | all rights reserved
        </div>
      </section>
    </div>
  );
};

export default Footer;
