import { wordList } from "./wordList";

let time = 0;

window.addEventListener('keydown', startType);
function startType(e) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {

        /*
        timer.textContent = "0.0";
        countChars.textContent = "0";
        countTypes.textContent = "0";
        kpm.textContent = "0";
        cpm.textContent = "0";
        char.textContent = "";
        num.textContent = "";
        progress.value = 0;
        */
        time = 0;

        makeWord();
        stopInterval();
        timerArray.push(setInterval(startTimer, 100));
        window.addEventListener('keydown', judgeKeys);
    }
}