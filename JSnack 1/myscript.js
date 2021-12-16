/* JSnack 1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
Continua a chiedere i numeri all’utente e 
a inserirli nell’array fino a quando la somma degli elementi è minore di 50. */

console.log('esercizio 1');

const array = [];
let counter = 0;
let somma = 0;
do{
    console.log(counter)
    let number = parseInt(prompt("Inserisci un numero:"));
    array.push(number)
    console.log(number)
    somma += array[counter];
    counter++;
}while(somma < 50);
console.log(somma);
