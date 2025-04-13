import styles from "./sections.module.css";
import casestyles from "../app/case-study/casestudy.module.css";

const BentoSection = () => {
  return (
    <div
      className={`${"max-w-[1400px] mx-auto h-screen border border-red-500"}${casestyles.thirdheadingsection}`}
    >
      BentoSection
    </div>
  );
};

export default BentoSection;
