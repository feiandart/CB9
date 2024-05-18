import { createEl } from "../helpers.js";


const ErrorEl = () => {
  const el = createEl("p");

  el.className = "error";
  el.textContent = "Oh, sorry! \r\n";
  el.textContent += "Seems like something went wrong! \r\n";
  el.textContent += "Try something else, please. Thank you. \r\n"

  return el;
}

export default ErrorEl