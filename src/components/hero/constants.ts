var opacity = 10;
export var width = window.outerWidth;
export var height = window.outerHeight;
var rainbowMode = false;
var myColor = [0, 255, 255, opacity];
var inc = 0.1;
export const scl = 20;
let zoff = 0;
let fr;
let flowfield = [];
let pixels = [];
var inView = true;
var isSetup = false;
export var numParticles = 500;
var delta = 1;
var stopAnimation = false;
let particleOpacity = 255;
let flowOpacity = 10;
var rainbowInterval;
// Add event listeners to the radio buttons
// const particleRadio: HTMLInputElement = document.getElementById(
//     'particleRadio'
// ) as HTMLInputElement;
// const rainbowToggle: HTMLInputElement = document.getElementById(
//     'rainbowToggle'
// ) as HTMLInputElement;
// (document.getElementById('flowRadio') as HTMLInputElement).checked = true;
// rainbowToggle.checked = false;
// particleRadio.checked = false;
