import { canvas, c } from "./canvas";
import gameOver from './gameOver';

export default class Ball {
    constructor(x,y,dy,dx,radious,color) {
        this.x= x;
        this.y= y;
        this.dy = dy;
        this.dx = dx;
        this.radious = radious;
        this.color =  color;
    }
        draw() {
             
            c.beginPath();
            c.arc(this.x, this.y, this.radious,0, Math.PI*2, false);       
            c.fillStyle = this.color;
            c.fill();
            c.stroke();
            c.closePath();
        }
    
        update() {
    
            if(this.y -this.radious   <= 0) {
                this.dy++;
            }else if(this.y + this.radious >= canvas.height){
                status = true;
                gameOver("lose")
            }
    
            if(this.x + this.radious +this.dx > canvas.width || this.x -this.radious  <= 0){
                this.dx = -this.dx;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
};


