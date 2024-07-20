import casestyles from "../casestudy.module.css";
import Link from "next/link";
import Image from "next/image";
const CaseStudyContactLink = () => {
  return <section className={casestyles.contactLinksection}>
        <div className={casestyles.contactLinkContainer}>
        <div className={casestyles.topimgabsolute}>
            <Image src="/Group 2.png" fill/>
        </div>
            <h4>Transform Your Sales with Our Proven Lead <br /> Generation Solutions</h4>
            <Link href="/contact"><button>Contact us</button></Link>
            <div className={casestyles.bottomimgabsolute}>
            <Image src="/Group 2.png" fill/>
        </div>
        </div>
  </section>;

};

export default CaseStudyContactLink;
