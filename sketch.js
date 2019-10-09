
let canvas;

function setup(){

canvas = createCannvas(windowWidth,windowHeight);
canvas.position(0,0);
canvas.style('z-index', '-1');

background(255,10,40);

 
}
function draw(){

point(mouseX,mouseY);
for(let i = 0; i<windowWidth; i+=5){
strokeWeight(0,5);
stroke(150);
line(0, i, 500, 1);

}