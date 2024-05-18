// importazione components ed helpers
import { find, createEl } from "./helpers.js";
import CategoriesBoxEl from "./components/CategoriesBox.js";
import ErrorEl from "./components/ErrorEl.js";
import FooterEl from "./components/FooterEl.js";
import GalleryBox from "./components/GalleryBox.js";
import GallerySection from "./components/GallerySection.js";
import HeroEl from "./components/HeroEl.js";
import InputButton from "./components/InputButton.js";
import InputEl from "./components/Input.js";
import MainBox from "./components/MainBox.js";
import SearchBox from "./components/SearchBox.js";
import TagBox from "./components/TagBox.js";

// funzioni aggiuntive

// costanti / variabili
const API_URL = "http://api.unsplash.com";
const API_TOKEN = "RWQVy3hR3SDBmiEagO06q--9hknYBWhjbWWyR7oRTd0";
const PAGE_RESULT = "10";
const PAGE_RESULT_2 = "30";
const ROOT_EL = find('#root');
const Hero = HeroEl();
const Categories = CategoriesBoxEl();
const Main = MainBox();
const Footer = FooterEl();
const Error = ErrorEl();
const ResearchGallery = GallerySection();
const CosplayGallery = GallerySection();
const VideogamesGallery = GallerySection();
const ScreenshotGallery = GallerySection();
const SearchBar = SearchBox();
const Button = InputButton();
const Input = InputEl();
const Tag = TagBox();
const TagValues = [
  {
    tag: "anime",
  },
  {
    tag: "videogames",
  },
  {
    tag: "movies",
  },
  {
    tag: "comics",
  },
  {
    tag: "fantasy",
  },
  {
    tag: "sci-fi",
  },
  {
    tag: "manga",
  },
  {
    tag: "cyberpunk",
  },
  {
    tag: "medieval",
  },
  {
    tag: "disney",
  }
];

// popolamento
SearchBar.append(Input, Button);
Categories.append(SearchBar, Tag);
ROOT_EL.append(Hero, Categories, Main, Footer);

// fetch
fetch(
  `${API_URL}/search/photos/?client_id=${API_TOKEN}&query=Videogames&per_page=${PAGE_RESULT}`)
  .then((res) => res.json())
  .then((cosplays) => {
    const imageResults = cosplays.results;

    imageResults.map((cosplay) => {
      const Gallery = GalleryBox(cosplay);

      CosplayGallery.append(Gallery);
    });

    Main.append(CosplayGallery);
  });

fetch(
  `${API_URL}/search/photos/?client_id=${API_TOKEN}&query=Cosplay&per_page=${PAGE_RESULT}`)
  .then((res) => res.json())
  .then((videogames) => {
    const imageResults = videogames.results;

    imageResults.map((videogame) => {
      const Gallery2 = GalleryBox(videogame);

      VideogamesGallery.append(Gallery2);
    });

    Main.append(VideogamesGallery);
  });

fetch(
  `${API_URL}/search/photos/?client_id=${API_TOKEN}&query=Art&per_page=${PAGE_RESULT}`)
  .then((res) => res.json())
  .then((gameshots) => {
    const imageResults = gameshots.results;

    imageResults.map((gameshot) => {
      const Gallery3 = GalleryBox(gameshot);

      ScreenshotGallery.append(Gallery3);
    });

    Main.append(ScreenshotGallery);
  });

// eventlistener
Button.addEventListener("click", (event) => {
  const SearchValue = Input.value;
  Main.textContent = "";

  fetch(`${API_URL}/search/photos/?client_id=${API_TOKEN}&query=${SearchValue}&per_page=${PAGE_RESULT_2}`)
    .then((res) => res.json())
    .then(ResearchGallery.textContent = "")
    .then((ricerche) => {
      const imageResults = ricerche.results;

      imageResults.map((ricerca) => {
        const Risultati = GalleryBox(ricerca);

        ResearchGallery.className = "researchgallery";

        ResearchGallery.append(Risultati);
      });

      Main.append(ResearchGallery);
    })
    .catch(Main.append(Error));
});

TagValues.forEach((selection) => {
  const el = createEl("a");

  el.className = "tags--list";
  el.innerText = selection.tag;

  Tag.append(el);

  el.addEventListener("click", (event) => {
    const SearchValue = selection.tag;
    Main.textContent = "";

    fetch(
      `${API_URL}/search/photos/?client_id=${API_TOKEN}&query=${SearchValue}&per_page=${PAGE_RESULT_2}`
    )
      .then((res) => res.json())
      .then(ResearchGallery.textContent = "")
      .then((ricerche) => {
        const imageResults = ricerche.results;

        imageResults.map((ricerca) => {
          const Risultati = GalleryBox(ricerca);

          ResearchGallery.className = "researchgallery";

          ResearchGallery.append(Risultati);
        });

        Main.append(ResearchGallery);
      });
  });

  return el;
});