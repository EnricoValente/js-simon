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

    const usernumberArray = [];

    for (let i = 0; i < 5; i++) {
        const userNumber =parseInt(prompt('Inserisci 5 numeri'));
        console.log(userNumber);
        usernumberArray.push(userNumber);
    

    }    
    console.log(usernumberArray);

    for (let index = 0; index < numbers.length; index++) {
        console.log(numbers[index], ' ',usernumberArray[index]);

        if (numbers[index] == usernumberArray[index]) {

            document.querySelector('.results').innerHTML += `Hai indovinato il numero in posizione ${index} che è ${numbers[index]} `
            
        }
        
    }
    
}, 30*1000)






    
    
      






function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  