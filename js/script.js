// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

/*
1) Creo un array di 5 numeri casuali
2) stampo i numeri in pagina
3) Creo una funzione che mi faccia partire un timer


*/


const numbers = [];

for(let i = 0; i< 5; i++ ){
    const oneNumber=getRandomNumber(1,100);
    console.log(oneNumber);
    numbers.push(oneNumber);
}

console.log(numbers);


const box=document.querySelector('.container');
box.innerHTML=numbers;



setTimeout(function () {

    box.style.display = 'none'

    const firstNumber = parseInt(prompt('digita un numero'));
    const secondNumber = parseInt(prompt('digita un numero'));
    const thirdNumber = parseInt(prompt('digita un numero'));
    const fourthNumber = parseInt(prompt('digita un numero'));
    const fifthNumber = parseInt(prompt('digita un numero'));
    
}, 30*1000)






    
    
      






function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  