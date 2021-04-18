class Paper {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution : 0.3,
          friction    : 0,
          density     : 1.2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

      this.image=loadImage("paper.png");
      super.display();

      
    }
    display(){
   
        
			push();
			translate(posLeft.x, posLeft.y);
			angleMode(RADIANS);
			rotate(this.angle);
			pop();
    }
  };