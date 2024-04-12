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

