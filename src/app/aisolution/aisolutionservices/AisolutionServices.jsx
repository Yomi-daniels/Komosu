import Aistyles from "../Aisolution.module.css";
import GetStarted from "@/app/webdesign/components/GetStarted";
import Image from "next/image";
const AisolutionServices = () => {
  return (
    <section className={Aistyles.AisolutionServicesSection}>
      <div className={Aistyles.AisolutionServicesContainer}>
        <div className={Aistyles.AisolutionServicesContent}>
          <div className={Aistyles.AisolutionServicesText}>
            <h3>Provide real-time assistance on your dealership’s website.</h3>
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
              Elevate sales by guiding your customers to the best product that
              suits their needs
            </h3>
            <GetStarted />
          </div>
        </div>
        <div className={Aistyles.AisolutionServicesContent}>
          <div className={Aistyles.AisolutionServicesText}>
            <h3>Provide real-time assistance on your dealership’s website.</h3>
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
