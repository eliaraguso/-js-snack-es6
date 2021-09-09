/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */


// creo un array di oggetti di squadre

let squadre = [
    {
        "nome" : "Gamba Osaka",
        "puntiFatti" : 0,
        "falliSubiti" : 0
    },
    {
        "nome" : "Yokohama F.Marinos",
        "puntiFatti" : 0,
        "falliSubiti" : 0
    },
    {
        "nome" : "Urawa Red Diamonds",
        "puntiFatti" : 0,
        "falliSubiti" : 0
    },
    {
        "nome" : "Sanfrecce Hiroshima",
        "puntiFatti" : 0,
        "falliSubiti" : 0
    },
    {
        "nome" : "Hokkaido Consadole Sapporo",
        "puntiFatti" : 0,
        "falliSubiti" : 0
    },
];


// definisco una funzione per creare numeri casuali tra min e max

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  
// definisco il nuovo array

let nuovoArray = [];



// creo un ciclo per attraversare l'array di squadre
for (let i = 0; i < squadre.length; i++) {

    // modifico i valori dei punti e dei falli con la funzione  appena creata
    squadre[i]["puntiFatti"] = getRndInteger(1, 400);
    squadre[i]["falliSubiti"] = getRndInteger(1, 100);


    // riempio il nuovo array solamente con il nome delle squadre e i falli subiti
    nuovoArray.push(squadre[i]["nome"]);
    nuovoArray.push(squadre[i]["falliSubiti"]);



    
    
}
console.log(squadre);

console.log(nuovoArray);












