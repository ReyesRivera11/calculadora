import { darkmode } from "./DarkMode.js";
import { show, deleteAll, result, deleteByOne, porcentage, negativePositive, reverse, square, squareRoot} from "./Operaciones.js";

darkmode();
//agregar evento click a los numeros
for (let i = 0; i <= 9; i++) {
    const numeroBtn = document.getElementById(`numero${i}`);
    numeroBtn.addEventListener("click", () => show(i.toString()));
}

const punto = document.getElementById("decimal");


//botones de operaciones;
const botonSuma = document.getElementById("sumar");
const botonResta = document.getElementById("restar");
const botonIgual = document.getElementById("resultado");
const deleteAllButtons = document.getElementsByClassName("deleteAll");
const multiplicacionBtn = document.getElementById("multiplicar");
const dividirBtn = document.getElementById("dividir");
const borrarUnEle = document.getElementById("deleteByOne");
const porcentaje = document.getElementById("porcentaje");
const positivoNegativo = document.getElementById("positivo-negativo");
const inverso = document.getElementById("inverso");
const cuadrado = document.getElementById("cuadrado");
const raizCuadrada = document.getElementById("raiz-cuadrada");


deleteAllButtons[0].addEventListener("click", () => deleteAll());

deleteAllButtons[1].addEventListener("click", () => deleteAll());

borrarUnEle.addEventListener("click", () => deleteByOne());

punto.addEventListener("click", () => show("."));
//eventos de operaciones
botonSuma.addEventListener("click", () => show("+"))

botonResta.addEventListener("click", () => show("-"));

botonIgual.addEventListener("click", () => result());

multiplicacionBtn.addEventListener("click", () => show("*"));

dividirBtn.addEventListener("click", () => show("/"));

porcentaje.addEventListener("click", () =>  porcentage());

positivoNegativo.addEventListener("click", () => negativePositive());

inverso.addEventListener("click",() => reverse());

cuadrado.addEventListener("click",() => square());

raizCuadrada.addEventListener("click",() => squareRoot());






