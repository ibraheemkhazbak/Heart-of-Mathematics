var circle ,h;
function setup(){
createCanvas(windowWidth, windowHeight);
circle=new HeartCircle(0,0,500,200);
frameRate(30);
colorMode(HSB, 255);
 h=0;
}
function draw(){
background(0);
translate(width/2, height/2);
stroke(h%255,255,255);
h+=0.5;
noFill();   
circle.Draw();
circle.update();
}
class HeartCircle{
    constructor(x,y,r,detail){
        this.x=x;
        this.y=y;
        this.r=r;
        this.detail=detail;
        this.multiplier=0.1;
    }
    Draw(){
        let rX=this.x+this.r*Math.sin(i);
        let rY=this.y+this.r*Math.cos(i);
 
            for(var i =0; i<2*Math.PI;i+=2*Math.PI/this.detail){
                
                rX=this.x+this.r*Math.sin(i);
            rY=this.y+this.r*Math.cos(i);
            point(rX, rY);
            this.DrawLines(rX,rY,i);
        
    }
}
update(){
    this.multiplier+=0.005;
   
}
DrawLines(x,y,theta){
    let rX=this.x+this.r*Math.sin(theta*this.multiplier);
   let  rY=this.y+this.r*Math.cos(theta*this.multiplier);
line(x, y, rX, rY)
}
}
