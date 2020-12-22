class paper {
constructor(x,y,r){
var options={
    isStatic:false,
    restitution:0.3,
    density:1.2,
    friction:0.5

}

this.x = x
this.y = y
this.r = 60;
this.image = loadImage("sprites/paper.png")
this.body = Bodies.circle(this.x,this.y,this.r/2,options);
World.add(world, this.body);


}
display(){

    var paperPos = this.body.position;
    
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER)
    image(this.image,0,10,this.r,this.r)
    pop();







}


}