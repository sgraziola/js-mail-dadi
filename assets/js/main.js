/* Ex Mail */
//Chiedi all’utente la sua email. 
const emailElement = prompt("Inserisci la tua email");
//controlla che sia nella lista di chi può accedere
    //-creo array di email 
const validEmails = ["dimaio@gmail.com", "berlusconi@tiscali.it", "prodi@virgilio.it", "letta@gmail.com", "meloni@libero.it", "salvini@fastwebnet.it"];
    //-confronto emailElement con i singoli indici dell'array
for (let i = 0; i < validEmails.length; i++){
    const validEmailEl = validEmails[i];
    //console.log(validEmailEl);
    //stampa un messaggio appropriato sull’esito del controllo. 
        //- If/else a seconda che l'email compaia o meno creo un messaggio
    if(emailElement === validEmailEl){
        console.log("Complimenti! Sei uno dei nostri fantastici politici.");
    } else {
        console.log("Mi dispiace, non fai parte della fantastica classe politica italiana");
    }
}