 
// ----------- ESERCIZIO #1 ----------- //
// già incluso di esercizio avanzato #1

let userBirth = prompt ("Inserisci la tua età:");

if (userBirth === "01/01/1990") {
    console.log("Buon compleanno! 🎁");
} else {
    console.log("Non è ancora il tuo compleanno!");
} 



// ----------- ESERCIZIO #2 ----------- //
// avrei potuto farlo con una sola costante, ma volevo vedere se riuscivo a combinarne due...

const dailyHours = [
    "06.00",
    "08.00",
    "10.00",
    "12.00",
    "14.00",
    "16.00",
    "18.00",
    "20.00",
    "22.00",
    "24.00"
]

const toDoList = [
    "Ora di svegliarsi!",
    "Magari anche fare colazione?",
    "Potrebbe essere utile fare esercizio fisico.",
    "Oppure potrei riposare di nuovo...",
    "E se invece cucinassi?",
    "Alla fine ho ordinato al take-away...",
    "Dovrei davvero mettermi a lavorare, adesso.",
    "Ma non è troppo tardi? Ormai meglio cenare!",
    "Sono stanca, a questo punto potrei guardare un film...",
    "Ora di andare a dormire, buonanotte!"
]

for (let list = 0; list > dailyHours.length; list++) {
    console.log(dailyHours[list] + ") " + toDoList[list]);
} 



// ----------- ESERCIZIO AVANZATO #2 ----------- //
// hai detto di essere creativi, quindi l'ho fatta interamente interattiva senza console.log

alert ("Ciao! Io sono la tua calcolatrice. Sei pronto a divertirti?");
let firstNumber = parseInt(prompt ("Inserisci il primo numero:"));
let mathSign = prompt ("Inserisci il tipo di operazione (+, -, *, /):");
let secondNumber = parseInt(prompt ("Inserisci il secondo numero:"));


if (mathSign == "+") {
    alert("Il risultato è: " + (firstNumber + secondNumber));
} else if (mathSign == "-") {
    alert("Il risultato è: " + (firstNumber - secondNumber));
} else if (mathSign == "*") {
    alert("Il risultato è: " + (firstNumber * secondNumber));
} else if (mathSign == "/") {
    alert("Il risultato è: " + (firstNumber / secondNumber));
} else {
    alert("Operazione non valida! Aggiorna e ricomincia.");
}