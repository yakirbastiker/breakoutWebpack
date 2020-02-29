export default function() {
    let num = Math.random();
    let xd;
    if(num < 0.5) {
        xd = -2;
    } else {
        xd = 2;
    }

    return xd
}