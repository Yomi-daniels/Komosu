"use client";
import Link from "next/link";
import Links from "./links/Links";
import NavBarstyles from "./navbar.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";
import { Koulen } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";

const koulen = Koulen({
  subsets: ["latin"],
  weight: ["400"],
});

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300"],
});

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${NavBarstyles.parentContainer} ${plus_Jakarta_Sans.className} ${!isVisible ? NavBarstyles.hidden : ""}`}
    >
      <div className={NavBarstyles.container}>
        <Link href="/" className={NavBarstyles.logo}>
          <div className={NavBarstyles.logoContainer}>
            <Image src="/logo.png" alt="logo" fill />
          </div>
        </Link>
        <div className={NavBarstyles.navbar}>
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
