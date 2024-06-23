import styles from "./fakecomments.module.scss";

const FakeComments = () => {
  const fakeComments = [
    {
      username: "user123",
      comment: "Great weather today!",
      image: "https://picsum.photos/id/424/200/300",
    },
    {
      username: "coolgirl27",
      comment: "Enjoying a peaceful evening.",
      image: "https://picsum.photos/id/567/200/300",
    },
    {
      username: "adventure_joe",
      comment: "Just climbed Mt. Everest!",
      image: "https://picsum.photos/id/566/200/300",
    },
    {
      username: "sunsetlover",
      comment: "The sunset was breathtaking.",
      image: "https://picsum.photos/id/447/200/300",
    },
    {
      username: "user123",
      comment: "Great weather today!",
      image: "https://picsum.photos/id/424/200/300",
    },
    {
      username: "coolgirl27",
      comment: "Enjoying a peaceful evening.",
      image: "https://picsum.photos/id/567/200/300",
    },
    {
      username: "adventure_joe",
      comment: "Just climbed Mt. Everest!",
      image: "https://picsum.photos/id/566/200/300",
    },
    {
      username: "sunsetlover",
      comment: "The sunset was breathtaking.",
      image: "https://picsum.photos/id/447/200/300",
    },
    {
      username: "user123",
      comment: "Great weather today!",
      image: "https://picsum.photos/id/424/200/300",
    },
    {
      username: "coolgirl27",
      comment: "Enjoying a peaceful evening.",
      image: "https://picsum.photos/id/567/200/300",
    },
    {
      username: "adventure_joe",
      comment: "Just climbed Mt. Everest!",
      image: "https://picsum.photos/id/566/200/300",
    },
    {
      username: "sunsetlover",
      comment: "The sunset was breathtaking.",
      image: "https://picsum.photos/id/447/200/300",
    },
  ];

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.personalUser}>
        <div className={styles.userInfo}>
          <img
            className={styles.icon}
            src="https://picsum.photos/id/378/200/300"
          />
          relentlessjpg
        </div>
        <div className={styles.addComment}>
          <input placeholder="Type here..." /> <button>Send</button>
        </div>
      </div>

      <div className={styles.comments}>
        {fakeComments.map((post, index) => (
          <div key={index} className={styles.singleComment}>
            <p className={styles.otherUsers}>
              <img className={styles.icon} src={post.image} />
              {post.username}
            </p>

            <p className={styles.description}>{post.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FakeComments;
