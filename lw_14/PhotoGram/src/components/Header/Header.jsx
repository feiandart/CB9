import styles from "./header.module.scss";
import { CiLocationArrow1, CiSettings } from "react-icons/ci";

import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <Logo />
        <p className={styles.headerLogoName}>PhotoGram</p>
      </div>
      <div className={styles.headerIcons}>
        <CiLocationArrow1 className={styles.messages} />
        <CiSettings className={styles.settings} />
      </div>
    </div>
  );
};

export default Header;
