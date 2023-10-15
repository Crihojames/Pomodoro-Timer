const startEl = document.getElementById("start")
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("reset")
const timerEl = document.getElementById("timer")

let interval;
let timeLeft = 200;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTimer = `${minutes.toString(2, "0")}:
    ${seconds.toString().padStart(2, "0")}`;

    timerEl.innerHTML = formattedTimer;
}


function startTimer(){
    interval = setInterval(()=>{
        timeLeft--;
        updateTimer();
        if(timeLeft === 0) {
            clearInterval(interval);
            alert("Ngonga ekoki!");
            timeLeft = 1500;
        }
    }, 1000);
}

function stoptTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer()
}


startEl.addEventListener("click", startTimer)
stopEl.addEventListener("click", stoptTimer)
resetEl.addEventListener("click", resetTimer)