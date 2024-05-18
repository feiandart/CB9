import { createEl } from "../helpers.js";

const InputEl = () => {
  const el = createEl("input");

    el.className = "searchbar--input";
    el.placeholder = "Search...";

  return el;
};

export default InputEl;
