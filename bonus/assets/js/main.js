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
    
    //-confronto emailElement con i singoli indici dell'array
    for (let i = 0; i < validEmails.length; i++){
    const validEmailEl = validEmails[i];
    //console.log(validEmailEl);
    //stampa un messaggio appropriato sull’esito del controllo. 
        //- If/else a seconda che l'email compaia o meno creo un messaggio
    if(validEmail === validEmailEl){
        resultEl.innerHTML=("Complimenti! Sei uno dei nostri fantastici politici.");
        diceContainer.style.display = "flex";
        break; 
    } else {
        resultEl.innerHTML=("Mi dispiace, non fai parte della fantastica classe politica italiana");
    }
    }

})




/* Ex Dice Game */
/* //Generare un numero random da 1 a 6 per il giocatore 
const playerNum = Math.floor(Math.random()*6) + 1;
console.log(playerNum);
//Generare un numero random da 1 a 6 per per il computer.
const pcNum = Math.floor(Math.random()*6) + 1;
console.log(pcNum);
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
if(playerNum === pcNum){
    console.log("Avete pareggiato!");
} else if (playerNum < pcNum){
    console.log("Ha vinto il computer");
} else {
    console.log("Ha vinto il giocatore");
}  */