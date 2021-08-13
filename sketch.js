
var a = prompt("enter the first number");
var b = prompt("enter the second number");


function setup() {
  createCanvas(400, 400);

var b2 = createButton("Swap the numbers");

b2.mousePressed(swap);
}


function draw() {
  background(220);
}

function swap(){
[a,b] = [b,a];
console.log("the value of a after swapping:" +a)
console.log("the value of b after swapping:" +b)
}