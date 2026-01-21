"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from "@/sections/sections.module.css";
import RequestAccessModal from "@/sections/RequestAccessModal";

const navLinks = [
  { title: "Home", path: "#home" },
  { title: "About", path: "#about" },
  { title: "Services", path: "#what-we-offer" },
  { title: "Contact", path: "#contact-us" },
];

const MainNavigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const timeoutRef = useRef(null);
  const pathname = usePathname();
  const [isRequestOpen, setIsRequestOpen] = useState(false);

  // Smooth scroll
  const handleSmoothScroll = (e, targetPath) => {
    if (targetPath.startsWith("#")) {
      e.preventDefault();
      const targetId = targetPath.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleServicesEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 500);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300  ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-white shadow-sm max-w-[1000px] max-sm:max-w-[380px] max-sm:px-8  h-[65px] mx-auto mt-8 max-sm:mt-4  px-6  py-4 flex items-center justify-between rounded-full ">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative w-[100px] h-[100px] max-sm:absolute left-0 max-sm:left-[20px]"
          >
            <Image
              src="/CarMosu_logo.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-16 max-w-[550px] flex-1">
            {navLinks.map((link) => (
              <div key={link.title} className="relative group flex flex-col items-center">
                <Link
                  href={link.path}
                  onClick={(e) => handleSmoothScroll(e, link.path)}
                  className={`hover:text-darkBlueText transition relative z-10 ${
                    pathname === link.path ? "font-bold" : ""
                  }`}
                >
                  {link.title}
                </Link>
                <span
                  className={`absolute -bottom-5 left-1/2 transform -translate-x-1/2 h-[6px] bg-btn rounded-tl-md rounded-tr-md transition-transform duration-300 origin-center w-4/5 scale-x-0 ${
                    pathname === link.path
                      ? "scale-x-100 opacity-100"
                      : "opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }`}
                />
              </div>
            ))}
          </nav>

          {/* Desktop Request Access Button */}
          <div className="hidden lg:inline-block relative group">
            <button
              onClick={() => {
                setIsRequestOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="relative z-10 flex items-center justify-center text-white w-[180px] py-2 rounded-full transition-all duration-300 transform
              bg-blue-600 hover:bg-blue-700 hover:scale-105"
            >
              Request Access
            </button>
            <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-32 h-6 bg-blue-400 opacity-40 blur-md rounded-full z-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden md:absolute max-sm:absolute md:right-[10%] max-sm:right-[10%]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Image
              src={isMobileMenuOpen ? "/closebtn.svg" : "/openbtn.svg"}
              alt="menu toggle"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <>
            <div className="fixed z-30 inset-0" onClick={() => setIsMobileMenuOpen(false)} />
            <div
              className={`lg:hidden fixed top-full left-0 w-full h-[100vh] mt-4 bg-white shadow-lg z-40 px-6 py-6 transform transition-transform duration-500 ease-in-out ${
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex flex-col items-start">
                <ul className="flex flex-col gap-10 mt-0 w-full relative">
                  {navLinks.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.path}
                        onClick={(e) => handleSmoothScroll(e, link.path)}
                        className={`block text-gray-800 font-medium hover:text-blue-600 ${
                          pathname === link.path ? "text-blue-600" : ""
                        }`}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* Mobile Request Access */}
                <div className="mt-8">
                  <button
                    onClick={() => {
                      setIsRequestOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-sm font-medium py-2 px-6 rounded-full text-center block w-fit mx-auto bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    Request Access
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      {/* Modal rendered at root via portal */}
      <RequestAccessModal
        isOpen={isRequestOpen}
        onClose={() => setIsRequestOpen(false)}
      />
    </>
  );
};

export default MainNavigation;
