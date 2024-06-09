import styles from "./modal.module.scss";
import { IoIosCloseCircle } from "react-icons/io";

const Modal = ({ movie, handleCloseClick, list }) => {
  const { title, overview, backdrop_path } = movie;

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalWindow}>
        <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
        <div className={styles.modalInfo}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <p className={styles.overview}>{overview}</p>
        </div>
        <div className={styles.closeButtonContainer}>
          <IoIosCloseCircle
            className={styles.iconClose}
            onClick={handleCloseClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
