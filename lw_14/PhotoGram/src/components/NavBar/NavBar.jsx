import styles from "./navbar.module.scss";
import { NavLink } from "react-router-dom";
import { BiSolidHomeHeart } from "react-icons/bi";
import { BsSearchHeartFill, BsPersonCircle } from "react-icons/bs";
import { RiAddCircleLine, RiHeartAddFill } from "react-icons/ri";

const NavBar = () => {
  const navbarLinks = [
    {
      id: "Home",
      img: <BiSolidHomeHeart />,
      path: "/",
    },
    {
      id: "Search",
      img: <BsSearchHeartFill />,
      path: "/search",
    },
    {
      id: "Add",
      img: <RiAddCircleLine />,
      path: "/add",
    },
    {
      id: "Populars",
      img: <RiHeartAddFill />,
      path: "/popular",
    },
    {
      id: "Profile",
      img: <BsPersonCircle />,
      path: "/profile/relentlessjpg",
    },
  ];

  return (
    <div className={styles.navbarContainer}>
      <ul className={styles.navbarList}>
        {navbarLinks.map((item, index) => (
          <li key={index} className={styles.navbarItem}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? styles.navbarIconActive : styles.navbarIcon)}>
              {item.img}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
