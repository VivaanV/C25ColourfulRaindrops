class Raindrop extends baseClass{
    constructor(x,y,width,height){
        super(x,y,width,height);
        this.speed=random(15,25);
      
    }
    fall(){
        this.y =this.y+this.speed;
    }
}