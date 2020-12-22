class dustbin  {
constructor(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.dustbinWidth = 200;
    this.dustbinHeight = 213;
    this.wallThickness = 20;
    this.image = loadImage("sprites/dustbingreen.png");
    this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth, this.wallThickness, {isStatic:true})
    this.leftWallBody = Bodies.rectangle(this.x - this.dustbinWidth/2, this.y - this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
    this.rightWallBody = Bodies.rectangle(this.x + this.dustbinWidth/2, this.y - this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});

    World.add(world,this.bottomBody);
    World.add(world,this.leftWallBody);
    World.add(world,this.rightWallBody);
}



display() {
   
var bottomPos = this.bottomBody.position
var leftPos = this.leftWallBody.position
var rightPos = this.rightWallBody.position


push()
translate(leftPos.x,leftPos.y)
rectMode(CENTER);
rect(this.image,0,0,this.width,this.height);
pop()

push()
translate(rightPos.x,rightPos.y)
rectMode(CENTER);
rect(this.image,0,0,this.width,this.height);
pop()


push()
translate(bottomPos.x,bottomPos.y +10)
imageMode(CENTER);
image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
pop()

}


}