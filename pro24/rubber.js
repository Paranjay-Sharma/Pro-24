class Rubber{
    constructor(x,y,r){
     var options = {
       'restitution':0.3,
       'friction':5.0,                
       'density':1.0                     
                   
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
    fill("blue");
    
    
    ellipse(0,0,70,70);
    pop();
    }
    }
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    