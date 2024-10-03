// Import necessary packages and styles
import { useEffect, useRef } from "react";
import { gsap } from "gsap"; // Import GSAP for animations
import { Shadows_Into_Light } from "next/font/google";
import aboutstyles from "../aboutSection.module.css";

// Define the font from Google Fonts
const shadows = Shadows_Into_Light({
  subsets: ['latin'],
  weight: ['400']
});

const AboutUsLandingPage = () => {
  // Create a ref to the header to animate it
  const headerRef = useRef(null);

  useEffect(() => {
    // GSAP animation
    gsap.fromTo(
      headerRef.current,
      { x: -100, opacity: 0 }, // Start position (left and invisible)
      { x: 0, opacity: 1, duration: 1 } // End position (normal and visible)
    );
  }, []);

  return (
    <section className={aboutstyles.aboutUsLandingSection}>
      <div className={aboutstyles.aboutPageHeader}
      ref={headerRef}>
        <h2 > {/* Attach the ref here */}
          Get to know us{" "}
          <span className={`${aboutstyles.aboutUsSpan} ${shadows.className}`}>
            Better
          </span>
        </h2>
        <p>We give your business the push it needs</p>
      </div>
    </section>
  );
};

export default AboutUsLandingPage;
