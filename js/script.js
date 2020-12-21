// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var scelta = prompt('Scegliere se pari o dispari');
var numero = parseInt(prompt('Scegliere un numero da 1 a 5'));

var randomNum = Math.floor(Math.random() * 5) + 1;
console.log(randomNum);

var somma = numero + randomNum;
console.log(somma);

var vincitore = pariDispari (numero , randomNum)
console.log(vincitore);



function pariDispari (numero , randomNum){
    if (somma % 2 == 0){
        return 'Vince pari';
    }else{
        return 'Vince dispari';
    };
}

