import { createEl } from "../helpers.js";
import Image from "./Image.js";

const ModalBox = (src) => {
  const el = createEl("div");

  el.className = "modal";

  return el;
};

export default ModalBox