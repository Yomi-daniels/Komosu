import aboutstyles from "../aboutSection.module.css";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import gsap from "gsap";

const WhoareweSection = () => {
  const whoAreWeRef = useRef(null);
  const whoAreWeHeaderP = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const imageContainerRef = useRef(null); // Reference for the image container

  // Function to handle animations
  const animateImages = () => {
    gsap.fromTo(
      image1Ref.current,
      { x: -300, opacity: 0 }, //start from left
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: image1Ref.current,
          start: "top 80%", //start animation when top of the element is 80% from the top of the viewport
          once: true, //only animate once
        },
      }
    );

    gsap.fromTo(
      image2Ref.current,
      { x: 300, opacity: 0 }, //start from right
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: image2Ref.current,
          start: "top 80%", //start animation when top of the element is 80% from the top of the viewport
          once: true, //only animate once
        },
      }
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateImages(); // Trigger animation when the image container is in view
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold for when to trigger
    );

    const currentRef = imageContainerRef.current; // Targeting the image container
    if (currentRef) {
      observer.observe(currentRef); // Start observing the image container
    }

    // Cleanup function to unobserve on unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const words = `Komosu Network is committed to revolutionizing the automotive industry by providing innovative solutions.`;

  return (
    <section className={aboutstyles.Whoarewesection}>
      <div className={aboutstyles.whoareweHeader}>
        <h4 ref={whoAreWeRef}>Who are we?</h4>
        <h2>
          <TextGenerateEffect words={words} />
        </h2>
        <p ref={whoAreWeHeaderP}>
          Our dedicated team of experts focuses on building strong relationships
          with clients, ensuring that they have more time to concentrate on what
          truly matters to them. We value hearing about their experiences and
          strive to support their journey every step of the way.
        </p>
      </div>
      <div
        ref={imageContainerRef} // Set the ref for the image container
        className={aboutstyles.whoareweImageContainer}
      >
        <div ref={image1Ref} className={aboutstyles.whoareWeImg}>
          <Image
            src="/Rectangle 14 (1).png"
            alt="who are we image"
            fill
            objectFit="cover"
          />
        </div>
        <div ref={image2Ref} className={aboutstyles.whoareWeImg2}>
          <Image
            src="/Rectangle 16 (1).png"
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
