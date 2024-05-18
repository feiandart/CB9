import { createEl } from "../helpers.js";

const FooterEl = () => {
  const el = createEl("p");

  el.className = 'footer';
  el.textContent = "GameScape, creato da Fabrizia Fisichella. \r\n";
  el.textContent += "Progetto realizzato per la Code Week di Edgemony.";

  return el;
};

export default FooterEl;
