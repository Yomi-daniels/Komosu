import webstyle from "../webdesign.module.css";
import Link from "next/link";

const GetStarted = () => {
  return (
    <div
      className={`${webstyle.webdesignTextContent} font-bold  text-white p-6 rounded-full flex items-center justify-center w-[150px] h-[24px] transition-all duration-300`}
    >
      <Link href="/request-demo">
        <button className="flex items-center gap-2 group">
          <span className={webstyle.text}>Get Started</span>
          <span className="transform transition-transform duration-300 group-hover:translate-x-1">
            <i className="ri-arrow-right-line"></i>
          </span>
        </button>
      </Link>
    </div>
  );
};

export default GetStarted;
