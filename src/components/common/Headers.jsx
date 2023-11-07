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
        <Link
          href="/"
          class="logo"
          style={{ color: "white", fontSize: "20px" }}
        >
          <i class="fas fa-heartbeat"></i> medcare.
        </Link>

        <nav className="big-screen-nav">
          <ul>
            <li>
              <Link className="fancy-link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="fancy-link" href="/donar">
                Become a donar
              </Link>
            </li>
            <li>
              <Link className="fancy-link" href="/patient">
                Find a donar
              </Link>
            </li>
            <li>
              <Link className="fancy-link" href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="fancy-link" href="/admin">
                Admin
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
                Home
              </Link>
            </li>
            <li>
              <Link
                className="fancy-link"
                href="/donar"
                onClick={() => setHam(true)}
              >
                Become a donar
              </Link>
            </li>
            <li>
              <Link
                className="fancy-link"
                href="/patient"
                onClick={() => setHam(true)}
              >
                Find a donar
              </Link>
            </li>
            <li>
              <Link
                className="fancy-link"
                href="/about"
                onClick={() => setHam(true)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="fancy-link"
                href="/admin"
                onClick={() => setHam(true)}
              >
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
