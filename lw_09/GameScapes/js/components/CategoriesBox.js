import { createEl } from "../helpers.js";
import SearchBar from "./SearchBox.js";
import Tags from "./TagBox.js";

const CategoriesBoxEl = () => {
    const el = createEl('div');

    el.className = 'categoriesbox';

    return el;
};

export default CategoriesBoxEl;