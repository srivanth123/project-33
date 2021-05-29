class Snow{

constructor(x,y){

    var options={
restitution:1,
friction:0.9,
density:1,

    }

    this.snowImg=loadImage("snow4.webp")

this.snow=Bodies.rectangle(x,y,100,100,options)
this.width=100
this.height=100
World.add(world,this.snow)
}

display(){
var angle=this.snow.angle
var pos=this.snow.position
push()
translate(pos.x,pos.y)
rotate(angle)
imageMode(CENTER)
image(this.snowImg,0,0,100,100)
pop()
}

    
}