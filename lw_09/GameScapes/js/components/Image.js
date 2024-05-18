import { createEl } from "../helpers.js";

const Image = (className, src) => {
    const el = createEl('img');

    el.className = className;
    el.src = src;

    return el;
};

export default Image;