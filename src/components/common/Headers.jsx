"use client";
import React from "react";
import "../home/index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  let [ham, setHam] = React.useState(true);
  return (
    <div className="nav">
      <div className="nav-main">
        <a class="logo" style={{ color: "white", fontSize: "20px" }}>
          {" "}
          <i class="fas fa-heartbeat"></i> medcare.{" "}
        </a>

        <nav className="big-screen-nav">
          <ul>
            <li>
              <Link className="fancy-link" href="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className="fancy-link" href="/donar">
                BECOME A DONAR
              </Link>
            </li>
            <li>
              <Link className="fancy-link" href="/patient">
                FIND A DONAR
              </Link>
            </li>
            <li>
              <Link className="fancy-link" href="/about">
                ABOUT US
              </Link>
            </li>
          </ul>
        </nav>

        <GiHamburgerMenu
          className="ham"
          onClick={() => setHam(false)}
          style={{ color: "white" }}
        />
      </div>

      <div
        className={`smal-screen-nav ${!ham ? "small-screen-nav-active" : ""}`}
      >
        <AiOutlineClose
          onClick={() => setHam(true)}
          className="small-screen-close"
          style={{ color: "white" }}
        />
        <nav>
          <ul>
            <li>
              <Link
                className="fancy-link"
                href="/"
                onClick={() => setHam(true)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                className="fancy-link"
                href="/donar"
                onClick={() => setHam(true)}
              >
                BECOME A DONAR
              </Link>
            </li>
            <li>
              <Link
                className="fancy-link"
                href="/patient"
                onClick={() => setHam(true)}
              >
                FIND A DONAR
              </Link>
            </li>
            <li>
              <Link className="fancy-link" href="/about">
                ABOUT US
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
