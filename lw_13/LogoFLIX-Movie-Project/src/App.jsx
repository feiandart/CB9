import { BASE_API, AUTH_KEY } from "./constants.js";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import Carousel from "./components/Carousel/Carousel.jsx";
import styles from "./app.module.scss";

function App() {
  const [popularList, setPopularList] = useState([]);
  const [topRatedList, setTopRatedList] = useState([]);
  const [upcomingList, setUpcomingList] = useState([]);

  useEffect(() => {
    fetch(`${BASE_API}popular`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${AUTH_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        setPopularList(data.results.filter((_, index) => index < 20))
      );

    fetch(`${BASE_API}top_rated`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${AUTH_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        setTopRatedList(data.results.filter((_, index) => index < 20))
      );

    fetch(`${BASE_API}upcoming`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${AUTH_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        setUpcomingList(data.results.filter((_, index) => index < 20))
      );
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <HeroComponent
          imageUrl={popularList[3]?.poster_path}
          title={popularList[3]?.original_title}
          description={popularList[3]?.overview}
        />

        <div className={styles.movieSections}>
          <section>
            <Carousel carouselName="Popular" list={popularList} />
          </section>

          <section>
            <Carousel carouselName="Top Rated Movies" list={topRatedList} />
          </section>

          <section>
            <Carousel carouselName="Upcoming" list={upcomingList} />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
