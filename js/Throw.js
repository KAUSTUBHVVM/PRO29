class Throw {
constructor(bodyA,pointB) {
 var options = {
     bodyA: bodyA,
     pointB: pointB,
     stiffness: 0.04,
     length: 10
 }
     this.bodyA = Constraint.create(options);
     World.add(world, this.bodyA)
}
fly()
{
    this.bodyA = null;
}
display()
{
    if(this.sling.bodyA){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
    }
}








}