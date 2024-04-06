console.log('MILESTONE 1');

// Al click dell'utente su "Calcola preventivo" il sito stampa il prezzo finale

// const corsi = [
//     {
//       nome: "Backend",
//       prezzo: 20.50,
//     },
//     {
//       nome: "Frontend",
//       prezzo: 15.30,
//     },
//     {
//       nome: "Analysis",
//       prezzo: 33.60,
//     },
//   ];
// console.log(corsi);

const ore = 10;  // Number

// Prendo dal DOM gli elementi che mi servono per gestire il form

const formElement = document.getElementById("form-commissioni");

const lavoriElement = document.getElementById("lavori");

const sconti = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

const codicePromo = document.getElementById('codicepromo');

const buttonElement = document.getElementById("bottone");

const risultatoElement = document.getElementById('risultato');

// Utilizzo un form e lo gestisco applicando la funzione evento submit

formElement.addEventListener('submit', function (event) {
    event.preventDefault();

    // Raccolgo il value delle options dalla select
    const lavori = document.getElementById("lavori").value;
    // console.log(lavori);

    // Assegno il prezzoOra ad una variabile con valore 0
    let prezzoOra = 0;

    // Aggiungo i value ai prezzi * ore
    // SE utente seleziona value '1' --> 20.50
    // ALTRIMENTI SE seleziona value '2' --> 15.30
    // ALTRIMENTI SE seleziona value '3' --> 33.60
    if (lavori === '1') {
        prezzoOra = 20.50;
    } else if (lavori === '2') {
        prezzoOra = 15.30;
    } else if (lavori === '3') {
        prezzoOra = 33.60;
    }

    // Stampo prezzoOra
    console.log(prezzoOra);

    // Calcolo il prezzo base in base alle ore e lo assegno ad una variabile
    let prezzoBase = prezzoOra * ore; // Number

    // Stampo prezzoBase
    console.log(prezzoBase);

    // Inserisco Validatore Sconto
    // SE il codice inserito è valido 
    // - ALLORA applico lo sconto
    // ALTRIMENTI 
    // - avvisiamo che il codice non è valido
    
    // Prendo il value dal DOM e lo assegno ad una variabile
    let sconto = codicePromo.value;

    if (sconti.includes(sconto)) {
        sconto = 0.25;
    } else {
        
    }

    const scontoApplicato = prezzoBase * sconto; // Number

    const prezzoFinale = prezzoBase - scontoApplicato;
    console.log(prezzoFinale);
    // Stampo il prezzo nella pagina
    // Utilizzo il risultato del prezzo in base al tipo di lavoro selezionato
    risultatoElement.innerHTML = `${prezzoFinale.toFixed(2)} &euro;`;
    console.log(prezzoFinale);

})
