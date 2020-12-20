class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    Attach(body){
        this.sling.bodyA = body   
     
    }
     
    fly(){
        this.sling.bodyA = null;
    }
        
    

}