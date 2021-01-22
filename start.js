'use strict';

const openingWrap = document.querySelector(".js-openingWrap");
const gameWrap = document.querySelector(".js-gameWrap");
const submitWrap = document.querySelector(".js-submitWrap");
const startBtn = document.querySelector(".js-startBtn");

const SHOWING_CLASS = "showing";

let isStarted = false;

function handleStartBtn(event) {
    openingWrap.classList.remove(SHOWING_CLASS);
    gameWrap.classList.add(SHOWING_CLASS);
    submitWrap.classList.add(SHOWING_CLASS);
    numInput.focus();
}

(function() {
    openingWrap.classList.add(SHOWING_CLASS);
    gameWrap.classList.remove(SHOWING_CLASS);
    startBtn.addEventListener("click", handleStartBtn);
    window.addEventListener("keyup", function(event) {
        if (!isStarted && event.key === 'Enter') {
            startBtn.click();
        }
        isStarted = true;
    });
})();