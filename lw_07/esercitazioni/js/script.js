// !! FUNZIONI
const headerEl = () => {
    const headerTitleEl = document.createElement('h1');

    headerTitleEl.className = 'header--title';
    headerTitleEl.textContent = 'What do you need?';

    return headerTitleEl;
}

const modalEl = (imageData) => {
    const modalWrapper = document.createElement('div');
    const modalUser = document.createElement('h2');
    const modalPlace = document.createElement('h3');
    const modalDescription = document.createElement('p');
    const modalImage = document.createElement('img');
    const modalButton = document.createElement('button');


    modalWrapper.className = 'modal--wrapper';
    modalUser.className = 'modal--user';
    modalPlace.className = 'modal--place';
    modalDescription.className = 'modal--description';
    modalButton.className = 'modal--button';
    modalImage.className = 'modal--image';

    modalUser.textContent = imageData.user.name;
    modalPlace.textContent = imageData.user.location;
    modalDescription.textContent = imageData.description;
    modalButton.textContent= 'X';
    
    modalImage.src = imageData.urls.full;
    modalImage.alt = imageData.description;

    modalButton.addEventListener('click', () => {
        modalWrapper.style.opacity = 0;

        setTimeout(() => {
        modalWrapper.style.display = "none";
        }, 1000);}
    );

    modalWrapper.append(modalUser, modalPlace, modalDescription, modalImage, modalButton);

    return modalWrapper;
}

const cardEl = (imageData) => {
    const imageEl = document.createElement('img');

    imageEl.className = 'image';
    imageEl.src = imageData.urls.small;

    imageEl.addEventListener('click', () => {
        const modal = modalEl(imageData);

        rootEl.appendChild(modal);

        setTimeout(() => {
        modal.style.opacity = 1;
        }, 10);

    });

    return imageEl;
}

const cardListEl = () => {
    const cardWrapperEl = document.createElement('div');

    cardWrapperEl.className = 'card--wrapper';

    return cardWrapperEl;
}


// !! LOGIC (variabili/costanti)
const API_URL = "http://api.unsplash.com";
const API_TOKEN = "RWQVy3hR3SDBmiEagO06q--9hknYBWhjbWWyR7oRTd0";
const PAGE_RESULT = "20";
const rootEl = document.querySelector("#root");
const headerWrapper = headerEl();
const list = cardListEl();



// !! INPUT LOGIC
const header = document.createElement('div');
const searchButton = document.createElement('button');
const searchInput = document.createElement('input');

header.className = 'header';
searchButton.className = 'search--button';
searchInput.className = 'search--input';
searchButton.textContent = 'Search';
searchInput.placeholder = 'Type here';


// !! POPOLAMENTO
header.append(headerWrapper, searchInput, searchButton);
rootEl.append(header);


// !! EVENT-LISTENER
searchButton.addEventListener('click', (event) => {
    const searchValue = searchInput.value;
    list.textContent = "";

    fetch(`${API_URL}/search/photos/?client_id=${API_TOKEN}&query=${searchValue}&per_page=${PAGE_RESULT}`)
    .then((res) => res.json())
    .then((data) => {
        const listCards = data.results;

        listCards.map(photo => {
            const cards = cardEl(photo);

            list.append(cards);
            });

        rootEl.append(list);
    });
});