import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";

const NavLink = ({ item, onClick }) => {
  const pathName = usePathname();

  const handleClick = (e) => {
    if (item.subLinks) {
      e.preventDefault(); // Prevent navigation for parent with subLinks
    }
    if (onClick) {
      onClick(); // Close menu if handler is provided
    }
  };

  const isActive = pathName === item.path && !item.subLinks;

  return (
    <Link
      href={item.path}
      className={`
  ${styles.container}
  ${isActive ? styles.active : ""}
  ${item.subLinks ? styles.servicesParentLink : ""}
  ${item.subLinks && pathName === item.path ? styles.subActive : ""}
`}
      onClick={handleClick}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
