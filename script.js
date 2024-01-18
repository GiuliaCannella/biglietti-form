/*
    Traccia
    Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
    L'output del prezzo finale va messo fuori con massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.


    MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: 
                 usando esclusivamente due input e un bottone (non stilizzati), 
                 realizziamo le specifiche scritte sopra. 
                 La risposta finale (o output) sarà anch’essa da scrivere in console.

    MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante 
                 allora realizzeremo un form (non tag form) in pagina in cui l’utente
                 potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
                 Il recap dei dati e l'output del prezzo finale, andranno quindi 
                 stampati in pagina (il prezzo dovrà essere formattato con 
                 massimo due decimali, per indicare i centesimi sul prezzo).

    BONUS:
        1. Randomizzare un numero per la carrozza dell'utente
        2. Randomizzare numero del biglietto utente
        3. Utilizzare select invece che input per età utente

    Passaggi:
    1 creo 2 input e bottone
    2 Prendere elementi dal DOM

*/

const btn = document.getElementById("btn");
const prezzoKm = 0.21;

btn.addEventListener("click", function () {
  const inputKm = document.getElementById("inputKm");
  const inputEta = document.getElementById("inputEta");
  const km = inputKm.value;
  const eta = inputEta.value;
  console.log(km, "KM");
  console.log(eta, "Eta");

  let totalePrezzo = prezzoKm * km;

  if (eta < 18 && eta !== 0) {
    totalePrezzo = totalePrezzo - 20 / 100;
  } else if (eta > 65) {
    totalePrezzo = totalePrezzo - 40 / 100;
  }
  totalePrezzo = totalePrezzo.toFixed(2);

  const paragrafo = document.getElementById("paragrafo");

  let stringaFinale = "";
  if (eta < 18 && eta !== 0) {
    stringaFinale = `Il prezzo finale del biglietto per Under 18 è: ${totalePrezzo}`;
  } else if (eta > 65) {
    stringaFinale = `Il prezzo finale del biglietto over 65 è: ${totalePrezzo}`;
  } else if (km === 0) {
    stringaFinale = `Nessun viaggio in programma per oggi`;
  } else if (isNaN(km) && isNaN(eta)) {
    stringaFinale = `errore di validazione`;
  } else if (eta === 0) {
    stringaFinale = `non è consentito viaggiare ai neonati!`;
  } else {
    stringaFinale = `Il prezzo finale del biglietto è: ${totalePrezzo}`;
  }

  paragrafo.innerText = stringaFinale;
});
