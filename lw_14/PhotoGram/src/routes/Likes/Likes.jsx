import styles from '../routes.module.scss';
import Post from "../../components/Post/Post";
import { useContext } from "react";
import { context } from "../../layouts/DefaultLayout/DefaultLayout";

export default function Likes() {
  const { post } = useContext(context);
  const filteredPosts = post.filter((post) => post.likes > 30);

  return (
    <>
      <div className={styles.container}>
        {filteredPosts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </>
  );
}
