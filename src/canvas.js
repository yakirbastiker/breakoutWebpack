// canvas init
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth /2;
canvas.height = window.innerHeight /1.5;
let c = canvas.getContext("2d");

export { canvas, c }