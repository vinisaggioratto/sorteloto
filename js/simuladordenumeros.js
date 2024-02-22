
function randomNumbers(start, end) {
    let numbers = [];

    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
        while (numbers.includes(randomNumber)) {
            randomNumber + 1
        }
        numbers.push(randomNumber);
    }
    return numbers;
}

// Exemplo de uso da função
let startNumber = 1;
let endNumber = 60;
let randomNumbersArray = randomNumbers(startNumber, endNumber);
randomNumbersArray.sort(function (a, b) {
    return a - b;
});

console.log(randomNumbersArray);
