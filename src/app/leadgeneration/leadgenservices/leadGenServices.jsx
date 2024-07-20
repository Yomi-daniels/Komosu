"use client";
import leadStyles from "../leadgeneration.module.css";
import Image from "next/image";
import GetStarted from "@/app/webdesign/components/GetStarted";
import Testimonials from "@/sections/testimonials";
import { ScrollParallax } from "react-just-parallax";
import FAQ from "@/sections/faq";
import Link from "next/link";
const leadGenServices = () => {
  return (
    <section className={leadStyles.leadServicesSection}>
      <div className={leadStyles.leadGenServicesContainer}>
        <div className={leadStyles.leadGenServicesContent}>
          <div className={leadStyles.leadGenServicesContentText}>
            <h4>
              Seamlessly integrate our AI with your CRM system to manage and
              track leads.
            </h4>
            <GetStarted />
          </div>
          <div className={leadStyles.leadGenServicesContentImage}>
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
          <div className={leadStyles.leadGenServicesContentImage}>
            <div className={leadStyles.leadservicesImg}>
              <Image src="/Frame 1618868497.png" fill objectFit="contain" />
            </div>
          </div>
          <div className={leadStyles.leadGenServicesContentText}>
            <h4>Provide real-time assistance on your dealership’s website.</h4>
            <GetStarted />
          </div>
        </div>
      </div>
      <section className={leadStyles.servicesContactSection}>
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

export default leadGenServices;
