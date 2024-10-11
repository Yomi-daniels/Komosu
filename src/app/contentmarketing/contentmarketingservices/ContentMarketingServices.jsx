"use client";
import contentStyles from "../contentmarketing.module.css";
import Image from "next/image";
import GetStarted from "@/app/webdesign/components/GetStarted";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

const ContentMarketingServices = () => {
  const contentServiceText1Ref = useRef(null);
  const contentServiceText2Ref = useRef(null);
  const contentServiceText3Ref = useRef(null);
  const contentservicesImg1Ref = useRef(null);
  const contentservicesImg2Ref = useRef(null);
  const contentservicesImg3Ref = useRef(null);

  useEffect(() => {
    //Animate AisolutionServicesText1 from the left
    gsap.fromTo(
      contentServiceText1Ref.current,
      { x: -300, opacity: 0 }, //start from left
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentServiceText1Ref.current,
          start: "top 80%", //start animation when top of the element is 80% from the top of the viewport
          once: true, //only animate once
        },
      }
    );
    //Animate AisolutionServicesText2 from the right
    gsap.fromTo(
      contentServiceText2Ref.current,
      { x: 300, opacity: 0 }, //start from right
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentServiceText2Ref.current,
          start: "top 80%", //start animation when top of the element is 80% from the top of the viewport
          once: true, //only animate once
        },
      }
    );

    gsap.fromTo(
      contentServiceText3Ref.current,
      { x: -300, opacity: 0 }, //start from left
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentServiceText3Ref.current,
          start: "top 80%", //start animation when top of the element is 80% from the top of the viewport
          once: true, //only animate once
        },
      }
    );
    //Animate AisolutionServicesImage1Ref from the right
    gsap.fromTo(
      contentservicesImg1Ref.current,
      { x: 300, opacity: 0 }, //start from right
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentservicesImg1Ref.current,
          start: "top 80%", //start animation when top of the element is 80% from the top of the viewport
          once: true, //only animate once
        },
      }
    );
    //Animate  AisolutionServicesImage2Ref from the left
    gsap.fromTo(
      contentservicesImg2Ref.current,
      { x: -300, opacity: 0 }, //start from left
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentservicesImg2Ref.current,
          start: "top 80%", //start animation when top of the element is 80% from the top of the viewport
          once: true, //only animate once
        },
      }
    );
    //Animate AisolutionServicesImage3Ref from the right
    gsap.fromTo(
      contentservicesImg3Ref.current,
      { x: 300, opacity: 0 }, //start from right
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentservicesImg3Ref.current,
          start: "top 80%", //start animation when top of the element is 80% from the top of the viewport
          once: true, //only animate once
        },
      }
    );
  }, []);
  return (
    <section className={contentStyles.contentservicessection}>
      <div className={contentStyles.contentservicescontainer}>
        <div className={contentStyles.contentservicecontent}>
          <div
            className={contentStyles.contentServiceText}
            ref={contentServiceText1Ref}
          >
            <h3>Virtual Content Creator </h3>
            <p>
              At Komosu Network, we empower dealerships with a cutting-edge
              virtual content creator who works tirelessly on your dealership's
              behalf. This innovative tool transforms your content into
              compelling narratives that enhance the inherent appeal of each
              vehicle, making it stand out in the competitive market.
            </p>
            <GetStarted />
          </div>
          <div
            className={contentStyles.contentservicesImg}
            ref={contentservicesImg1Ref}
          >
            <Image src="/Group 6324.png" fill objectFit="contain" />
          </div>
        </div>
        <div
          className={`${contentStyles.contentservicecontent} ${contentStyles.contentservicecontent2}`}
        >
          <div
            className={`${contentStyles.contentservicesImg} ${contentStyles.contentservicesImg2}`}
            ref={contentservicesImg2Ref}
          >
            <Image src="/social campaign image.png" fill objectFit="contain" />
          </div>
          <div
            className={contentStyles.contentServiceText}
            ref={contentServiceText2Ref}
          >
            <h3>Social Media Campaigns</h3>
            <p>
              Coupled with targeted social media campaigns and strategic
              advertisements, our solutions are tailored to elevate your
              dealership's online presence and drive customer engagement.
            </p>
            <GetStarted />
          </div>
        </div>
        <div className={contentStyles.contentservicecontent}>
          <div
            className={contentStyles.contentServiceText}
            ref={contentServiceText3Ref}
          >
            <h3>Next-Generation Landing Pages</h3>
            <p>
              Our expertise extends to creating next-generation landing pages
              meticulously designed to maximize sales and conversions. We ensure
              improved performance and increased conversions by transforming
              your advertisements from low to high content ratings.
            </p>
            <GetStarted />
          </div>
          <div
            className={contentStyles.contentservicesImg}
            ref={contentservicesImg3Ref}
          >
            <Image
              src="/nextgen landingpage img.png"
              fill
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentMarketingServices;
