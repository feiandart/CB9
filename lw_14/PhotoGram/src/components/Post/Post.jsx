import styles from "./post.module.scss";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { context } from "../../layouts/DefaultLayout/DefaultLayout";

const Post = ({ post }) => {
  const [isFav, setIsFav] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);

  const { setCurrentId } = useContext(context);

  const handleFav = () => {
    setIsFav(!isFav);
  };

  const handleBookmark = () => {
    setIsBookmark(!isBookmark);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/post/${post?.id}`);
  };

  return (
    <>
      <div className={styles.postContainer}>
        <div className={styles.imgContainer}>
          <div className={styles.postUserInfo}>
            <img src={post?.user?.profile_image?.medium} />
            <NavLink to={`profile/${post?.user?.username}`}>
              {post?.user?.username}
            </NavLink>
          </div>
          <h3 className={styles.postIcons}>
            <span onClick={handleBookmark}>
              {isBookmark ? (
                <FaBookmark className={styles.iconBookActive} />
              ) : (
                <FaRegBookmark className={styles.iconBook} />
              )}
            </span>
            <span onClick={handleFav}>
              {isFav ? (
                <IoMdHeart className={styles.iconFavActive} />
              ) : (
                <IoMdHeartEmpty className={styles.iconFav} />
              )}
            </span>
            {post?.likes}
          </h3>

          <div>
            <img
              className={styles.postImg}
              src={post?.urls?.regular}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
