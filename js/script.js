// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

/*
1) Creo un array di 5 numeri casuali
2) stampo i numeri in pagina
3) Creo una funzione che mi faccia partire un timer


*/


const numbers = [];

while(numbers.length < 5) {
    const oneNumber = getRandomNumber(1, 5);
    if (!numbers.includes(oneNumber)) {
        numbers.push(oneNumber);
        
    }

}

console.log(numbers)




    
    
      






function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  