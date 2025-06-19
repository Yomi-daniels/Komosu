"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutstyles from "../aboutSection.module.css";

const WhoareweSection = () => {
  const whoAreWeRef = useRef(null);
  const whoAreWeHeaderP = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      image1Ref.current,
      { x: -100, scale: 0.95, opacity: 0 },
      {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: image1Ref.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      image2Ref.current,
      { x: 100, scale: 0.95, opacity: 0 },
      {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 1.2,
        delay: 0.3, // staggered effect
        ease: "power3.out",
        scrollTrigger: {
          trigger: image2Ref.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  const words = `Digital partners for the modern dealership.`;

  return (
    <section className={aboutstyles.Whoarewesection}>
      <div className={aboutstyles.whoareweHeader}>
        <h4 ref={whoAreWeRef}>Who are we?</h4>
        <h2>
          <TextGenerateEffect words={words} />
        </h2>
        <p ref={whoAreWeHeaderP}>
          At Komosu, we go beyond basic websites and generic solutions. We
          build dealership platforms designed to bring in better leads,
          increase retention, and give your team the digital edge it
          needs. We work closely with each store — franchise, luxury, or
          EV — to understand how you sell, what your goals are, and how to
          turn your site into a sales engine that runs 24/7. No fluff. Just
          real strategies that move metal.
        </p>
      </div>

      <div className={aboutstyles.whoareweImageContainer}>
        <div ref={image1Ref} className={aboutstyles.whoareWeImg}>
          <Image
            src="/Gemini_Generated_Image_4869d14869d14869.jpg"
            alt="who are we image"
            fill
            objectFit="cover"
          />
        </div>
        <div ref={image2Ref} className={aboutstyles.whoareWeImg2}>
          <Image
            src="/Gemini_Generated_Image_ootefrootefroote.jpg"
            alt="who are we image"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoareweSection;
