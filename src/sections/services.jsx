// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import Link from "next/link";
// import styles from "./sections.module.css";
// import { Shadows_Into_Light } from "next/font/google";
// import { cn } from "@/lib/utils";

// // Register GSAP ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

// const shadows = Shadows_Into_Light({
//   subsets: ["latin"],
//   weight: ["400"],
// });

// const Services = () => {
//   const sectionRef = useRef(null); // Reference to the section

//   useEffect(() => {
//     // Create the GSAP animation that triggers when the section enters the viewport
//     gsap.fromTo(
//       sectionRef.current,
//       {
//         scale: 0.6, // Start with a smaller scale
//         opacity: 0, // Start with lower opacity
//       },
//       {
//         scale: 1, // End with normal scale
//         opacity: 1, // End with full opacity
//         duration: 1.2, // Duration of the animation
//         ease: "power3.out", // Easing function for smooth animation
//         scrollTrigger: {
//           trigger: sectionRef.current, // Trigger animation when section is in view
//           start: "top 108%", // Start animation when the top of the section hits 80% of the viewport
//           toggleActions: "play none none none", // Only play the animation once when entering
//         },
//       }
//     );
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className={cn(styles.serviceSection, "top-2 pb-48")}
//     >
//       <div className={styles.ServicesTextContainer}>
//         <div className={styles.servicesSubTextContainer}>
//           <div className={styles.blueBorder}></div>
//           <p className={styles.servicesSubText}>WHY KOMOSU?</p>
//         </div>
//         <div className={styles.servicesHeader}>
//           <h2>
//             Empowering your{" "}
//             <span className={`${styles.servicesSpan} ${shadows.className}`}>
//               Business
//             </span>{" "}
//             to thrive
//           </h2>
//         </div>
//         <p className={cn(styles.subContent, "max-w-3xl mx-auto text-pretty")}>
//           Elevate your dealership’s digital presence with a premium
//           DealerHub—your built in social media tool to capture every sales
//           opportunity and stand apart from the competition.
//         </p>
//       </div>

//       <div
//         className={cn(
//           styles.servicesLastContentText,
//           "hover:scale-110 transition-all duration-150"
//         )}
//       >
//         <Link href="/dealership_hub">
//           <p>See more</p>
//         </Link>

//         <div className={styles.buttonImage}>
//           <Image src="/View plan button (4).png" alt="vector" fill />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
// //
