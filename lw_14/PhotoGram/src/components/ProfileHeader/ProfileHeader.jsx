import styles from "./profileheader.module.scss";

const ProfileHeader = ({ user }) => {
  const {
    name,
    username,
    profile_image,
    followers_count,
    following_count,
    total_photos,
    bio
  } = user;

  const profileStats = [
    {
      value: total_photos,
      name: "posts",
    },
    {
      value: followers_count,
      name: "followers",
    },
    {
      value: following_count,
      name: "following",
    },
  ];

  return (
    <>
      <div className={styles.profileContainer}>
        <div>
          <img src={profile_image?.large} className={styles.profileImage} />
        </div>
        <div className={styles.profileStats}>
          {profileStats.map((data, index) => (
            <div className={styles.profileStatsDetails} key={index}>
              <p className={styles.profileStatsNumber}>{data.value}</p>
              <p className={styles.profileStatsName}>{data.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.profileInfo}>
         <div>
          <span className={styles.profileName}> {name} </span>
          <span>{username}</span>
          <p className={styles.profileDesc}>{bio}</p>
        </div>
      </div>

      <div className={styles.profileButtonsContainer}>
        <button className={styles.profileButton}>EDIT PROFILE</button>
        <button className={styles.profileButton}>SHARE PROFILE</button>
      </div>
    </>
  );
};

export default ProfileHeader;
