import { wordList } from "./wordList.js";

let shuffledWordList = shuffleArray(wordList);
const blocks = document.getElementsByClassName("block");
const alphabet = 'qwertyuiopasdfghjklzxcvbnm';
const word = document.getElementById("word");
let charDict = new Object();
let charList = shuffleArray(alphabet.split(''));

let typeText = "aiueo";
word.value = typeText;

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        keyAssign();
    }
});

function keyAssign () {

    makeRandomDict();

    refreshCharList();

    window.addEventListener('keydown', (e) => {
        e.preventDefault();
        let nextChar = typeText[0];
        if (charDict[e.key] === nextChar) {
            console.log(charDict[e.key], nextChar);
            typeText = typeText.slice(1);
            word.value = typeText;
        }
    });

};

function makeRandomDict () {

    for (let i = 0; i < alphabet.length; i++) {
        charDict[alphabet[i]] = charList[i];
    }
}

function refreshCharList() {

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].textContent = charList[i];

        if (charList[i] === "a" || charList[i] === "i" || charList[i] === "u" || charList[i] === "e" || charList[i] === "o") {
            blocks[i].style.color = "red";
        }
    }
}


function shuffleArray(array) {
    const cloneArray = [...array];

    const result = cloneArray.reduce((_, cur, idx) => {
        let rand = Math.floor(Math.random() * (idx + 1));
        cloneArray[idx] = cloneArray[rand];
        cloneArray[rand] = cur;
        return cloneArray;
    });

    return result;
}








/*
window.addEventListener('keydown', startType);
function startType(e) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {


        timer.textContent = "0.0";
        countChars.textContent = "0";
        countTypes.textContent = "0";
        kpm.textContent = "0";
        cpm.textContent = "0";
        char.textContent = "";
        num.textContent = "";
        progress.value = 0;

        time = 0;

        makeWord();
        stopInterval();
        timerArray.push(setInterval(startTimer, 100));
        window.addEventListener('keydown', judgeKeys);
    }
}

*/