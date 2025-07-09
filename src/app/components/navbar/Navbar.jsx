// // Navbar.jsx
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import Links from "./links/Links";

// const Navbar = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
//       setLastScrollY(currentScrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
//         isVisible ? "translate-y-0" : "-translate-y-full"
//       }`}
//     >
//       <div className="bg-white rounded-full mx-auto mt-4 max-w-7xl px-6 py-3 flex items-center justify-between shadow-md">
//         <Link href="/" className="relative w-10 h-10">
//           <Image src="/logo.png" alt="logo" fill className="object-contain" />
//         </Link>
//         <Links />
//       </div>
//     </div>
//   );
// };

// export default Navbar;
