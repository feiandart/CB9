// !! ----- ESERCIZIO #1 ----- !! //

function averageNum(nums) {
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

alert(result);



