class ground {
    constructor (x,y,width,height){
        var options = {
           isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        World.add(world , this.body);
    }
    display () {
       
       
        rectmode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width , this.height);
    }
}