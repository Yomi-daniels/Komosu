"use client";

import Aistyles from "../Aisolution.module.css";
import GetStarted from "@/app/webdesign/components/GetStarted";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Run Paid Ads",
    text: "CarMosu works for dealerships running paid traffic campaigns to drive more test-drive bookings.",
    image: "/Frame 1618868477.png",
    textFrom: "left",
    imageFrom: "right",
  },
  {
    id: 2,
    title: "Prioritize Inventory",
    text: "Focus on key vehicles — CarMosu surfaces what matters most to buyers, increasing conversions.",
    image: "/Frame 1618868493.png",
    textFrom: "right",
    imageFrom: "left",
  },
  {
    id: 3,
    title: "Value Focus Over Flexibility",
    text: "CarMosu is designed to guide intent. If you want a flexible website redesign, this isn’t for you.",
    image: "/Frame 1618868477.png",
    textFrom: "left",
    imageFrom: "right",
  },
];

const AisolutionServices = () => {
  const textRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    services.forEach((service, index) => {
      const textDirection = service.textFrom === "left" ? -300 : 300;
      const imageDirection = service.imageFrom === "left" ? -300 : 300;

      gsap.fromTo(
        textRefs.current[index],
        { x: textDirection, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRefs.current[index],
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        imageRefs.current[index],
        { x: imageDirection, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRefs.current[index],
            start: "top 80%",
            once: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className={Aistyles.AisolutionServicesSection}>
      <div className={Aistyles.AisolutionServicesContainer}>
        {services.map((service, index) => {
          const isEven = index % 2 !== 0;
          return (
            <div
              key={service.id}
              className={
                isEven
                  ? Aistyles.AisolutionServicesContent2
                  : Aistyles.AisolutionServicesContent
              }
            >
              {!isEven && (
                <div
                  className={Aistyles.AisolutionServicesText}
                  ref={(el) => (textRefs.current[index] = el)}
                >
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <GetStarted />
                </div>
              )}
              <div
                className={Aistyles.AisolutionServicesImage}
                ref={(el) => (imageRefs.current[index] = el)}
              >
                <div className={Aistyles.aiservicesImg}>
                  <Image src={service.image} fill objectFit="contain" alt="" />
                </div>
              </div>
              {isEven && (
                <div
                  className={Aistyles.AisolutionServicesText}
                  ref={(el) => (textRefs.current[index] = el)}
                >
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <GetStarted />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AisolutionServices;
