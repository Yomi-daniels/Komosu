"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from "@/sections/sections.module.css";

const navLinks = [
  { title: "About Us", path: "/about" },
  {
    title: "Services",
    path: "",
    subLinks: [
      { title: "Web Design", path: "/webdesign" },
      { title: "AI Solution", path: "/aisolution" },
      { title: "Lead Generation", path: "/leadgeneration" },
    ],
  },
  { title: "Dealer Hub", path: "/dealership_hub" },
  { title: "Blog", path: "/blog" },
  { title: "Contact Us", path: "/contact-us" },
  { title: "Get Demo", path: "/request-demo" },
];

const MainNavigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const timeoutRef = useRef(null);
  const pathname = usePathname();

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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white shadow-sm max-w-[1200px] max-sm:max-w-[380px] max-sm:px-8  h-[65px] mx-auto mt-8 max-sm:mt-4  px-6  py-4 flex items-center justify-between rounded-full px6">
        {/* Logo */}
        <Link
  href="/"
  onClick={() => setIsMobileMenuOpen(false)}
  className="relative w-[100px] h-[100px] max-sm:absolute left-0"
>

          <Image src="/logo.png" alt="logo" fill className="object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center justify-between max-w-[550px] flex-1">
          {navLinks
            .filter((link) => link.title !== "Get Demo")
            .map((link) => {
              const isActive = pathname === link.path && !link.subLinks;
              return (
                <div key={link.title} className="relative group flex flex-col items-center">
                  {link.subLinks ? (
                    <div
                      className="relative"
                      onMouseEnter={handleServicesEnter}
                      onMouseLeave={handleServicesLeave}
                    >
                      <div className="flex items-center gap-1 cursor-pointer">
                        <Link href={link.path}>{link.title}</Link>
                        <Image src="/dropdown.svg" alt="dropdown" width={16} height={16} />
                      </div>

                      {/* Dropdown */}
                      <div
                        className={`absolute left-0 top-full mt-2 w-72 bg-white shadow-lg rounded-xl z-50 transition-all duration-300 overflow-hidden ${
                          isServicesOpen ? "opacity-100 max-h-[1000px] visible" : "opacity-0 max-h-0 invisible"
                        }`}
                      >
                        <ul className="p-2 flex flex-col gap-1">
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.title}>
                              <div className="relative">
                                <Link
                                  href={subLink.path}
                                  className={`block w-full px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50  ${
                                    pathname === subLink.path ? "font-semibold font-bold" : ""
                                  }`}
                                >
                                  {subLink.title}
                                </Link>
                                {pathname === subLink.path && (
                                  <>
                                    <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-[30px] bg-blue-600 rounded-r"></span>
                                    <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-[30px] bg-blue-600 rounded-l"></span>
                                  </>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="relative group flex flex-col items-center">
                      <Link
                        href={link.path}
                        className={`hover:text-darkBlueText transition relative z-10 ${
                          isActive ? "font-bold" : ""
                        }`}
                      >
                        {link.title}
                      </Link>
                      <span
                        className={`absolute -bottom-5 left-1/2 transform -translate-x-1/2 h-[6px] bg-btn rounded-tl-md rounded-tr-md transition-transform duration-300 origin-center w-full scale-x-0 ${
                          isActive
                            ? "scale-x-100 opacity-100"
                            : "opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                        }`}
                      />
                    </div>
                  )}
                </div>
              );
            })}
        </nav>

        {/* Right: Get Demo & Toggle Button */}
        <div className="flex items-center gap-4">
          <div className="hidden md:inline-block">
            <Link
              href="/request-demo"
              className={`${
                pathname === "/request-demo" ? "bg-blue-800" : "bg-blue-600"
              } flex items-center justify-center text-white w-[180px] py-2 rounded-full ${styles.headerGetStarted}`}
            >
              Get Demo
            </Link>
          </div>
          <button className="md:hidden  md:absolute max-sm:absolute md:right-0 max-sm:right-[10%] " onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Image
              src={isMobileMenuOpen ? "/closebtn.svg" : "/openbtn.svg"}
              alt="menu toggle"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
     {isMobileMenuOpen && (
  <>
    {/* Overlay */}
    <div
      className="fixed bg-opacity-40 z-30"
      onClick={() => setIsMobileMenuOpen(false)}
    />

    {/* Mobile Menu */}
  <div className={`md:hidden fixed top-full left-0 w-full h-[100vh] mt-4 bg-white shadow-lg z-40 px-6 py-6 transform transition-transform duration-500 ease-in-out ${
  isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
}`}>

      <ul className="flex flex-col gap-12 mt-0">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          const hasSubLinks = link.subLinks?.length > 0;

          return (
            <li key={link.title}>
              {hasSubLinks ? (
                <>
                  <button
                    onClick={() =>
                      setIsMobileServicesOpen((prev) => !prev)
                    }
                    className="flex justify-between items-center w-full text-left font-medium text-gray-800"
                  >
                    {link.title}
                    <Image
                      src="/dropdown.svg"
                      alt="toggle"
                      width={16}
                      height={16}
                      className={`transition-transform duration-300 ${
                        isMobileServicesOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  {isMobileServicesOpen && (
                    <ul className="mt-4 bg-blue-50 ml-4 space-y-2 flex p-6 rounded-lg flex-col gap-6">
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.title}>
                         <Link
  href={subLink.path}
  onClick={() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false); // Optional: close submenu after click
  }}
  className={`block text-gray-700 px-3 py-1 rounded mt-4 transition-colors duration-200 ${
    pathname === subLink.path
      ? "bg-blue-600 text-white font-semibold"
      : "hover:bg-blue-100"
  }`}
>
  {subLink.title}
</Link>

                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-gray-800 font-medium hover:text-blue-600 ${
                    isActive ? "text-blue-600" : ""
                  }`}
                >
                  {link.title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  </>
)}

    </header>
  );
};

export default MainNavigation;
