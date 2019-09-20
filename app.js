var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var a=80,b=40,c=30,d=18,e=80,f=210,g=140,h=250;
var da = 8;
var db = 2;
var dc = 4;
var dd = 8;
var de = 4;
var df = 2;
var dg = 4;
var dh = 2;
function drawBars() {
    ctx.beginPath();
    ctx.rect(a,40,80,20);
    ctx.rect(b,90,60,20);
    ctx.rect(c,140,40,20);
    ctx.rect(d,190,60,20);
    ctx.rect(e,240,60,20);
    ctx.rect(f,290,60,20);
    ctx.rect(g,340,60,20);
    ctx.rect(h,390,60,20);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBars();
    a += da;
    b += db;
    c += dc;
    d += dd;
    e += de;
    f += df;
    g += dg;
    h += dh;
    if(a + da+40 > canvas.width || a + da < 0) {
        da = -da;
    }
    if(b + db+60 > canvas.width || b + db < 0) {
        db = -db;
    }
    if(c + dc+40 > canvas.width || c + dc < 0) {
        dc = -dc;
    }
    if(d + dd+60 > canvas.width || d + dd < 0) {
        dd = -dd;
    }
    if(e + de+40 > canvas.width || e + de < 0) {
        de = -de;
    }
    if(f + df+60 > canvas.width || f + df < 0) {
        df = -df;
    }
    if(g + dg+40 > canvas.width || g + dg < 0) {
        dg = -dg;
    }
    if(h + dh+60 > canvas.width || h + dh < 0) {
        dh = -dh;
    }
}
setInterval(draw, 10);