// script_a.js

// Punto a
console.log("Ejercicio a)");

var cantidadDeGatos = 10;

for (var i = 1; i <= cantidadDeGatos; i++) {
    var emoji;
    
    if (i % 3 === 1) {
        emoji = "😺";
    } else if (i % 3 === 2) {
        emoji = "😸";
    } else {
        emoji = "😹";
    }
    
    console.log("Gato #" + i + ": " + emoji);
} 

// script-b.js

// Punto b
console.log("Ejercicio b):");

var cantidadDeGatos = 5;
var cantidadDePasos = 3;


for (var i = 1; i <= cantidadDeGatos; i++) {
    var pasos = "🐾".repeat(cantidadDePasos); 
    console.log("Gato #" + i + ":   🐈" + pasos);
}

// script_c.js

// Punto c
console.log("Ejercicio c):");

var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (var i = 1; i <= cantidadDeGatos; i++){
    var gato = (i % 2 == 1) ? "🐈" : "🐈⬛";
    var pasos = "🐾".repeat(cantidadDePasos);

    console.log("Gato #" + i + ": " + gato + "" + pasos);
}