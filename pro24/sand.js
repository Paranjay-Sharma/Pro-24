class Sand{
constructor(x,y,r){
 var options = {
   'restitution':0.5,
   'friction':1.0,                
   'density':2.0                     
               
 }
this.body=Bodies.circle(x,y,r,options);

World.add(world,this.body);

}

display(){
  var pos =this.body.position;
  var angle =this.body.angle;
  push();
  translate(pos.x,pos.y);


ellipseMode(CENTER);
fill("red");


ellipse(0,0,20,20);
pop();
}
}
    
















