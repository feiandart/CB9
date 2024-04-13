// !! ----- ESERCIZIO #1 ----- !! //

function vowelCount(yourSentence) {
    let vocals = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (let characters of yourSentence) {
        if ('aeiouàèéìòù'.includes(characters)) {
            vocals[characters]++;
        }
    }
    let totalVocals = vocals.a + vocals.e + vocals.i + vocals.o + vocals.u;
    return `Nella tua frase ci sono: ${vocals.a} A, ${vocals.e} E, ${vocals.i} I, ${vocals.o} O e ${vocals.u} U, per un totale di ${totalVocals} vocali! La tua frase completa era: "${yourSentence}".`;
}

let yourSentence = prompt("Dimmi una frase e ti conto le vocali!");
let countResult = vowelCount(yourSentence);
alert(countResult);



// !! ----- ESERCIZIO #2 ----- !! //

function maxNum(totalNums) {
    for(num in totalNums) {
        return Math.max(...totalNums.map(totalNums => totalNums));
    }
}

const firstNum = prompt("Inserisci il primo numero:");
const secondNum = prompt("Inserisci il secondo numero:");
const thirdNum = prompt("Inserisci il terzo numero:");
const totalNums = [firstNum, secondNum, thirdNum]
let higherNum = maxNum(totalNums);

console.log("Il numero più alto è:", higherNum);



// !! ----- ESERCIZIO AVANZATO #1 ----- !! //

function addSalary(selectSalary) {
    const raiseSalary = selectSalary.map(person => {
        return { ...person, salario: person.salario * 1.1 };
    })
    return raiseSalary;
}

const people = [
    { nome: "Marco", salario: 2000 },
    { nome: "Luca", salario: 4000 },
    { nome: "Lia", salario: 2500 }
];
let selectSalary = people.filter(person => (person.salario < 3000));
let updatedSalary = addSalary(selectSalary);

console.log(updatedSalary);



// !! ----- ESERCIZIO AVANZATO #2 ----- !! //

function calculator(num1, num2, mathSign) {

    const addition = (num1, num2) => num1 + num2;
    const substraction = (num1, num2) => num1 - num2;
    const multiplication = (num1, num2) => num1 * num2;
    const division = (num1, num2) => num1 / num2;

    switch(mathSign) {
        case "+" :
            operation = addition(num1, num2);
            break;
        case "-" :
            operation = substraction(num1, num2);
            break;
        case "*" :
            operation = multiplication(num1, num2);
            break;
        case "/" :
            operation = division(num1, num2);
        default :
            alert("Non so cosa mi stai chiedendo... Sicuro di star usando i giusti simboli o numeri?");
    }

    return operation;
}

alert("Ciao! Sono la tua calcolatrice di fiducia.");
let num1 = parseInt(prompt("Inserisci il primo numero:"));
let num2 = parseInt(prompt("Inserisci il secondo numero:"));
let mathSign = prompt("Inserisci il tipo di operazione:");
let result = calculator(num1, num2, mathSign);

alert("Il tuo risultato è: " + result);