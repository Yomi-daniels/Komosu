"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Links from "./links/Links";
import NavBarstyles from "./navbar.module.css";
// import { Plus_Jakarta_Sans } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { gsap } from "gsap"; // Import gsap

// const plus_Jakarta_Sans = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   weight: ["300"],
// });

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`${NavBarstyles.parentContainer} ${
        isVisible ? NavBarstyles.show : NavBarstyles.hide
      }`}
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
