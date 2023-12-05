var x = 0
var y = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if(y<390){
   y++
  }
  rect(200,y,10,10)
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    var i
    for (i=0;i<50;i++){
      y--
    }
  }
} 