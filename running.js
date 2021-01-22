'use strict';

const condition = document.querySelector(".js-condition");
const numForm = document.querySelector(".js-numForm");
const numInput = numForm.getElementsByTagName("input")[0];
const scoreTable = document.querySelector(".js-scoreTable");

const ranNum = randomNumber();

let count = 0;

function getB(num) {
    const nums = String(num).split("");
    const ranNums = String(ranNum).split("");
    let numOfB = 0;
    for (let a = 0; a < 4; a++) {
        for (let b = 0; b < 4; b++) {
            if (a !== b && nums[a] === ranNums[b]) {
                numOfB = numOfB + 1;
            }
        }
    }
    return numOfB;
}

function getS(num) {
    const nums = String(num).split("");
    const ranNums = String(ranNum).split("");
    let numOfS = 0;
    for (let i = 0; i < 4; i++) {
        if (nums[i] === ranNums[i]) {
            numOfS = numOfS + 1;
        }
    }
    return numOfS;
}

function getResult(num) {
    count = count + 1;
    const tr = document.createElement("tr");
    const inningTd = document.createElement("td");
    const numTd = document.createElement("td");
    const sTd = document.createElement("td")
    const bTd = document.createElement("td")
    const oTd = document.createElement("td")
    tr.classList.add("td");
    inningTd.innerText = count;
    numTd.innerText = num;
    sTd.innerText = getS(num);
    bTd.innerText = getB(num);
    oTd.innerText = 4 - (getS(num) + getB(num));
    tr.appendChild(inningTd);
    tr.appendChild(numTd);
    tr.appendChild(sTd);
    tr.appendChild(bTd);
    tr.appendChild(oTd);
    scoreTable.appendChild(tr);
    if (num !== ranNum) {
        condition.innerText = `${count + 1} inning`;
    } else {
        condition.innerText = `Congrats! You won the game!\nThe answer was ${ranNum}!`;
        numForm.removeEventListener("submit", handleSubmitNum);
        numInput.blur();
        submitWrap.classList.remove(SHOWING_CLASS);
    }
}

function filtering(str) {
    const items = str.split("");
    for (let i = 0; i < items.length; i++) {
        if (Number(items[i]) === 0 ||
            Number(items[i]) === 1 ||
            Number(items[i]) === 2 ||
            Number(items[i]) === 3 ||
            Number(items[i]) === 4 ||
            Number(items[i]) === 5 ||
            Number(items[i]) === 6 ||
            Number(items[i]) === 7 ||
            Number(items[i]) === 8 ||
            Number(items[i]) === 9)
        {
            return Number(str);
        } else {
            return null;
        }
    }
}

function handleSubmitNum(event) {
    event.preventDefault();
    const receivedStr = event.target.children[0].value;
    const receivedNum = filtering(receivedStr);
    let zero;
    if (receivedNum !== null) {
        if (receivedStr.length !== 4) {
            alert("Please write 4 numbers.");
            numInput.value = "";
        } else {
            const receivedStrs = receivedStr.split("");
            if (receivedStrs[0] !== receivedStrs[1] &&
                receivedStrs[0] !== receivedStrs[2] &&
                receivedStrs[0] !== receivedStrs[3] &&
                receivedStrs[1] !== receivedStrs[2] &&
                receivedStrs[1] !== receivedStrs[3] &&
                receivedStrs[2] !== receivedStrs[3])
            {
                zero = false;
                for (let i = 0; i < 4; i++) {
                    if (receivedStr.charAt(i) === "0") {
                        zero = true;
                    }
                }
                if (!zero) {
                    getResult(receivedNum);
                    numInput.value = "";
                } else {
                    alert("Please write in numbers from 1 to 9.");
                    numInput.value = "";
                }
            } else {
                alert("Please use numbers from 1 to 9 once each.");
                numInput.value = "";
            }
        }
    } else {
        alert("Please write 4 numbers.");
        numInput.value = "";
    }
}

(function() {
    numForm.addEventListener("submit", handleSubmitNum);
    condition.innerText = "1 inning";
})();