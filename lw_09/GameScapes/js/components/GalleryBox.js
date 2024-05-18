import { createEl, find, log } from "../helpers.js";
import Image from "./Image.js";
import ModalBox from "./ModalBox.js";

const GalleryBox = ({urls, user}) => {
    const el = createEl('div');
    const imageEl = Image({ alt: '' });
    const modal = ModalBox();
    const modalImage = Image({ alt: '' });
    const modalButton = createEl("button");
    const modalAuthor = createEl('p');

    
    el.className = 'gallerybox';

    imageEl.src = urls.small;
    imageEl.className = 'gallery--image';

    modalImage.src = urls.regular;
    modalImage.className = 'modal--image';

    modalButton.className = 'modal--button';
    modalButton.textContent = 'X';

    modalAuthor.className = 'modal--author';
    modalAuthor.textContent = user.name;

     modalButton.addEventListener("click", () => {
        modal.style.opacity = 0;

        setTimeout(() => {
        modal.style.display = "none";
        }, 1000);
    });
    
    imageEl.addEventListener("click", () => {

        modal.append(modalImage, modalButton, modalAuthor);
        
        const ROOT_EL = find('#root');

        ROOT_EL.appendChild(modal); 

        setTimeout(() => {
        modal.style.opacity = 1;
        }, 10);
    });
    
    el.append(imageEl);

    return el;
};

export default GalleryBox;