//import { wordList } from "./wordList";

const blocks = document.getElementsByClassName("block");
const alphabet = 'qwertyuiopasdfghjklzxcvbnm';

let charDict = new Object();
for (let i = 0; i < alphabet.length; i++) {
    charDict[alphabet[i]] = alphabet[i];
}
let charList = shuffleArray(alphabet.split(''));


refreshCharList();
keyAssignToRandomPlace();

function shuffleArray(array) {
    const cloneArray = [...array];

    const result = cloneArray.reduce((_, cur, idx) => {
        let rand = Math.floor(Math.random() * (idx + 1));
        cloneArray[idx] = cloneArray[rand];
        cloneArray[rand] = cur;
        return cloneArray;
    });

    for (let i = 0; i < result.length; i++) {
        charDict[i] = result[i];
    }

    return result;
}

function refreshCharList() {
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].textContent = charList[i];

        if (charList[i] === "a" || charList[i] === "i" || charList[i] === "u" || charList[i] === "e" || charList[i] === "o") {
            blocks[i].style.color = "red";
        }
    }
}

function keyAssignToRandomPlace() {
    for (let i = 0; i < blocks.length; i++) {
        window.addEventListener('keydown', (e) => {
            return charDict[e.key];
        })
    }
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