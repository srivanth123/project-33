const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world

var snow=[]

function preload(){

  music=loadSound("sound.mp3")
bgImg=loadImage("snow1.jpg")
boy1Img=loadImage("boysnow.jpg")
}

function setup() {

  createCanvas(800,400);



  engine=Engine.create()
world=engine.world

boy=createSprite(400,300,20)
boy.addImage(boy1Img)
  
}

function draw() {

  background(bgImg);  

  Engine.update(engine)

  if(frameCount%40===0){

    snow.push(new Snow(random(100,800),10,10))
  }

music.play()

  for (var m = 0; m < snow.length; m++) {
    snow[m].display();


  drawSprites();
}

}