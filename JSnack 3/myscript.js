/* JSnack 3
Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari. */

console.log('esercizio 3');

const div1  = document.createElement("div");
const div2  = document.createElement("div"); 
document.body.appendChild(div1);
document.body.appendChild(div2);


div1.setAttribute("id", "div_id_1_red"); 
div2.setAttribute("id", "div_id_2_green"); 

div1.classList.add("numeri");
div2.classList.add("numeri");

const arrayNumber = [5,9,22,6];
console.log(arrayNumber);

for(let i = 0; i < arrayNumber.length; i++){
    let number =(arrayNumber[i]);
    console.log(number);

    if(arrayNumber[i] % 2 == 0){
        div2.innerHTML += number + " ";
        console.log('numeropari');
    }else{
        div1.innerHTML += number + " ";
        console.log('numerodispari');
    }
}
