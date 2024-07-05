/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function CartaAleatoria() {
  let numerosCartas = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  return numerosCartas[Math.floor(Math.random() * numerosCartas.length)];
}

function PaloAleatorio() {
  let Palos = ["♦️", "♥️", "♠️", "♣️"];
  return Palos[Math.floor(Math.random() * Palos.length)];
}

function generarCartaAleatoria() {
  let valor = CartaAleatoria();
  let palo = PaloAleatorio();

  document.getElementById("palo-superior-izquierda").innerHTML = palo;
  document.getElementById("numero-centro").innerHTML = valor;
  document.getElementById("palo-inferior-derecha").innerHTML = palo;

  let color = palo === "♥️" || palo === "♦️" ? "red" : "black";
  document.getElementById("palo-superior-izquierda").style.color = color;
  document.getElementById("numero-centro").style.color = color;
  document.getElementById("palo-inferior-derecha").style.color = color;
}

window.onload = generarCartaAleatoria;
