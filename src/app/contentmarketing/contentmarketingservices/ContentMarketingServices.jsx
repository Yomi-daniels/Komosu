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
            <h3>All-in-One Solution </h3>
            <p>
              No need for multiple tools—manage engagement, leads, and insights
              in one place.
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
            <Image
              src="/nextgen landingpage img.png"
              fill
              objectFit="contain"
            />
          </div>
          <div
            className={contentStyles.contentServiceText}
            ref={contentServiceText2Ref}
          >
            <h3>Dealership-Owned Digital Assets</h3>
            <p>Take control of your audience and brand authority.</p>
            <GetStarted />
          </div>
        </div>
        <div className={contentStyles.contentservicecontent}>
          <div
            className={contentStyles.contentServiceText}
            ref={contentServiceText3Ref}
          >
            <h3> Long-Term Success</h3>
            <p> Build a sustainable pipeline of leads and conversions.</p>
            <GetStarted />
          </div>

          <Image
            ref={contentservicesImg3Ref}
            src="/LongTermSuccessImg.jpg"
            width={600}
            height={600}
            objectFit="cover"
            className=" rounded-[20px]"
          />
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
            <h3>Data-Driven Growth</h3>
            <p>Leverage real-time insights to optimize marketing & sales.</p>
            <GetStarted />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentMarketingServices;
