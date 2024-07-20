"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";
const NavLink = ({ item, onClick }) => {
  const handleClick = (e) => {
    if (item.subLinks) {
      e.preventDefault();
    }
  };
  const pathName = usePathname();
  return (
    <div>
      {/* <Link
        href={item.path}
        className={`${styles.container} ${
          pathName === item.path && styles.active
        }`}
      >
        {item.title}
      </Link> */}
      <Link
        href={item.path}
        className={`${styles.container} ${
          pathName === item.path && styles.active
        }`}
        onClick={handleClick}
      >
        {item.title}
      </Link>
    </div>
  );
};

export default NavLink;
