import { createEl } from "../helpers.js";

const InputButton = () => {
    const el = createEl("button");
    
  el.className = "searchbar--button";
  el.textContent = "Invia";

  return el
};

export default InputButton;