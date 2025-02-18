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
      { title: "AI Solution", path: "/aisolution" },
      { title: "Content Marketing", path: "/contentmarketing" },
      { title: "Lead Generation", path: "/leadgeneration" },
    ],
  },

  // {
  //   title: "Pricing",
  //   path: "/pricing",
  // },
  // {
  //   title: "Case Study",
  //   path: "/case-study",
  // },

  {
    title: "Dealership Hub",
    path: "/dealership_hub",
  },

  {
    title: "Blog",
    path: "/blog",
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

  const handleMenuToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    if (open) {
      handleMenuToggle();
    }
  };

  const handleSubLinkClick = (e) => {
    handleLinkClick();
  };

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <div
            key={link.title}
            className={`${styles.linkItem} ${link.title === "Services" ? styles.customLinkItem : ""} ${link.title === "Get Demo" ? styles.requestDemoLink : ""}`}
          >
            {link.subLinks ? (
              <>
                <div className={styles.servicesContainer}>
                  <NavLink item={link} onClick={handleServiceClick} />
                  {/* <button className={styles.dropdownButton} onClick={handleServiceClick}>
                    <Image
                      src="/dropdown.svg"
                      alt="dropdown"
                      width={20}
                      height={20}
                    />
                  </button> */}
                </div>
                <div
                  className={`${styles.subLinks} ${servicesOpen ? styles.subLinksOpen : ""}`}
                >
                  {link.subLinks.map((subLink) => (
                    <NavLink
                      item={subLink}
                      key={subLink.title}
                      onClick={handleSubLinkClick}
                    />
                  ))}
                </div>
              </>
            ) : (
              <NavLink item={link} onClick={handleLinkClick} />
            )}
          </div>
        ))}
      </div>
      <button onClick={handleMenuToggle} className={styles.menuButton}>
        {open ? (
          <Image
            src="/closebtn.svg"
            alt="close"
            width={24}
            height={24}
            className={styles.closeButton}
          />
        ) : (
          <Image src="/openbtn.svg" alt="menu" width={24} height={24} />
        )}
      </button>
      <div
        className={`${styles.mobileContainer} ${open ? styles.mobileContainerOpen : ""}`}
      >
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <div key={link.title} className={styles.linkItem}>
              {link.title === "Services" ? (
                <>
                  <div className={styles.servicesContainerflex}>
                    <div
                      className={styles.servicesContainer}
                      onClick={handleServiceClick}
                    >
                      <NavLink item={link} />
                      <button className={styles.dropdownButton}>
                        <Image
                          src="/dropdown.svg"
                          alt="dropdown"
                          fill
                          objectFit="contain"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    className={`${styles.servicesLinks} ${servicesOpen ? styles.subLinksOpen : ""}`}
                  >
                    {link.subLinks.map((subLink) => (
                      <NavLink
                        item={subLink}
                        key={subLink.title}
                        onClick={handleSubLinkClick}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <NavLink item={link} onClick={handleLinkClick} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Links;
