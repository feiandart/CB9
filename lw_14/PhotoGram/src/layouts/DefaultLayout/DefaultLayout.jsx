import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../utils/endpoints";
import { Outlet } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import styles from "./defaultlayouts.module.scss";

export const context = createContext();

const DefaultLayout = () => {
  const [post, setPost] = useState([]);
  const [profile, setProfile] = useState("");
  const [profileData, setProfileData] = useState([]);
  const [profileUserData, setProfileUserData] = useState([]);
  const [focusGallery, setFocusGallery] = useState([]);

  const [search, setSearch] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch(
      `${BASE_URL}/photos/?client_id=${
        import.meta.env.VITE_API_KEY
      }&per_page=30`
    )
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  useEffect(() => {
    if (profile) {
      fetch(
        `${BASE_URL}/users/${profile}/photos/?client_id=${
          import.meta.env.VITE_API_KEY
        }&per_page=30`
      )
        .then((res) => res.json())
        .then((data) => {
          setProfileData(data);
        });

      fetch(
        `${BASE_URL}/users/${profile}/?client_id=${
          import.meta.env.VITE_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          setProfileUserData(data);
        });
    }
  }, [profile]);

  useEffect(() => {
    fetch(
      `${BASE_URL}/search/photos/?client_id=${
        import.meta.env.VITE_API_KEY
      }&query=${result}&per_page=30`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearch(data.results);
      });
  }, [result]);

  const variables = {
    post,
    profile,
    profileData,
    profileUserData,
    setProfile,
    search,
    setResult,
    focusGallery,
    setFocusGallery,
  };
 
  return (
    <>
      <context.Provider value={variables}>
        <Header />
        <NavBar />
        <div className={styles.primary}>
          <Outlet />
        </div>
      </context.Provider>
    </>
  );
};

export default DefaultLayout;
