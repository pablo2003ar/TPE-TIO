"use strict";

let color = document.querySelector("#cambiarColor");
color.addEventListener("click", cambiarColor);
let titulo = document.getElementById("textoColor");

function cambiarColor() {

    if (titulo.style.color == "yellow") {
        titulo.style.color = "black";
    } else {
        titulo.style.color = "yellow";
    }
}


let fuente = document.querySelector("#cambiarFuente");
fuente.addEventListener("click", cambiarFuente);
let p = document.getElementById("textoFuente");

function cambiarFuente() {
    p.style.fontFamily = 'Courier New';

}

document.querySelector("#agregarTexto").addEventListener("click", agregarTexto);

function agregarTexto(){
    document.querySelector("#texto").innerHTML = `alalalal`;
}