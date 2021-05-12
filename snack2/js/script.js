// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// funzione numero casuale con mix e max
function getRandomInt(min, max) {
    
    return Math.floor(Math.random() * (max - min) + min); 
  }

// array di oggetti squadre
var squadre = [
    {
        nome:"squadra 1",
        puntiFatti:0,
        falliSubiti:0
    }
    ,
    {
        nome:"squadra 2",
        puntiFatti:0,
        falliSubiti:0
    }
    , 
    {
        nome:"squadra 3",
        puntiFatti:0,
        falliSubiti:0
    }
]

// sovrascrivi le proprietà
for (var i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = getRandomInt (0, 20);
    squadre[i].falliSubiti = getRandomInt (0, 20);
    
}
    

// stampa squadre
console.log("squadre",squadre);

// destrutturazione
var arrayOggettiSquadre = [squadra1,squadra2,squadra3] = squadre;

// array vuoto
var squadreModificato = [];
// ciclo per inserisce nel nuovo array le squadre col nome e i falli
for (var i = 0; i < arrayOggettiSquadre.length; i++) {
    var {nome, falliSubiti} = arrayOggettiSquadre[i]; 
    squadreModificato.push({nome, falliSubiti});
    console.log(nome, falliSubiti);
}

console.log("squadre con solo nomi e falli",squadreModificato);

