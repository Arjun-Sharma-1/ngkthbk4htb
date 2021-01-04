class Chain {
    constructor (bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:2,
            stiffness:0.1
            
        }
        this.chain=Matter.Constraint.create(options);
        World.add(world,this.chain);
        this.pointB=pointB
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.pointB

        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}