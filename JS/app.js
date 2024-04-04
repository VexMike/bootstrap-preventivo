console.log('MILESTONE 1');

// Al click dell'utente su "Calcola preventivo" il sito stampa il prezzo finale

// Ore richieste per il progetto

const lavoriElement = document.getElementById("lavori");
console.log(lavoriElement);

const ore = 10;  // Number



// Prendo dal DOM gli elementi che mi servono per gestire il form
const buttonElement = document.getElementById("bottone");
console.log(buttonElement);

const formElement = document.getElementById("form-commissioni");
console.log(formElement);



// Chiedere all'utente la commissione da eseguire



const sconti = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
console.log(sconti);

// Calcolare il preventivo finale che sarà = prezzo base - sconto

formElement.addEventListener('submit', function (event) {
    event.preventDefault();

    // SE utente 1a
    // ALTRIMENTI SE 2a
    // ALTRIMENTI 3a
    
    // Calcolo il prezzo base in base alle ore
    // costoOrario * ore
    
    // SE il codice inserito è valido 
    // - ALLORA applico lo sconto
    // ALTRIMENTI 
    // - avvisiamo che il codice non è valido
    
    // Stampo il prezzo nella pagina

    // const lavori = lavoriElement.value;



    console.log('submit', lavori);
})
