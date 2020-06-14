function setup() {
  createCanvas(1600,400);

  car=createSprite(50, 200, 70, 30);
  wall=createSprite(1100,200,60,200);
  wall.shapeColor=(80,80,80);


  speed=random(55,90);
  weight=random(400,1500);
}
var car,wall;
var speed,weight;

function draw() {
  background(0,0,0); 
  car.velocityX=speed; 
  if (wall.x-car.x<car.width/2+wall.width/2) {
    car.velocityX=0;
    var deformation=(0.5*weight*speed*speed)/22500;
     if (deformation<100){
       car.shapeColor="green";
     }
     if (deformation>100 && deformation<180){
       car.shapeColor="yellow";
     }
     if (deformation>180){
       car.shapeColor="red";
     }
  }
  drawSprites();
}