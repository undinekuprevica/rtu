let x = 1;

function setup(){
createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw(){

background(255,36,30);
//rotateX(x);
push();
//x=x+0.1;
rotateY(10);
rotateZ(5);

translate(300,20);
fill(48,140,200,50);
box(30);
pop();

push();
fill(200,150,20);
translate(200,100);
sphere(50);
pop();



}
