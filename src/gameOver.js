import { canvas, c } from "./canvas";

export default function (str) {
    if(str === 'lose') {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.fillText('GAME OVER!!!!', canvas.width /2 - 90, canvas.height /2);
        c.fillText('double click  to start again ', canvas.width /2 - 140, canvas.height /2 + 30);
        c.font = "20px Georgia";
        
        //add event on page
        document.addEventListener("dblclick", function(){
            location.reload();
        })
    }
}
    
    
