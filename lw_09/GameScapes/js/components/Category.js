import { createEl } from "../helpers.js";

const CategoryEl = () => {
    const el = createEl('div');

    el.className = 'categories';
    el.textContent = 'Testo random per fare prove';

    return el;
};

export default CategoryEl;