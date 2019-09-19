var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var a = canvas.width-30;
var b = canvas.height-4;
var dx = 2;
var dy = -2;
var ballRadius = 10;
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.arc(a, b, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
    a += dx;
    b += dy;
    if(x + dx > canvas.width || x + dx < 0 || a + dx > canvas.width || a + dx < 0) {
        dx = -dx;
    }
    
    if(y + dy > canvas.height || y + dy < 0 || b + dy > canvas.height || b + dy < 0) {
        dy = -dy;
    }
}
setInterval(draw, 10);