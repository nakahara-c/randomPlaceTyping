import { wordList } from "./wordList.js";


const blocks = document.getElementsByClassName("block");
const alphabet = 'qwertzuiopasdfghjklyxcvbnm';
const word = document.getElementById("word");
let charDict = new Object();
let charList = new Array();
let shuffledWordList = new Array();
let typeText = "";


window.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key === 'Enter' || e.key === 'Escape') {
        keyAssign(e);
    } else {
        let nextChar = typeText[0];
        if (charDict[e.key] === nextChar) {
            console.log(charDict[e.key], nextChar);
            typeText = typeText.slice(1);
            word.value = typeText;
        }
    }
});

function keyAssign (e) {

    init();
    makeRandomDict();
    refreshCharList();

};

function init() {
    charList = shuffleArray(alphabet.split(''));
    shuffledWordList = shuffleArray(wordList);
    typeText = shuffledWordList.slice(0, 400).join(" ");
    word.value = typeText;
}

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
        } else {
            blocks[i].style.color = "";
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

function startType(e) {

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









