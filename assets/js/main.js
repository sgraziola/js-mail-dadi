/* Ex Mail */
//Chiedi all’utente la sua email. 
const emailElement = prompt("Inserisci la tua email");
//controlla che sia nella lista di chi può accedere
    //-creo array di email 
const validEmails = ["dimaio@gmail.com", "berlusconi@tiscali.it", "prodi@virgilio.it", "letta@gmail.com", "meloni@libero.it", "salvini@fastwebnet.it"];
    //-confronto emailElement con i singoli indici dell'array
let isValid = "Mi dispiace, non fai parte della fantastica classe politica italiana";

for (let i = 0; i < validEmails.length; i++){
    const validEmailEl = validEmails[i];
    //console.log(validEmailEl);
    //stampa un messaggio appropriato sull’esito del controllo. 
        //- If/else a seconda che l'email compaia o meno creo un messaggio
    if(emailElement === validEmailEl){
        isValid = "Complimenti! Sei uno dei nostri fantastici politici.";   
    }
}
console.log(isValid);


/* Soluzione alternativa con .indexof() */
/* let index = validEmails.indexOf(emailElement);
if(index !== -1){
    console.log("Complimenti! Sei uno dei nostri fantastici politici.");
} else {
    console.log("Mi dispiace, non fai parte della fantastica classe politica italiana");
}
 */




/* Ex Dice Game */
//Generare un numero random da 1 a 6 per il giocatore 
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
}