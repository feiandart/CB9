// !! ----- ESERCIZIO #1 ----- !! //

/* function averageNum(nums) {
        const addition = (nums) => nums[0] + nums[1] + nums[2];
        const division = (addition) => addition / nums.length;

    if (nums.every(num => !isNaN(num))) {
        const sum = addition(nums);
        return `La media è: ${division(sum)}`;
    } else {
        return "Non hai inserito dei numeri!";
    }
}

const firstNum = parseInt(prompt("Inserisci il primo numero:"));
const secondNum = parseInt(prompt("Inserisci il secondo numero:"));
const thirdNum = parseInt(prompt("Inserisci il terzo numero:"));
const nums = [firstNum, secondNum, thirdNum];
let result = averageNum(nums);

alert(result); */



// !! ----- ESERCIZIO #2 ----- !! //

/* const imgGen = () => {
    const imgEl = document.createElement('img');

    imgEl.src = "https://picsum.photos/400/400";
    imgEl.alt = "Questa è un'immagine che cambia ogni volta che la pagina si aggiorna.";

    return imgEl;
}

const rootEl = document.querySelector(".root");

rootEl.append(imgGen()); */


// !! ----- ESERCIZIO #3 ----- !! //
const mainTitle = document.querySelector(".mainTitle");

mainTitle.addEventListener("click", () => {
    const color = "white";
    const colorBg = "black";
    const borderRadius = "2em";
    const padding = "0em 2em";

    mainTitle.style.backgroundColor = colorBg;
    mainTitle.style.color = color;
    mainTitle.style.borderRadius = borderRadius;
    mainTitle.style.padding = padding;
 });