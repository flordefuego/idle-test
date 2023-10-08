/* global Hydra */

// WEBSOCKET STUFF
const serverAddress = 'wss://necessary-southern-astronomy.glitch.me';
//const serverAddress ='wss://websocket-test-museumsnacht.glitch.me'
const serverConnection = new WebSocket(serverAddress);

serverConnection.onopen = function() {
  console.log("I just connected to the server on " + serverAddress);
   serverConnection.send('I am Hydra ');
}

const Rand = TotalSerialism.Stochastic;

const canvas = document.getElementById("myCanvas");

canvas.width = 1024;
canvas.height = 1024;

// create a new hydra-synth instance
var hydra = new Hydra({
  canvas,
  detectAudio: false,
  enableStreamCapture: false,
})



var r = 0.3;
var g = 1;
var b = 1;



var test;
serverConnection.onmessage = function(event) {
console.log("Received: " + event.data);
test = event.data;
}

console.log(test);

 


function feedback(){
src(o0).scrollY(-0.001).modulate(voronoi(10,1,2),0.003).blend(osc(30,0.1,0.5).hue(0.8),0.001).modulate(o0,0.003).out()  
}

function rot(){
src(o0).blend(gradient().hue(0.8),0.005).modulateHue(src(o0).saturate(2),20).layer(voronoi(10,1,10).luma(0.5,0).mult(osc().color(r,g,b))).out()  
}

function grd(){
src(o0).blend(gradient().repeat(Rand.shuffle([3, 4, 5, 8,1]),Rand.shuffle([3, 4, 5, 8,1])).hue(()=>time*0.5),0.008).saturate(1.01).colorama(-0.001).modulate(o0,0.001).out()  
}

function mmm(){
src(o0)
.saturate(1.05)
.hue(0.01)
.modulateHue(src(o0).hue(()=>time*0.5),10)
.scrollX(0.001)
.layer(
osc(10,0.1,Rand.shuffle([1,0,10,2,0.3,0.5]))
.mask(noise(Rand.shuffle([3, 4, 5, 8,1])).luma(0.1,0))
.modulate(o0,Rand.drunkFloat(5)))
.blend(o0,Rand.drunkFloat(5))
.out()  
}


osc(20,0.1,Rand.shuffle([1,0,10,2,0.3,0.5]).fast(0.5)).color(r,g,b).out()