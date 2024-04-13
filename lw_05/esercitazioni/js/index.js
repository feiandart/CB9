// !! ----- ESERCIZIO #1 ----- !! //

/* function vowelCount(yourSentence) {
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
alert(countResult); */



// !! ----- ESERCIZIO #2 ----- !! //

/* function maxNum(totalNums) {
    for(num in totalNums) {
        return Math.max(...totalNums.map(totalNums => totalNums));
    }
}

const num1 = prompt("Inserisci il primo numero:");
const num2 = prompt("Inserisci il secondo numero:");
const num3 = prompt("Inserisci il terzo numero:");
const totalNums = [num1, num2, num3]
let result = maxNum(totalNums);

console.log("Il numero più alto è:", result); */



// !! ----- ESERCIZIO AVANZATO #1 ----- !! //

/* function addSalary(selectSalary) {
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

console.log(updatedSalary); */