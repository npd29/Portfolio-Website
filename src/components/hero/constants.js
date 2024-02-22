export var opacity = 10;
export var width = window.innerWidth;
export var height = window.innerHeight;
export var rainbowMode = false;
export var myColor = [0, 255, 255, opacity];
export var particleMode = false;
export var inc = 0.1;

export let scl = 20;
export let fr;
export let particles = [];
export let flowfield = [];
export let pixels = [];
export var inView = true;
export var isSetup = false;
export var numParticles = 500;
export var delta = 1;
export var z = 1;
export var stopAnimation = false;
export let particleOpacity = 255;
export let flowOpacity = 10;
export var rainbowInterval;
// Add event listeners to the radio buttons
// const particleRadio = document.getElementById('particleRadio');
// const rainbowToggle = document.getElementById('rainbowToggle');
// document.getElementById('flowRadio').checked = true;
// rainbowToggle.checked = false;
// particleRadio.checked = false;
