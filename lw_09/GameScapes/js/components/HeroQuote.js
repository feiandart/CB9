import { createEl } from "../helpers.js";

const HeroQuote = () => {
  const text = createEl("h3");

  text.className = "hero--quote";
  text.setAttribute("style", "white-space: pre;");
  text.textContent = "Discover the World \r\n";
  text.textContent += "of Games, Cosplay \r\n"
  text.textContent += "and Visual Art";

  return text;
};

export default HeroQuote;