class Mangoes{
    constructor(x,y,radius){
    var options={
        isStatic:true,
        restitution:0,
        friction:1
    }
    this.body=Bodies.circle(x,y,45,options)
    this.radius=45;
    this.image=loadImage("Plucking Mangoes/mango.png")
    World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        imageMode(CENTER);
        translate(pos.x,pos.y)
        rotate(angle)
        image(this.image,0,0,this.radius,this.radius)
        pop()
    }
    
    }