import pricingStyles from "../pricing.module.css"
import Image from "next/image";
import Testimonials from "@/sections/testimonials";
import FAQ from "@/sections/faq";
import { Montserrat } from "next/font/google";
import Link from "next/link";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});
const Pricing = () => {
  return <section className={pricingStyles.pricingLandingPage}>
            <div className={pricingStyles.pricingHeaderContent}>
                <h1 className={montserrat.className}>Komosu All-In-One Services</h1>
                <p>Get the best deal for your business with our all in one plan. Send us a message to get the best price</p>
                <Link href="/contact"><button>Contact Us</button></Link>
            </div>
        <div className={pricingStyles.pricingLandingPageContainer}>
            <div className={pricingStyles.pricingLandingPageContainerHeader}>
                <h4>Trusted by 1,000 automotive businesses</h4>
                <p>Here is what you get with our all in one plan</p>
            </div>
            <div className={pricingStyles.pricingLandingPageContainerContent}>
                <div className={pricingStyles.pricingContentWrapper}>
                <Link href="/webdesign">
                    <div className={pricingStyles.pricingContent}>
                        <div className={pricingStyles.pricingContentHeader}>
                            <div className={`${pricingStyles.pricingContentImgBg} ${pricingStyles.pricingContentImgBgblue}`}>
                                <div className={pricingStyles.pricingContentImg}>
                                    <Image src="/Vector.svg" fill objectFit="contain"/>
                                </div>
                            </div>
                            <div className={pricingStyles.arrowWrapper}>
                                <h4>WEB DESIGN</h4>
                                <div className={pricingStyles.arrowLeft}>
                                    <Image src="/Arrow 1.svg" fill/>
                                </div>
                            </div>
                        </div>
                        <h3>We revolutionize web design for dealerships. blending innovative techniques with strategic planning to elevate online presence and drive sales.</h3>
                    </div>
                </Link>
                <Link href="/aisolution">
                    <div className={` ${pricingStyles.pricingContent} ${pricingStyles.pricingContent2}`}>
                        <div className={pricingStyles.pricingContentHeader}>
                            <div className={pricingStyles.pricingContentImgBg}>
                                <div className={pricingStyles.pricingContentImg}>
                                  <Image src="/vector Ai big.png" fill objectFit="contain"/>
                         </div>
                            </div>
                            <div className={pricingStyles.arrowWrapper}>
                                <h4>AI SOLUTIONS</h4>
                            </div>
                        </div>
                        <h3>Accelerate your business and get real time assistance  on your website and platforms with auto-pilot efficiency sponsored by our AI-powered Chatbot</h3>
                    </div>
                </Link>
                </div>
                <div className={`${pricingStyles.pricingContentWrapper} ${pricingStyles.pricingContentWrapper2}`}>
                <Link href="/contentmarketing">
                    <div className={` ${pricingStyles.pricingContent} ${pricingStyles.pricingContent3}`}>
                        <div className={pricingStyles.pricingContentHeader}>
                            <div className={pricingStyles.pricingContentImgBg}>
                                <div className={pricingStyles.pricingContentImg}>
                                    <Image src="/Vector (4).png" fill objectFit="contain"/>
                                </div>
                            </div>
                            <div className={pricingStyles.arrowWrapper}>
                                <h4>CONTENT MARKETING</h4>
                            </div>
                        </div>
                        <h3>Fuel your brand success with tailored content marketing services championed by us. Develop engaging promotional videos that helps you drive sales.  </h3>
                    </div>
                </Link>
                <Link href="/leadgeneration">
                    <div className={` ${pricingStyles.pricingContent} ${pricingStyles.pricingContent2}`}>
                        <div className={pricingStyles.pricingContentHeader}>
                            <div className={pricingStyles.pricingContentImgBg}>
                                <div className={pricingStyles.pricingContentImg}>
                                  <Image src="/Vector (2).png" fill objectFit="contain"/>
                         </div>
                            </div>
                            <div className={pricingStyles.arrowWrapper}>
                                <h4>LEAD GENERATION</h4>
                            </div>
                        </div>
                        <h3>Drive more leads and transform your dealership growth with our expert solutions. Seamlessly integrate our AI with your CRM system to manage and track leads.</h3>
                    </div>
                </Link>
                </div>
            </div>
        </div>
        <Testimonials/>
        <FAQ/>
  </section>;
};

export default Pricing;
