// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.


// definisco un array di partenza su cui andrò a lavorare poi
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const num1 = 3;
const num2 = 8;


const finalArray = array.filter((elemento, indice) => {
    
    // se l'indice dell'elemtento dell array  è compreso tra i valori num1 e num2
    if(indice>=num1 && indice<=num2){
        
       return true;
    }
    return false;
}
);

console.log(finalArray);









