import styles from "./moviecard.module.scss";
import Modal from "../Modal/Modal";
import { useState } from "react";

const MovieCard = ({ title = "Movie Title", imageUrl, refProp, movie }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCardClick = () => {
    setIsModalVisible(true)
  };

  return (
    <>
      <div ref={refProp} className={styles.movieCard} onClick={handleCardClick}>
        <img
          src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
          alt="card-logo-img"
        />
        <p className={styles.movieTitle}>{title}</p>
      </div>

      {isModalVisible && (
        <Modal
          handleCloseClick={() => setIsModalVisible(false)}
          movie={movie}
        />
      )}

    </>
  );
};

export default MovieCard;
