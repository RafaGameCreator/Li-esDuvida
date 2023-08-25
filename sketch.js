function setup(){
  
  createCanvas(400,400);
  background("Pink");
  }


function draw() {
 
  if(keyDown(LEFT_ARROW)){
    background("Red");
 }

 if(keyDown(UP_ARROW)){
  background("Blue");
}

if(keyDown(DOWN_ARROW)){
  background("Purple");
}

if(keyDown(RIGHT_ARROW)){
  background("Pink");
}
}