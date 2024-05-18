import { createEl } from "../helpers.js";

const SearchBox = () => {
    const el = createEl('div');

    el.className = 'searchbar';

    return el;
};

export default SearchBox;