import { c } from './canvas'

export default class Paddle {
    constructor(x,y,width) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = 10
    }
        draw () {
            c.beginPath();
            c.fillStyle = '#2CBFB1';
            c.lineWidth = '1';
            c.fillRect(this.x,this.y,this.width,this.height);
            c.stroke();
        }
    
    
        // update = function() {
        //     draw();
        // }
}




