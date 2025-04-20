"use client";
import leadStyles from "../leadgeneration.module.css";
import Image from "next/image";
import LandingPageButtons from "@/app/webdesign/components/LandingPageButtons";
import { Montserrat } from "next/font/google";
import { ScrollParallax } from "react-just-parallax";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import Link from "next/link";
import styles from "@/sections/sections.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});
const LeadgenLandingpage = () => {
  const webdesignTextContainerRef = useRef(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    if (webdesignTextContainerRef.current)
      gsap.fromTo(
        webdesignTextContainerRef.current,
        {
          x: -300,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
    if (parallaxRef.current)
      gsap.fromTo(
        parallaxRef.current,
        { y: 300, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "power3.out" }
      );
  }, []);

  // Renaming `words` to `message`
  const message = `Drive more leads and grow your dealership with our expert solutions`;

  return (
    <section
      className={`${leadStyles.LeadingGenSection}${" dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] overflow-x-hidden flex flex-col mt-[3rem] max-sm:mt-[1rem]"}`}
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="w-full max-w-[979px] min-h-[338px] text-center flex flex-col justify-center items-center gap-6 z-10 relative mb-8 px-4">
        <h1 className="w-full">
          <TextGenerateEffect
            words={message}
            messageClass="font-bold leading-[120%] tracking-[-4%]
        text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px]
        max-w-full mx-auto"
          />
        </h1>

        <p className="max-w-[733px] font-medium text-darkBlueText text-[14px] sm:text-[16px] md:text-[18px] text-center md:w-[40ch]">
          Your website is the digital storefront of your dealership. A sleek,
          modern, and user-friendly design isn’t just about aesthetics—it’s
          about building trust, engaging customers, and driving sales.
        </p>

        <Link href="/request-demo">
          <button className={styles.headerGetStarted}>Get Started</button>
        </Link>
      </div>
    </section>
  );
};

//   const leadGenTextContainerRef = useRef(null);
//   const leadGenaImageContainerRef = useRef(null);

//   useEffect(() => {
//     if (leadGenTextContainerRef.current)
//       gsap.fromTo(
//         leadGenTextContainerRef.current,
//         { x: -300, opacity: 0 },
//         { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
//       );
//     if (leadGenaImageContainerRef.current)
//       gsap.fromTo(
//         leadGenaImageContainerRef.current,
//         { y: 300, opacity: 0 },
//         { y: 0, opacity: 1, duration: 2, ease: "power3.out" }
//       );
//   }, []);
//   const leadGenHeaderText = `  Drive more leads and transform your dealership growth with our
//             expert solutions`;
//   return (
//     <section className={leadStyles.LeadingGenSection}>
//       <div className={leadStyles.LeadGenContainer}>
//         {/* <div className={leadStyles.vectortopImg}>
//         <Image src="/yellow vector.png" fill/>
//       </div> */}
//         <div
//           className={`${leadStyles.leadGenTextContainer} ${montserrat.className}`}
//           ref={leadGenTextContainerRef}
//         >
//           <div className={leadStyles.leadtextheader}>
//             <div className={leadStyles.textheaderimg}>
//               <Image src="/Vector (5).png" fill />
//             </div>
//             <h4>LEAD GENERATION</h4>
//           </div>
//           <h1>
//             <TextGenerateEffect
//               words={leadGenHeaderText}
//               messageClass="text-[32px] max-sm:text-[32px]"
//             />
//           </h1>
//           <LandingPageButtons />
//         </div>
//         <div
//           className={leadStyles.leadGenaImageContainer}
//           ref={leadGenaImageContainerRef}
//         >
//           <ScrollParallax isAbsolutelyPositioned>
//             <div className={leadStyles.leadimgstat}>
//               <Image src="/Stat (4).png" fill objectFit="contain" />
//             </div>
//           </ScrollParallax>
//           <div className={leadStyles.leadmanImg}>
//             <Image src="/leadgen man.png" fill objectFit="contain" />
//           </div>
//           <ScrollParallax isAbsolutelyPositioned>
//             <div className={leadStyles.leadimgstat2}>
//               <Image src="/Stat (3).png" fill objectFit="contain" />
//             </div>
//           </ScrollParallax>
//         </div>
//       </div>
//     </section>
//   );
// };

export default LeadgenLandingpage;
