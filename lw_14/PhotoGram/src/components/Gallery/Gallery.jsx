import { useContext } from "react";
import styles from "./gallery.module.scss";
import { useNavigate } from "react-router-dom";
import { context } from "../../layouts/DefaultLayout/DefaultLayout";

const Gallery = ({ post, otherdata }) => {
  const { setFocusGallery } = useContext(context);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/gallery`);
    setFocusGallery(otherdata);
  };

  return (
    <>
      <img
        className={styles.galleryImages}
        src={post.urls.regular}
        onClick={handleClick}
      />
    </>
  );
};

export default Gallery;
