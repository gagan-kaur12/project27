class Bob{
    constructor(x,y,r){
        var options = {
        'isStatic':false,
        'restitution': 0.8,
         'density':0.8,
         'friction':0.8
        }
        
        this.r = r;
       
        this.body= Bodies.circle(x,y,r,options)
        World.add(world,this.body);
            }
     display(){
      var pos = this.body.position;
              //  push()
         // translate(pos.x,pos.y)
     ellipseMode(RADIUS);
     fill("magenta");  
    ellipse(pos.x,pos.y,this.r,this.r);
               // pop();
   } 
}