class Box{
  constructor(x, y, width, height) {
      var options = {
        
          'restitution':0.8,
          'friction':0.8,
          'density':0.8
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility=255
      World.add(world, this.body);
    }
    display(){
      


      
      if (this.body.speed<3){
        fill("Aqua")
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
      }
     else
      {
        
       World.remove(world,this.body)
       push()
       tint(255,this.Visibility)
       pop();
      }
    }
    score() {
      if (this.Visibility < 0 && this.Visibility > -800) {
        score++;
      }
    }
}