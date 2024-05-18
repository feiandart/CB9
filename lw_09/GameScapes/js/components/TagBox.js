import { createEl } from "../helpers.js";

const TagBox = () => {
    const el = createEl('div');

    el.className = 'tags';

    return el
};

export default TagBox;