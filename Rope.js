class Rope{
    constructor (bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:bodyA,bodyB:bodyB,pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Matter.Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var a=this.rope.bodyA.position.x
        var b=this.rope.bodyA.position.y
        var c=this.rope.bodyB.position.x+this.offsetX
        var d=this.rope.bodyB.position.y+this.offsetY
        line(a,b,c,d)
    }
    
}