import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";

const NavLink = ({ item, onClick }) => {
  const pathName = usePathname();

  const handleClick = (e) => {
    if (item.subLinks) {
      e.preventDefault();
    }
    if (onClick) {
      onClick(); // Close the menu if onClick is provided
    }
  };

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${pathName === item.path && styles.active}`}
      onClick={handleClick}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
