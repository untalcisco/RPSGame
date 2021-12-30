const ROCK = "cdn-icons-png.flaticon.com/512/672/672632";
const PAPER = "img.icons8.com/fluency/344/matt-paper";
const SCISSORS = "img.icons8.com/office/344/scissors";

const TIE = 0;
const WIN = 1;
const LOST = 2;

let isPlaying = false;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userOption = document.getElementById("uOption");
const machineOption = document.getElementById("iaOption");
const text = document.getElementById("text");

rock.addEventListener("click", ()=>{
    play(ROCK);
});
paper.addEventListener("click",()=>{
    play(PAPER);
});
scissors.addEventListener("click",()=>{
    play(SCISSORS);
});

function play(userPick){
    if(isPlaying) return;

    isPlaying = true;

    userOption.src = "https://" + userPick + ".png";

    text.innerHTML = "Elegiré una opción! :D"

    const interval = setInterval(function(){
        const machinePick = calcMachineOption();
        machineOption.src = "https://" + machinePick + ".png"
    }, 40);

setTimeout(function() {

    clearInterval(interval);

    const machinePick = calcMachineOption();
    const result = calcResult(userPick, machinePick);

    machineOption.src = "https://" + machinePick + ".png"

    switch(result){
        case TIE:
            text.innerHTML = "¡Es un empate! 😮"
            break;
        case WIN: 
            text.innerHTML = "¡Haz ganado! 🙂"
            break;
        case LOST:
            text.innerHTML = "¡Haz perdido! 🥺"
            break;
    }
    isPlaying = false;
}, 500);
}

function calcMachineOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

function calcResult(userPick, machinePick){
    if(userPick === machinePick){
        return TIE;
    }
    else if(userPick === ROCK){
        if(machinePick === PAPER){
            return LOST;
        } 
        if(machinePick === SCISSORS){
            return WIN;
        }
    }
    else if(userPick === PAPER){
        if(machinePick === ROCK){
            return WIN;
        }
        if(machinePick === SCISSORS){
            return LOST;
        }
    }
    else if(userPick === SCISSORS){
        if(machinePick === ROCK){
            return LOST;
        }
        if(machinePick === PAPER){
            return WIN;
        }
    }
}