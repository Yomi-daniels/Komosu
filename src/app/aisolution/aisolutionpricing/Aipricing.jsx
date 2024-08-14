import Aistyles from "../Aisolution.module.css";
import webstyle from "@/app/webdesign/webdesign.module.css";
import Image from "next/image";
import { Shadows_Into_Light } from "next/font/google";
import AnnualLink from "@/app/webdesign/components/AnnualLink";
import Testimonials from "@/sections/testimonials";
import FAQ from "@/sections/faq";
import Tickimg from "@/app/webdesign/components/Tickimg";
const shadowsFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});
const Aipricing = () => {
  return (
    <></>
    // <section className={Aistyles.AipricingSection}>
    //   <div className={Aistyles.AipricingHeader}>
    //     <h2>
    //       Pricing{" "}
    //       <span className={`${Aistyles.Aispan} ${shadowsFont.className}`}>
    //         Plans
    //       </span>
    //     </h2>
    //     <p>Choose a Komosu Plan that suits your business needs and goals</p>
    //   </div>
    //   <div className={webstyle.WebPricingContainer}>
    //     <AnnualLink />
    //     <div className={webstyle.webPricingContents}>
    //       <div className={webstyle.webBasicPlan}>
    //         <h4>BASIC PLAN</h4>
    //         <p>
    //           Get your business up and running with our starter plan tailored
    //           for your needs
    //         </p>
    //         <h3>
    //           $2,000<span>/month</span>
    //         </h3>
    //         <span className={webstyle.lineThrough}>$3,000/month</span>
    //         <button>GET STARTED</button>
    //         <div className={webstyle.webbasicplanfeatures}>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Custom website design with up to 5 pages</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Responsive design for mobile and tablet</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Basic SEO setup</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Integration with a user-friendly CMS</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Basic training on how to update content</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>1-month post-launch support for bug fixes</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         className={`${webstyle.webBasicPlan} ${webstyle.webPremiumPlan} ${webstyle.enterprisePlan}`}
    //       >
    //         <h4>ENTERPRISE PLAN</h4>
    //         <p>
    //           Expand your brand offerings and get the best package to grow your
    //           audience
    //         </p>
    //         <h3>
    //           $10,000<span>/month</span>
    //         </h3>
    //         <span className={webstyle.lineThrough}>$12,000/month</span>
    //         <button>GET DEMO</button>
    //         <div className={webstyle.webbasicplanfeatures}>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Custom website design with up to 20 pages</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Responsive design for mobile and tablet</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Comprehensive SEO setup and optimization</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Contact form and social media integration</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Blog setup with custom design</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>E-commerce functionality (up to 10 products)</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Integration with a user-friendly CMS</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>
    //               Extensive training on how to update content and manage
    //               features
    //             </p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Image gallery or portfolio</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Advanced analytics setup</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Newsletter signup integration</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>
    //               6 months post-launch support for bug fixes, updates, and
    //               content changes
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         className={`${webstyle.webBasicPlan} ${webstyle.webStandardPlan}`}
    //       >
    //         <h4>STANDARD PLAN</h4>
    //         <p>
    //           Get your business up and running with our Standard plan tailored
    //           for your needs
    //         </p>
    //         <h3>
    //           $5,000<span>/month</span>
    //         </h3>
    //         <span className={webstyle.lineThrough}>$6,000/month</span>
    //         <button>GET STARTED</button>
    //         <div className={webstyle.webbasicplanfeatures}>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Custom website design with up to 10 pages</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Responsive design for mobile and tablet</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Advanced SEO setup</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Contact form and social media integration</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Integration with a user-friendly CMS</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Comprehensive training on how to update content</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Image gallery or portfolio</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>Basic Analytics setup (Google Analytics)</p>
    //           </div>
    //           <div className={webstyle.webbasicplanfeaturesContent}>
    //             <Tickimg />
    //             <p>
    //               3 months post-launch support for bug fixes and minor updates
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <Testimonials />
    //   <FAQ />
    // </section>
  );
};

export default Aipricing;
