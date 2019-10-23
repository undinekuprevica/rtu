let r = 1;
let img;
let box1;
let size = 20;
function setup(){

createCanvas(windowWidth, windowHeight, WEBGL);

img = loadImage('https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg');
box1 = new Cube(size);
}

function draw(){

background(20,100,40);
box1.display();


}
class Cube{
constructor(size){
this.size = size;

}
display(){
  translate(-200,0 ,0);
  push();
  rotateY(r);
  texture(img);
  box(40);
  pop();
  r += 0.05



}


}
