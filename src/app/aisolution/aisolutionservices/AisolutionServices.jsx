"use client";
import Aistyles from "../Aisolution.module.css";
import GetStarted from "@/app/webdesign/components/GetStarted";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef } from "react";
const AisolutionServices = () => {
  const AisolutionServicesText1Ref = useRef(null);
  const AisolutionServicesText2Ref = useRef(null);
  const AisolutionServicesText3Ref = useRef(null);
  const AisolutionServicesImage1Ref = useRef(null);
  const AisolutionServicesImage2Ref = useRef(null);
  const AisolutionServicesImage3Ref = useRef(null);

  useEffect(() => {
    //Animate AisolutionServicesText1 from the left
    gsap.fromTo(
      AisolutionServicesText1Ref.current,
      { x: -300, opacity: 0 }, //start from left
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: AisolutionServicesText1Ref.current,
          start: "top 80%", //start animation when top of the element is 80% from the top of the viewport
          once: true, //only animate once
        },
      }
    );
    //Animate AisolutionServicesText2 from the right
    gsap.fromTo(
      AisolutionServicesText2Ref.current,
      { x: 300, opacity: 0 }, //start from right
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: AisolutionServicesText2Ref.current,
          start: "top 80%", //start animation when top of the element is 80% from the top of the viewport
          once: true, //only animate once
        },
      }
    );

    gsap.fromTo(
      AisolutionServicesText3Ref.current,
      { x: -300, opacity: 0 }, //start from left
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: AisolutionServicesText3Ref.current,
          start: "top 80%", //start animation when top of the element is 80% from the top of the viewport
          once: true, //only animate once
        },
      }
    );
    //Animate AisolutionServicesImage1Ref from the right
    gsap.fromTo(
      AisolutionServicesImage1Ref.current,
      { x: 300, opacity: 0 }, //start from right
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: AisolutionServicesImage1Ref.current,
          start: "top 80%", //start animation when top of the element is 80% from the top of the viewport
          once: true, //only animate once
        },
      }
    );
    //Animate  AisolutionServicesImage2Ref from the left
    gsap.fromTo(
      AisolutionServicesImage2Ref.current,
      { x: -300, opacity: 0 }, //start from left
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: AisolutionServicesImage2Ref.current,
          start: "top 80%", //start animation when top of the element is 80% from the top of the viewport
          once: true, //only animate once
        },
      }
    );
    //Animate AisolutionServicesImage3Ref from the right
    gsap.fromTo(
      AisolutionServicesImage3Ref.current,
      { x: 300, opacity: 0 }, //start from right
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: AisolutionServicesImage3Ref.current,
          start: "top 80%", //start animation when top of the element is 80% from the top of the viewport
          once: true, //only animate once
        },
      }
    );
  }, []);
  return (
    <section className={Aistyles.AisolutionServicesSection}>
      <div className={Aistyles.AisolutionServicesContainer}>
        <div className={Aistyles.AisolutionServicesContent}>
          <div
            className={Aistyles.AisolutionServicesText}
            ref={AisolutionServicesText1Ref}
          >
            <h3>AI-Powered Appointment Scheduling</h3>
            <p>
              AI-Powered Appointment SchOur advanced AI chatbots work tirelessly
              to manage your customer interactions, schedule appointments, and
              streamline the sales process. With 24/7 access, our chatbots
              ensure no lead is missed, improving efficiency and customer
              satisfactioneduling
            </p>
            <GetStarted />
          </div>
          <div
            className={Aistyles.AisolutionServicesImage}
            ref={AisolutionServicesImage1Ref}
          >
            <div className={Aistyles.aiservicesImg}>
              <Image
                alt="image"
                src="/Frame 1618868477.png"
                fill
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className={Aistyles.AisolutionServicesContent2}>
          <div
            className={Aistyles.AisolutionServicesImage}
            ref={AisolutionServicesImage2Ref}
          >
            <div className={Aistyles.aiservicesImg}>
              <Image
                alt="image"
                src="/Frame 1618868493.png"
                fill
                objectFit="contain"
              />
            </div>
          </div>
          <div
            className={Aistyles.AisolutionServicesText}
            ref={AisolutionServicesText2Ref}
          >
            <h3>Seamless Transactions and Digital Transformation</h3>
            <p>
              Our AI can also take payments, allowing for a seamless transaction
              flow when taking deposits. This enhances your dealership’s digital
              transformation by facilitating digital contracting and sending
              necessary emails for digital paperwork. The bot can also take
              messages on the customer’s behalf, enabling them to update the
              dealership when they have filled out necessary paperwork online or
              have any other queries.
            </p>
            <GetStarted />
          </div>
        </div>
        <div className={Aistyles.AisolutionServicesContent}>
          <div
            className={Aistyles.AisolutionServicesText}
            ref={AisolutionServicesText3Ref}
          >
            <h3>AI-Driven Copywriting</h3>
            <p>
              Our chatbots are equipped with AI-driven copywriting capabilities,
              primed to increase conversions. They can upsell additional
              services and refer customers to different vehicles, maximizing
              each interaction's potential to drive sales.
            </p>
            <GetStarted />
          </div>
          <div
            className={Aistyles.AisolutionServicesImage}
            ref={AisolutionServicesImage3Ref}
          >
            <div className={Aistyles.aiservicesImg}>
              <Image
                alt="image"
                src="/Frame 1618868477.png"
                fill
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AisolutionServices;
