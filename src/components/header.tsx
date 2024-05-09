"use client";

import { useNavbar } from "@/context/navbarContext";
import Link from "next/link";
import React from "react";
import AnimatedLink from "./animated-link";

const Header = () => {
  const { navbar, toggleNavbar } = useNavbar();

  return (
    <div className="relative text-xl w-full h-[40px] flex justify-between items-center p-10 absolute top-0 z-40 ">
      <div className="hamburger-icon" id="icon" onClick={toggleNavbar}>
        <div className={`icon-1 ${navbar ? "a" : ""}`} id="a"></div>
        <div className={`icon-2 ${navbar ? "c" : ""}`} id="b"></div>
        <div className={`icon-3 ${navbar ? "b" : ""}`} id="c"></div>
        <div className="clear"></div>
      </div>
      <Link href="/">Alan Kasis</Link>
      <Link href="contact">Contact</Link>
      {navbar && (
        <ul className="absolute top-0 translate-y-1/2 z-20">
          <AnimatedLink content="Home" href="/" />
          <AnimatedLink content="About me" href="/about" />
          <AnimatedLink content="Projects" href="/projects" />
          <AnimatedLink content="Contact" href="/contact" />
        </ul>
      )}
    </div>
  );
};

export default Header;
