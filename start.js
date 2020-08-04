const openingWrap = document.querySelector(".js-openingWrap");
const gameWrap = document.querySelector(".js-gameWrap");
const submitWrap = document.querySelector(".js-submitWrap");
const startBtn = document.querySelector(".js-startBtn");
const dummyInput = document.querySelector(".js-dummyInput");

const SHOWING_CLASS = "showing";

function handleStartBtn(event) {
    openingWrap.classList.remove(SHOWING_CLASS);
    gameWrap.classList.add(SHOWING_CLASS);
    dummyInput.blur();
    submitWrap.classList.add(SHOWING_CLASS);
    numInput.focus();
}

function init() {
    openingWrap.classList.add(SHOWING_CLASS);
    gameWrap.classList.remove(SHOWING_CLASS);
    startBtn.addEventListener("click", handleStartBtn);
    dummyInput.focus();
    dummyInput.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            startBtn.click();
        }
    });
}
init();
