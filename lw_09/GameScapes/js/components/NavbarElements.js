import { createEl } from "../helpers.js";

const NavbarElements = () => {
    const el = createEl('div');
    const title = createEl('h1');
    const motto = createEl('h2');

    el.className = 'navbar';

    title.className = 'navbar--title';
    title.textContent = 'GameScape';

    motto.className = 'navbar--subtitle';
    motto.textContent = 'Your active playground';

    el.append(title, motto);

    return el;
};

export default NavbarElements;