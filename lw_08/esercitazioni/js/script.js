const containerGen = () => {
  const container = document.createElement("div");

  container.className = "container";

  return container;
};

const titleGen = (data) => {
  const title = document.createElement("h1");

  title.className = "title";
  title.textContent = data.title;

  return title;
};

const imgGen = (data) => {
  const image = document.createElement("img");

  image.className = "image";
  image.src = data.image;

  return image;
};

const descriptionGen = (data) => {
  const desc = document.createElement("p");

  desc.className = "description";
  desc.textContent = data.description;

  return desc;
};

const errorEl = () => {
  const errorText = document.createElement("h1");
  errorText.textContent = "Mi dispiace, qualcosa è andato storto! Prova a ricaricare.";
  errorText.className = "title";
  return errorText;
};

const ROOT_EL = document.querySelector(".root");
const header = containerGen();
const errorAlert = errorEl();

fetch("https://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((data) => {
    const titleEl = titleGen(data);
    const imgEl = imgGen(data);
    const descriptionEl = descriptionGen(data);

    header.append(titleEl, imgEl, descriptionEl);
    ROOT_EL.append(header);
  })
  .catch((error) => {
    header.append(errorAlert);
    ROOT_EL.append(header);
  });
