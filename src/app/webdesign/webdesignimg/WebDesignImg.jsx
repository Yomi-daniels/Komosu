import Image from "next/image";

const WebDesignImg = () => {
  return (
    <div className="flex flex-col mx-auto items-center justify-center md:px-[1.5rem] sm:px-[1rem] max-sm:px-[1rem] ">
      <Image
        src="/MAYF Hero section 1.png"
        alt="webdesignImage"
        width={1472}
        height={956}
        objectFit="contain"
      />
    </div>
  );
};

export default WebDesignImg;
