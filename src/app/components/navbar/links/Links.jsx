"use client";
import Image from "next/image";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";

const links = [
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Services",
    path: "/servicesLink",
    subLinks: [
      { title: "Web Design", path: "/webdesign" },
      {
        title: "AI Solution",
        path: "/aisolution",
      },
      {
        title: "Content Marketing",
        path: "/contentmarketing",
      },
      {
        title: "Lead Generation",
        path: "/leadgeneration",
      },
    ],
  },

  // {
  //   title: "Pricing",
  //   path: "/pricing",
  // },

  {
    title: "Case Study",
    path: "/case-study",
  },

  {
    title: "Contact Us",
    path: "/contact-us",
  },
  {
    title: "Get Demo",
    path: "/request-demo",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleServiceClick = () => {
    setServicesOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <div
            key={link.title}
            className={`${styles.linkItem} ${link.title === "Services" ? styles.customLinkItem : ""}  ${link.title === "Get Demo" ? styles.requestDemoLink : ""}`}
          >
            {link.subLinks ? (
              <>
                <div className={styles.servicesContainer}>
                  <NavLink item={link} />
                  {/* <button className={styles.dropdownButton}>
                    <Image
                      src="/arrow-drop-down-line.svg"
                      alt="dropdown"
                      width={20}
                      height={20}
                    />
                  </button> */}
                </div>
                {
                  <div className={styles.subLinks}>
                    {link.subLinks.map((subLink) => (
                      <NavLink item={subLink} key={subLink.title} />
                    ))}
                  </div>
                }
              </>
            ) : (
              <NavLink item={link} />
            )}
          </div>
        ))}
      </div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={styles.menuButton}
      >
        <Image src="/menu-3-fill.svg" alt="menu" width={24} height={24} />
      </button>
      {open && (
        <div className={styles.mobileContainer}>
          <div className={styles.mobileLinks}>
            {links.map((link) => (
              <div key={link.title} className={styles.linkItem}>
                {link.title === "Services" ? (
                  <>
                    <div
                      className={styles.servicesContainer}
                      onClick={handleServiceClick}
                    >
                      <NavLink item={link} />
                      <button className={styles.dropdownButton}>
                        <Image
                          src="/arrow-drop-down-line.svg"
                          alt="dropdown"
                          width={20}
                          height={20}
                        />
                      </button>
                    </div>
                    {servicesOpen && (
                      <div className={styles.subLinks}>
                        {link.subLinks.map((subLink) => (
                          <NavLink item={subLink} key={subLink.title} />
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink item={link} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Links;
