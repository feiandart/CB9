import { createEl } from "../helpers.js";
import HeroQuote from "./HeroQuote.js";
import NavbarElements from "./NavbarElements.js";

const HeroGen = () => {
    const el = createEl('div');

    el.className = 'hero';

    return el
}

const HeroEl = () => {
    const Navbar = NavbarElements();
    const Quote = HeroQuote();
    const Hero = HeroGen();

    Hero.append(Navbar, Quote);

    return Hero
};

export default HeroEl