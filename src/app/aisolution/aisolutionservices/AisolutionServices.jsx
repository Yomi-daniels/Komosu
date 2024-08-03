import Aistyles from "../Aisolution.module.css";
import GetStarted from "@/app/webdesign/components/GetStarted";
import Image from "next/image";
const AisolutionServices = () => {
  return (
    <section className={Aistyles.AisolutionServicesSection}>
      <div className={Aistyles.AisolutionServicesContainer}>
        <div className={Aistyles.AisolutionServicesContent}>
          <div className={Aistyles.AisolutionServicesText}>
            <h3>AI-Powered Appointment Scheduling</h3>
            <p>AI-Powered Appointment SchOur advanced AI chatbots work tirelessly to manage your customer interactions, schedule appointments, and streamline the sales process. With 24/7 access, our chatbots ensure no lead is missed, improving efficiency and customer satisfactioneduling</p>
            <GetStarted />
          </div>
          <div className={Aistyles.AisolutionServicesImage}>
            <div className={Aistyles.aiservicesImg}>
              <Image src="/Frame 1618868477.png" fill objectFit="contain" />
            </div>
          </div>
        </div>
        <div className={Aistyles.AisolutionServicesContent2}>
          <div className={Aistyles.AisolutionServicesImage}>
            <div className={Aistyles.aiservicesImg}>
              <Image src="/Frame 1618868493.png" fill objectFit="contain" />
            </div>
          </div>
          <div className={Aistyles.AisolutionServicesText}>
            <h3>
            Seamless Transactions and Digital Transformation
            </h3>
          <p>
          Our AI can also take payments, allowing for a seamless transaction flow when taking deposits. This enhances your dealership’s digital transformation by facilitating digital contracting and sending necessary emails for digital paperwork. The bot can also take messages on the customer’s behalf, enabling them to update the dealership when they have filled out necessary paperwork online or have any other queries.
          </p>
            <GetStarted />
          </div>
        </div>
        <div className={Aistyles.AisolutionServicesContent}>
          <div className={Aistyles.AisolutionServicesText}>
            <h3>AI-Driven Copywriting</h3>
            <p>Our chatbots are equipped with AI-driven copywriting capabilities, primed to increase conversions. They can upsell additional services and refer customers to different vehicles, maximizing each interaction's potential to drive sales.</p>
            <GetStarted />
          </div>
          <div className={Aistyles.AisolutionServicesImage}>
            <div className={Aistyles.aiservicesImg}>
              <Image src="/Frame 1618868477.png" fill objectFit="contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AisolutionServices;
