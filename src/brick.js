import { canvas, c } from "./canvas";
let  bricks = [];
const brick = {
    row: 3,
    column: 7,
    width: 50,
    height: 10,
    color: '#F26D6D',
    offsetLeft:20,
    offsetTop:20,
    marginTop: 20,
};

function createBricks() {
    for(let r =0; r < brick.row; r++) {
        //make a row
        bricks[r] = [];

        for(let c =0; c < brick.column; c++) {
            bricks[r][c] = {
                x: c * (brick.offsetLeft + brick.width) + brick.offsetLeft,
                y: r * (brick.offsetTop + brick.height) + brick.offsetTop + brick.marginTop,
                height: 10,
                width: 50,
                status: true,
                color: '#F26D6D'
            }
            

        }

    }
}
createBricks();

function drawBricks() {
    for(let r = 0; r< brick.row; r++) {
        for(let e = 0; e< brick.column; e++) {
            let b = bricks[r][e];

            if(b.status) {
                c.beginPath();
                c.fillStyle = b.color;
                c.strokeStyle =  b.color;
                c.fillRect(b.x, b.y, brick.width, brick.height);
                c.stroke();
            }
        }
    }
}


export { brick, bricks, drawBricks }



