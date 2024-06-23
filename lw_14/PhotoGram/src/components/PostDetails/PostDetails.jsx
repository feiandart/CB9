import FakeComments from "../FakeComments/FakeComments";
import styles from "./postdetails.module.scss";

const PostDetails = ({ post }) => {
  return (
    <>
      <div className={styles.descriptionContainer}>
        <div>
          <p>{post?.user?.username}</p>
          <p>{post?.alt_description}</p>
        </div>
        <FakeComments />
      </div>
    </>
  );
};

export default PostDetails;
