import { context } from "../../layouts/DefaultLayout/DefaultLayout";
import { useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import styles from "../routes.module.scss";
import Gallery from "../../components/Gallery/Gallery";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import FakeFriendList from "../../components/FakeFriendList/FakeFriendList";

export default function Profile() {
  const { username } = useParams();
  const { profileData, setProfile, profileUserData } =
    useContext(context);

  useEffect(() => {
    setProfile(username);
  }, []);


  return (
    <>
      <div className={styles.container} >
        <ProfileHeader user={profileUserData} />

        <FakeFriendList />

          <div className={styles.containerGallery}>
            {profileData.map((info, index) => (
              <Gallery
                key={index}
                post={info}
                otherdata={profileData}
              />
            ))}
        </div>
      </div>
    </>
  );
}
