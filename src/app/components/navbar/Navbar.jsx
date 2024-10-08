"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Links from "./links/Links";
import NavBarstyles from "./navbar.module.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300"],
});

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
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

    // Set isMounted to true to trigger the opacity transition
    setIsMounted(true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${NavBarstyles.parentContainer} ${plus_Jakarta_Sans.className} 
      ${isMounted ? NavBarstyles.visible : ""} 
      ${!isVisible ? NavBarstyles.hidden : ""}`}
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
