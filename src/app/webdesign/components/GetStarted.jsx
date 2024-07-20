import webstyle from "../webdesign.module.css";
import Link from "next/link";
const GetStarted = () => {
  return (
    <div className={webstyle.webdesignTextContent}>
      <Link href="/request-demo">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default GetStarted;
