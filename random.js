function genRandom() {
    const number = Math.floor(Math.random() * 9);
    return number + 1;
}

function randomNumber() {
    let number = genRandom();
    const ranNum1 = number;
    while (number === ranNum1) {
        number = genRandom();
    }
    const ranNum2 = number;
    while (number === ranNum1 || number === ranNum2) {
        number = genRandom();
    }
    const ranNum3 = number;
    while (number === ranNum1 || number === ranNum2 || number === ranNum3) {
        number = genRandom();
    }
    const ranNum4 = number;
    return Number(String(ranNum1) + String(ranNum2) + String(ranNum3) + String(ranNum4));
}