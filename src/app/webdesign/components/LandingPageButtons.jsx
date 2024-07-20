import webstyle from "../webdesign.module.css";
import Image from "next/image";
import Link from "next/link";
const LandingPageButtons = () => {
  return (
    <div className={webstyle.buttonContainer}>
      {/* <Link href="/pricing">
        <button className={webstyle.pricingbtn}>See Pricing</button>
      </Link> */}

      <Link href="/request-demo">
        <button className={webstyle.demobtn}>
          Get Demo
          <div className={webstyle.butttonBlue}>
            <div className={webstyle.buttonImg}>
              <Image src="/Vector.png" fill />
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default LandingPageButtons;
