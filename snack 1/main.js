/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */

const arrayBici = [
    {
        "nome" : "Atala",
        "peso" : 13
    },
    {
        "nome" : "Graziella",
        "peso" : 22
    },
    {
        "nome" : "Bianchi",
        "peso" : 10
    }
];

let biciLeggera = arrayBici[0];

for (let i = 0; i < arrayBici.length; i++) {
    
    if (arrayBici[i].peso < biciLeggera.peso){
        biciLeggera = arrayBici[i];
    }   
}

console.log(biciLeggera.peso);