import { useContext } from "react";
import { context } from "../../layouts/DefaultLayout/DefaultLayout";
import Post from "../../components/Post/Post";
import styles from "../routes.module.scss";

const GalleryFocus = () => {

  const { focusGallery } = useContext(context);


  return (
    <>
      <div className={styles.container}>
        {focusGallery.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </>
  );
}

export default GalleryFocus;
