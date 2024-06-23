import styles from "./fakefriendlist.module.scss";
import { useRef } from "react";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

const FakeFriendList = () => {
  const carouselRef = useRef();
  const friendRef = useRef();

  const fakeFriends = [
    {
      username: "user123",
      image: "https://picsum.photos/id/424/200/300",
    },
    {
      username: "coolgirl27",
      image: "https://picsum.photos/id/567/200/300",
    },
    {
      username: "adventure_joe",
      image: "https://picsum.photos/id/566/200/300",
    },
    {
      username: "sunsetlover",
      image: "https://picsum.photos/id/447/200/300",
    },
    {
      username: "user123",
      image: "https://picsum.photos/id/424/200/300",
    },
    {
      username: "coolgirl27",
      image: "https://picsum.photos/id/567/200/300",
    },
    {
      username: "adventure_joe",
      image: "https://picsum.photos/id/566/200/300",
    },
    {
      username: "sunsetlover",
      image: "https://picsum.photos/id/447/200/300",
    },
    {
      username: "user123",
      image: "https://picsum.photos/id/424/200/300",
    },
    {
      username: "coolgirl27",
      image: "https://picsum.photos/id/567/200/300",
    },
    {
      username: "adventure_joe",
      image: "https://picsum.photos/id/566/200/300",
    },
    {
      username: "sunsetlover",
      image: "https://picsum.photos/id/447/200/300",
    },
  ];

  const handleClick = (type) => {
    const friendWidth = friendRef.current?.offsetWidth;

    const value =
      type === "left"
        ? carouselRef.current.scrollLeft - friendWidth
        : carouselRef.current.scrollLeft + friendWidth;

    carouselRef.current.scroll({
      top: 0,
      left: value,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={styles.friendlistContainer}>
        <div className={styles.iconContainer}>
          <IoIosArrowDropleftCircle
            className={styles.genericIcon}
            onClick={() => {
              handleClick("left");
            }}
          />
          <IoIosArrowDroprightCircle
            className={styles.genericIcon}
            onClick={() => {
              handleClick();
            }}
          />
        </div>

        <div className={styles.fflContainer} ref={carouselRef}>
          {fakeFriends.map((img, index) => (
            <img
              src={img.image}
              key={index}
              className={styles.fflImage}
              ref={friendRef}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FakeFriendList;
