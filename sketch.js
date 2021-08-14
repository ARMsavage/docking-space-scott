var iss,spacecraft,hasDocked = false
function preload(){
  bg = loadImage("spacebg.jpg")
  issImg = loadImage("iss.png")
  seImg = loadImage("spacecraft1.png")
  seImg1 = loadImage("spacecraft2.png")
  seImg2 = loadImage("spacecraft3.png")
  seImg3 = loadImage("spacecraft4.png")

}


function setup() {
  createCanvas(800,400);
  iss = createSprite(330,130);
 iss.addImage(issImg)
 iss.scale = 0.25
 spacecraft = createSprite(285,240);
 spacecraft.addImage(seImg)
 spacecraft.scale = 0.15
}

function draw() {
  background(bg );  
  if(!hasDocked){
    spacecraft.x = spacecraft.x+random(-1,1)
    if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y-2
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(seImg3)
      spacecraft.x = spacecraft.x-1
      }
      if(keyDown("RIGHT_ARROW")){
        spacecraft.addImage(seImg2)
        spacecraft.x = spacecraft.x+1
        }
        if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(seImg1)
        }
  }
  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10))
{
     hasDocked = true
     text("Docking Successful", 200,300)
}
  drawSprites();

}