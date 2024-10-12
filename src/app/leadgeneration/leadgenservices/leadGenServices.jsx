"use client";
import leadStyles from "../leadgeneration.module.css";
import Image from "next/image";
import GetStarted from "@/app/webdesign/components/GetStarted";
import Testimonials from "@/sections/testimonials";
import { ScrollParallax } from "react-just-parallax";
import FAQ from "@/sections/faq";
import Link from "next/link";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
const LeadGenServices = () => {
  const leadGenServicesContentText1Ref = useRef(null);
  const leadGenServicesContentText2Ref = useRef(null);
  const leadGenServicesContentImag1eRef = useRef(null);
  const leadGenServicesContentImag2eRef = useRef(null);
  const servicesContactSectionRef = useRef(null);

  useEffect(() => {
    //Animate leadGenServicesContentText1Ref from the left
    gsap.fromTo(
      leadGenServicesContentText1Ref.current,
      { x: -300, opacity: 0 }, //start from left
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leadGenServicesContentText1Ref.current,
          start: "top 80%", //start animation when top of the element is 80% from the top of the viewport
          once: true, //only animate once
        },
      }
    );
    //Animate leadGenServicesContentText2Ref from the right
    gsap.fromTo(
      leadGenServicesContentText2Ref.current,
      { x: 300, opacity: 0 }, //start from right
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leadGenServicesContentText2Ref.current,
          start: "top 80%", //start animation when top of the element is 80% from the top of the viewport
          once: true, //only animate once
        },
      }
    );
    //Animate leadGenServicesContentImag1eRef from the right
    gsap.fromTo(
      leadGenServicesContentImag1eRef.current,
      { x: 300, opacity: 0 }, //start from right
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leadGenServicesContentImag1eRef.current,
          start: "top 80%", //start animation when top of the element is 80% from the top of the viewport
          once: true, //only animate once
        },
      }
    );
    //Animate leadGenServicesContentImag2eRef from the left
    gsap.fromTo(
      leadGenServicesContentImag2eRef.current,
      { x: -300, opacity: 0 }, //start from left
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leadGenServicesContentImag2eRef.current,
          start: "top 80%", //start animation when top of the element is 80% from the top of the viewport
          once: true, //only animate once
        },
      }
    );

    if (servicesContactSectionRef.current)
      gsap.fromTo(
        servicesContactSectionRef.current,
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesContactSectionRef.current,
            start: "top 100%", //start animation when top of the element is 100% from the top of the viewport
            once: true, //only animate once
          },
        }
      );
  }, []);

  return (
    <section className={leadStyles.leadServicesSection}>
      <div className={leadStyles.leadGenServicesContainer}>
        <div className={leadStyles.leadGenServicesContent}>
          <div
            className={leadStyles.leadGenServicesContentText}
            ref={leadGenServicesContentText1Ref}
          >
            <h4>
              Seamlessly integrate our AI with your CRM system to manage and
              track leads.
            </h4>
            <div className={leadStyles.GetStartedbtn}>
              <GetStarted />
            </div>
          </div>
          <div
            className={leadStyles.leadGenServicesContentImage}
            ref={leadGenServicesContentImag1eRef}
          >
            <div className={leadStyles.leadImageWrapper}>
              <div className={leadStyles.leadImgabsolute}>
                <Image src="/Stat (4).png" fill objectFit="contain" />
              </div>

              <div className={leadStyles.leadservicesImg}>
                <Image src="/Rectangle 63 (2).png" fill objectFit="contain" />
              </div>
              <ScrollParallax isAbsolutelyPositioned shouldPause>
                <div className={leadStyles.leadImgabsolutebottom}>
                  <Image src="/Frame 24.png" fill objectFit="contain" />
                </div>
              </ScrollParallax>
            </div>
          </div>
        </div>
        <div className={leadStyles.leadGenServicesContent}>
          <div
            className={leadStyles.leadGenServicesContentImage}
            ref={leadGenServicesContentImag2eRef}
          >
            <div className={leadStyles.leadservicesImg}>
              <Image src="/Frame 1618868497.png" fill objectFit="contain" />
            </div>
          </div>
          <div
            className={leadStyles.leadGenServicesContentText}
            ref={leadGenServicesContentText2Ref}
          >
            <h4>Provide real-time assistance on your dealership’s website.</h4>
            <div className={leadStyles.GetStartedbtn}>
              <GetStarted />
            </div>
          </div>
        </div>
      </div>
      <section
        className={leadStyles.servicesContactSection}
        ref={servicesContactSectionRef}
      >
        <div className={leadStyles.servicesContactContainer}>
          <div className={leadStyles.servicesContactImgtop}>
            <Image src="/Group 6327.svg" fill />
          </div>
          <h2>
            Transform Your Sales with Our Proven Lead Generation Solutions
          </h2>
          <Link href="/contact">
            <button>Contact us</button>
          </Link>
          <div className={leadStyles.servicesContactImgbottom}>
            <Image src="/Group 2.png" fill />
          </div>
        </div>
      </section>
      <Testimonials />
      <FAQ />
    </section>
  );
};

export default LeadGenServices;
