import webstyle from "../webdesign.module.css";
import Link from "next/link";
const GetStarted = () => {
  return (
    <div className={webstyle.webdesignTextContent}>
      <Link href="/request-demo">
        <button>
          <span className={webstyle.text}>Get Started</span>
          <span>
            <i class="ri-arrow-right-line"></i>
          </span>
        </button>
      </Link>
    </div>
  );
};

export default GetStarted;
