'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const WebDesignImg = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div className="flex flex-col mx-auto items-center justify-center md:px-[1.5rem] sm:px-[1rem] max-sm:px-[1rem] max-sm:mt-[2rem]">
      <div ref={imgRef}>
        <Image
          src="/MAYF Hero section 1.png"
          alt="webdesignImage"
          width={1472}
          height={956}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default WebDesignImg;
