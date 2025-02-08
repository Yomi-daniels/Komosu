"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Links from "./links/Links";
import NavBarstyles from "./navbar.module.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { gsap } from "gsap"; // Import gsap

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300"],
});

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const navbarRef = useRef(null); // Ref to the navbar container
  const lastScrollY = useRef(0); // Track last scroll position

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Scroll down: Hide navbar
    if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
      gsap.to(navbarRef.current, {
        opacity: 0,
        y: -100, // Move navbar up
        duration: 0.3,
        ease: "power2.out",
      });
    }
    // Scroll up: Show navbar
    else if (currentScrollY < lastScrollY.current) {
      gsap.to(navbarRef.current, {
        opacity: 1,
        y: 0, // Move navbar back to original position
        duration: 0.3,
        ease: "power2.out",
      });
    }

    lastScrollY.current = currentScrollY; // Update last scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Set isMounted to true to trigger opacity transition
    setIsMounted(true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={navbarRef}
      className={`${NavBarstyles.parentContainer} ${plus_Jakarta_Sans.className} 
      ${isMounted ? NavBarstyles.visible : ""}`}
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
