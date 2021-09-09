/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

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


let numeroCasuale = Math.floor(Math.random() * 100) + 1;

console.log(numeroCasuale);

