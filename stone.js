class Stone{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.circle(x,y,40,options)
        this.radius=40;
        this.image=loadImage("Plucking Mangoes/stone.png")
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