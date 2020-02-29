import { canvas, c } from "./canvas";

let status = false;
import  Paddle from "./paddle.js";
import Ball from './Ball' ;
import ballxStart from './ballxStart';
//paddle
let paddleSpped = 5;
let paddleUser = new Paddle(canvas.width/2,canvas.height - 20,100);
//ball
let ballGame = new Ball(canvas.width /2, canvas.height /2 , 2,ballxStart(), 5, "#D94E73");
//brick 
import  {bricks, brick,drawBricks} from './brick';

if(!status){
    drawBricks()
}

//game
let game = (function (paddleObj, ballObj){
    //Paddle event
    window.addEventListener('keydown', function(e)  {

    if(e.which == 37) {
        if(paddleObj.x - paddleObj.width < -paddleObj.width) {
            return
        }else {
            paddleObj.x -=paddleSpped;
        }
    }

    if(e.which == 39) {
        if(paddleObj.x + paddleObj.width > canvas.width) {
            return
        }else {
            paddleObj.x +=paddleSpped;
        }
    }
    paddleObj.draw();
    });


    //animate
    function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);
       
    //paddle collision with ball
    if(Math.floor(paddleObj.y - paddleObj.height  )  === Math.floor(ballObj.y + ballObj.radious)) {
         if(ballObj.x >= paddleObj.x && ballObj.x <= paddleObj.x + paddleObj.width) {
            ballObj.dy = -ballObj.dy;
         }
    }

    //ball collision with brick
    for(let r =0; r < brick.row; r++) {
        for (let e =0; e < brick.column; e++) {
            let b = bricks[r][e];
            if(b.status){
                if(ballObj.x + ballObj.radious > b.x && ballObj.x -ballObj.radious < b.x +brick.width) {
                    if(ballObj.y + ballObj.radious > b.y && ballObj.y -ballObj.radious < b.y +brick.height) {
    
                        ballObj.dy = -ballObj.dy;
                        b.status = false;
                    }
                }
            }
        }
    }  
        paddleObj.draw();
        ballObj.update();
        if(!status){drawBricks()}

    }    
    animate()
})(paddleUser, ballGame);

