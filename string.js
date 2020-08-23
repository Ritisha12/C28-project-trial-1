class String{
    constructor(boy,stone){
        var options={
            bodyA: boy,
            pointB: stone,
            stiffness: 0.1,
            length: 10
            }
            this.pointB= stone
    this.string=Constraint.create(options)
    World.add(world,this.string)

    }
    fly(){
        this.stone.bodyA = null;
    }

    display(){
        var posA=this.string.bodyA.position
        var posB=this.pointB
        strokeWeight(4)
        line(posA.x,posA.y,posB.x,posB.y)
    }
}
