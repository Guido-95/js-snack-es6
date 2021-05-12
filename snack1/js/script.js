// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

// array di oggetti bici
var bici = [
    {
        nome:"Mountain bike",
        peso: 12
    }
    ,
    {
        nome:"Bici da corsa",
        peso: 10
    }
    ,
    {
        nome:"Bmx",
        peso: 15
    }
]


// destrutturazione
var [primaBici] = bici;


for (var i = 0; i < bici.length; i++) {
    if (bici[i].peso < primaBici.peso ){
        primaBici = bici[i];
    }
}

// stampa bici con peso minore
console.log("bici con peso minore",primaBici);

document.getElementById("bici").innerHTML = 
`
La bici che pesa di meno è <span class="linea"> ${primaBici.nome} </span>
`
