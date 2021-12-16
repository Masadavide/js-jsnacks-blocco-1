/* JSnack 2
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
Ogni volta che ne crei uno, stampalo a schermo. */


console.log('esercizio 2');

let N = parseInt(prompt("Inserisci un numero:"));
console.log(N);

for(let i = 0; i < N; i++){
    let arrey = [];
    for(let i = 0; i < 10; i++){
        arrey.push(Math.floor((Math.random() * 100) + 1));
    }
    console.log(arrey);
}