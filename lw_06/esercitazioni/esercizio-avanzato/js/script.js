// !! FUNZIONI !! //
const cardEl = (data) => { //creazione singola card
    const cardWrapper = document.createElement('div');
    const cardTitle = document.createElement('h1');
    const cardContent = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardDesc = document.createElement('div');
    const cardTemp = document.createElement('h3');
    const cardWeather = document.createElement('p');

    cardWrapper.className = "wrapper";
    cardTitle.className = "title";
    cardTitle.textContent = data.city;
    cardContent.className = "content";
    cardImg.className = "image";
    cardImg.src = data.imageUrl;
    cardImg.alt = data.weatherConditions; // deve rispecchiare il tempo
    cardDesc.className = "desc";
    cardTemp.className = "temp";
    cardTemp.textContent = `${data.temperature}°C`;
    cardWeather.className = "weather";
    cardWeather.textContent = data.weatherConditions;

    cardDesc.append(cardTemp, cardWeather);
    cardContent.append(cardImg, cardDesc);
    cardWrapper.append(cardTitle, cardContent);

    return cardWrapper;
}

const cardList = () => {
    const cardListWrapper = document.createElement('li');

    cardListWrapper.className = "cardList";

    return cardListWrapper;
}

///////////////////////////////////////////////////////////////////////////////////////////

// !! COSTANTI !! //
const weatherData = [
    {
        city: "New York",
        temperature: 20,
        weatherConditions: "Sunny",
        imageUrl: "https://source.unsplash.com/200x200/?new-york"
    },
    {
        city: "London",
        temperature: 15,
        weatherConditions: "Cloudy",
        imageUrl: "https://source.unsplash.com/200x200/?london"
    },
    {
        city: "Paris",
        temperature: 18,
        weatherConditions: "Rainy",
        imageUrl: "https://source.unsplash.com/200x200/?paris"
    },
    {
        city: "Tokyo",
        temperature: 25,
        weatherConditions: "Partly cloudy",
        imageUrl: "https://source.unsplash.com/200x200/?tokyo"
    },
    {
        city: "Rome",
        temperature: 22,
        weatherConditions: "Sunny",
        imageUrl: "https://source.unsplash.com/200x200/?rome"
    },
    {
        city: "Sydney",
        temperature: 28,
        weatherConditions: "Clear",
        imageUrl: "https://source.unsplash.com/200x200/?sydney"
    },
    {
        city: "Berlin",
        temperature: 16,
        weatherConditions: "Partly cloudy",
        imageUrl: "https://source.unsplash.com/200x200/?berlin"
    },
    {
        city: "Moscow",
        temperature: 10,
        weatherConditions: "Snowy",
        imageUrl: "https://source.unsplash.com/200x200/?moscow"
    },
    {
        city: "Los Angeles",
        temperature: 25,
        weatherConditions: "Sunny",
        imageUrl: "https://source.unsplash.com/200x200/?los-angeles"
    },
    {
        city: "Hong Kong",
        temperature: 30,
        weatherConditions: "Thunderstorms",
        imageUrl: "https://source.unsplash.com/200x200/?hong-kong"
    }
];
const rootEl = document.querySelector("#root");
const weatherList = cardList();
weatherData.map(weather => weatherList.append(cardEl(weather)));

///////////////////////////////////////////////////////////////////////////////////////////

// !! POPOLAMENTO !! //
rootEl.append(weatherList);


///////////////////////////////////////////////////////////////////////////////////////////

// !! EVENT-LISTENER !! //