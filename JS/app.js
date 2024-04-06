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
// console.log(formElement);

const lavoriElement = document.getElementById("lavori");
// console.log(lavoriElement);

const sconti = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
// console.log(sconti);

// const codicePromo = document.getElementById('codicepromo');
// console.log(codicePromo);

const buttonElement = document.getElementById("bottone");
// console.log(buttonElement);

const risultatoElement = document.getElementById('risultato');
// console.log(risultatoElement);

formElement.addEventListener('submit', function (event) {
    event.preventDefault();

    // const form = formElement.value;
    // // console.log(form);
    // function name(params) {
        
    // }
    // Raccolgo il value delle options dalla select
    const lavori = document.getElementById("lavori").value;
    // console.log(lavori);
    let prezzoOra = 0;
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

    console.log(prezzoOra);


    // Calcolo il prezzo base in base alle ore
    // costoOrario * ore
    
    prezzoBase = prezzoOra * ore;
    console.log(prezzoBase);

    // SE il codice inserito è valido 
    // - ALLORA applico lo sconto
    // ALTRIMENTI 
    // - avvisiamo che il codice non è valido
    
    for (let i = 0; i < sconti.length; i++) {
        console.log(sconti[i]);

        const codicePromo = document.getElementById('codicepromo');
        const promo = codicePromo.value
        if (sconti.includes(promo)) {
            console.log('Codice valido');
        } else {
            console.log('Codice non valido');
        }
    }

    // Stampo il prezzo nella pagina
    // Utilizzo il risultato del prezzo in base al tipo di lavoro selezionato
    risultatoElement.innerHTML = 'Prezzo Finale';

    // const lavori = lavoriElement.value;



    // console.log('submit', lavori);
})
