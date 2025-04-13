"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Terms of Service", path: "/content/terms" },
  { name: "Privacy Policy", path: "/content/privacy" },
];

export default function ContentSidebar() {
  const pathname = usePathname();

  return (
    <div
      className="w-64 p-4 fixed top-0 mt-40 h-full bg-white 
    max-lg:left-10 
    md:left-10
    lg:left-60
    max-lg:w-[12rem]
    
    max-sm:mt-0
    max-sm:w-full
   max-sm:bg-white
   max-sm:z-30
   max-sm:left-0
   max-sm:h-[250px]
   max-sm:shadow-sm
    
    "
    >
      <h2 className="text-[24px] font-bold mb-4 text-darkBlueText max-sm:mt-20">
        Content
      </h2>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className={`block ${
                pathname === link.path
                  ? "text-blueText text-lg font-bold"
                  : "text-darkBlueText font-bold"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
