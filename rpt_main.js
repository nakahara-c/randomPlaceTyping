//import { wordList } from "./wordList";

let time = 0;



const blocks = document.getElementsByClassName("block");
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let charList = alphabet.split('');
const shuffleArray = (array) => {
    const cloneArray = [...array];
  
    const result = cloneArray.reduce((_,cur,idx) => {
      let rand = Math.floor(Math.random() * (idx + 1));
      cloneArray[idx] = cloneArray[rand]
      cloneArray[rand] = cur;
      return cloneArray
    })
  
    return result;
}

refreshCharList();

function refreshCharList() {
    charList = shuffleArray(charList);

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].textContent = charList[i];

        if (charList[i] === "a" || charList[i] === "i" || charList[i] === "u" || charList[i] === "e" || charList[i] === "o") {
            blocks[i].style.color = "red";
        }
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