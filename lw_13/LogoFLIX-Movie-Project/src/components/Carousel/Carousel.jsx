import { useRef } from "react";
import styles from "./carousel.module.scss";
import MovieCard from "../MovieCard/MovieCard";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const Carousel = ({ list = [], carouselName }) => {
  const carouselRef = useRef();
  const movieCardRef = useRef();

  const handleArrowClick = (type) => {
    const movieCardWidth = movieCardRef.current?.offsetWidth;

    if (type === "left") {
      carouselRef.current?.scroll({
        top: 0,
        left: carouselRef.current?.scrollLeft - movieCardWidth,
        behavior: "smooth",
      });
    } else {
      carouselRef.current?.scroll({
        top: 0,
        left: carouselRef.current?.scrollLeft + movieCardWidth,
        behavior: "smooth",
      });
    }
  };

  
  return (
    <>
      <div className={styles.carouselContainer}>

        <h2 className={styles.carouselTitle}>{carouselName}</h2>
        
        <div className={styles.carouselGallery}>
          <div className={styles.arrowsContainer}>
            <IoIosArrowDropleftCircle
              className={styles.genericIcon}
              onClick={() => {
                handleArrowClick("left");
              }}
            />
            <IoIosArrowDroprightCircle
              className={styles.genericIcon}
              onClick={() => {
                handleArrowClick();
              }}
            />
          </div>

          <div ref={carouselRef} className={styles.carousel}>
            {list.map((movie, index) => {
              return (
                <MovieCard
                  refProp={movieCardRef}
                  title={movie.original_title}
                  imageUrl={movie.backdrop_path}
                  key={index}
                  movie={movie}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
