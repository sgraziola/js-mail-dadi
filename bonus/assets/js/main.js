/* Ex Mail */
//Chiedi all’utente la sua email. 
const emailElement = document.querySelector("input");
const invioBtn = document.querySelector("button");
const validEmails = ["dimaio@gmail.com", "berlusconi@tiscali.it", "prodi@virgilio.it", "letta@gmail.com", "meloni@libero.it", "salvini@fastwebnet.it"];
const resultEl = document.querySelector(".result");
const diceContainer = document.querySelector(".dice_container");

invioBtn.addEventListener("click", function(){
    const validEmail = emailElement.value;
    //console.log(validEmail);
    let isValid = "Mi dispiace, non fai parte della fantastica classe politica italiana";

    //-confronto emailElement con i singoli indici dell'array
    for (let i = 0; i < validEmails.length; i++){
    const validEmailEl = validEmails[i];
    //console.log(validEmailEl);
    //stampa un messaggio appropriato sull’esito del controllo. 
        //- If/else a seconda che l'email compaia o meno creo un messaggio
    if(validEmail === validEmailEl){
        isValid = "Complimenti! Sei uno dei nostri fantastici politici.";
        diceContainer.style.display = "block"; 
    }
    }

    resultEl.innerHTML= (isValid);
})




/* Ex Dice Game */
const playerNum = document.querySelector(".player_result");
const pcNum = document.querySelector(".pc_result");
const winnerEl = document.querySelector(".winner");
//Generare un numero random da 1 a 6 per il giocatore 
const playerNumEl = Math.floor(Math.random()*6) + 1;
//Generare un numero random da 1 a 6 per per il computer.
const pcNumEl = Math.floor(Math.random()*6) + 1;
//stampare i risultati su DOM
playerNum.innerHTML = playerNumEl;
pcNum.innerHTML = pcNumEl;
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
if(playerNumEl === pcNumEl){
    winnerEl.innerHTML = ("Avete pareggiato!");
} else if (playerNumEl < pcNumEl){
    winnerEl.innerHTML = ("Ha vinto il computer!");
} else {
    winnerEl.innerHTML = ("Hai vinto!");
} 