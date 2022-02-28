class Gun2 {
    constructor(x,y) {
        var options = {
            isStatic : true
        }
        this.image = loadImage("../assets/Gun1_img.png")
        this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = 50
      this.height = 50
      World.add(world,this.body)
}
display(){
    var pos = this.body.position;
    //pos.x = rect1.x
    if(keyDown("S")){
        pos.y += 10
      }
      if(keyDown("W")){
        pos.y -= 10
      }
    
    push();
      translate(pos.x,pos.y)
      imageMode(CENTER);
      stroke("blue");
      image(this.image,0,0,this.width,this.height)
      //rect(0,0,this.width,this.height);
      pop();
}
}