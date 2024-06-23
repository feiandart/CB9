import { useContext } from "react";
import { useParams } from "react-router-dom";
import { context } from "../../layouts/DefaultLayout/DefaultLayout";
import styles from "../routes.module.scss";
import Post from "../../components/Post/Post";
import PostDetails from "../../components/PostDetails/PostDetails";

export default function PostPage() {
  const { post, search, profileData } = useContext(context);
  const { id } = useParams();
  const allPhotos = [...post, ...search, ...profileData];

  const filteredPost = allPhotos.filter((post) => post.id === id);

  return (
    <>
      <div className={styles.container}>
            <Post post={filteredPost[0]} className={styles.container} />
            <PostDetails post={filteredPost[0]} />
      </div>
    </>
  );
}
