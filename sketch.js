function setup() {
  createCanvas(1600,400);

  bullet=createSprite(50, 200, 100, 10);
  bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
}
var bullet,wall;
var speed,weight,thickness;

function draw() {
  background(0,0,0); 
  bullet.velocityX=speed; 
  
  if (hasColiided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage<10){
      bullet.shapeColor="green";
    }
    if (damage>10){
      bullet.shapeColor="red";
    }
  }
  drawSprites();
}
function hasColiided (bullet,wall){
 bulletRightEdge=bullet.x+bullet.width;
 wallLeftEdge=wall.x;

 if (bulletRightEdge>=wallLeftEdge){
   return true;
 }
 return false;
}