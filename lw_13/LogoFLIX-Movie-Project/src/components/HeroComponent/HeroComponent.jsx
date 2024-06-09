import styles from "./hero.module.scss";
import { IoIosPlay } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";

const HeroComponent = ({
  imageUrl,
  title,
  description,
  genres = ["Horror", "Thriller", "Supernatural"],
}) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroDescription}>
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          <SlOptionsVertical />
          {genres.map((genre, index) => (
            <li key={index}>{genre} </li>
          ))}
        </ul>
      </div>

      <img src={`https://image.tmdb.org/t/p/w500${imageUrl}`} alt="hero-img" />

      <div className={styles.btnContainer}>
        <button className={styles.playBtn}>
          <IoIosPlay className={styles.playBtnIcon} /> {""}
          Play
        </button>
        <button className={styles.discoverBtn}>Discover more</button>
      </div>
    </div>
  );
};

export default HeroComponent;
