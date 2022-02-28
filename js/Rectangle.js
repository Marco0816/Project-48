class Rectangle {
    constructor(x,y,height, width) {
      var options = {
       // 'restitution':0.8
       isStatic : true
        
      }
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = width
      this.height = height
      World.add(world,this.body)

    }
    display(){
      var pos = this.body.position;
      if(keyDown("DOWN_ARROW")){
        pos.y += 10
      }
      if(keyDown("UP_ARROW")){
        pos.y -= 10
      }
      
      push();
      translate(pos.x,pos.y)
      rectMode(CENTER);
      fill("black");
      stroke("black");
      rect(0,0,this.width,this.height);
      pop();
    }
  }