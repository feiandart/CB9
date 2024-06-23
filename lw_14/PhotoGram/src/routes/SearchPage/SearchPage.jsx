import styles from "../routes.module.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import Gallery from "../../components/Gallery/Gallery";
import { useContext } from "react";
import { context } from "../../layouts/DefaultLayout/DefaultLayout";

export default function SearchPage() {
  const { search, setResult } = useContext(context);

  return (
    <>
      <div className={styles.container}>
        <SearchBar setResult={setResult} />
        <div className={styles.containerGallery}>
          {search.map((item, index) => (
            <Gallery key={index} post={item} otherdata={search} />
          ))}{" "}
        </div>
      </div>
    </>
  );
}
