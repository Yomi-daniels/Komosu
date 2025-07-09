// NavLink.jsx
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item, onClick, className = "" }) => {
  const pathName = usePathname();
  const isActive = pathName === item.path && !item.subLinks;

  const baseClass =
    "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 hover:text-blue-600";
  const activeClass =
    "border-l-4 border-r-4 border-blue-600 text-blue-600 bg-blue-50 font-semibold";

  const combinedClass = `${baseClass} ${isActive ? activeClass : ""} ${className}`;

  const handleClick = (e) => {
    if (item.subLinks) {
      e.preventDefault();
    }
    onClick && onClick();
  };

  return (
    <Link href={item.path} className={combinedClass} onClick={handleClick}>
      {item.title}
    </Link>
  );
};

export default NavLink;
