var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var a1=80,a2=40,a3=30,a4=18,a5=80,a6=210,a7=140,a8=250,a9=350,a10=110;
var da1 = 8,da2 = 6,da3 = 4,da4 = 8,da5 = 6,da6 = 5,da7 = 4,da8 = 2,da9 = 6,da10 = 1;
var heroHeight = 16;
var heroWidth = 16;
var heroX = (canvas.width-heroWidth)/2;
var heroY = (canvas.height-heroHeight);
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var count = 0;

function myFunction() {
    
    setInterval(function () {
        console.log(count)
        document.getElementById('time').innerHTML = count;
        
        count++;
    },1000);
}

if(localStorage.hasOwnProperty('hs')){
    document.getElementById("highScore").innerHtml=parseInt(localStorage.getItem("hs"));
}

myFunction();
document.addEventListener("keydown", keyPressedHandler, false);
document.addEventListener("keyup", keyNotPressedHandler, false);
function keyPressedHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
}

function keyNotPressedHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
}
function drawBars() {
    ctx.beginPath();
    ctx.rect(a1,50,80,20);
    ctx.rect(a2,100,60,20);
    ctx.rect(a3,150,60,20);
    ctx.rect(a4,200,60,20);
    ctx.rect(a5,250,60,20);
    ctx.rect(a6,300,60,20);
    ctx.rect(a7,350,60,20);
    ctx.rect(a8,400,60,20);
    ctx.rect(a9,450,60,20);
    ctx.rect(a10,500,60,20);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawHero() {
    ctx.beginPath();
    ctx.rect(heroX,heroY,heroWidth,heroHeight);
    ctx.fillStyle = "#3F51B5";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBars();
    drawHero();
    
    if(a1 + da1+40 > canvas.width || a1 + da1 < 0) {
        da1 = -da1;
    }
    if(a2 + da2+60 > canvas.width || a2 + da2 < 0) {
        da2 = -da2;
    }
    if(a3 + da3+40 > canvas.width || a3 + da3 < 0) {
        da3 = -da3;
    }
    if(a4 + da4+60 > canvas.width || a4 + da4 < 0) {
        da4 = -da4;
    }
    if(a5 + da5+40 > canvas.width || a5 + da5 < 0) {
        da5 = -da5;
    }
    if(a6 + da6+60 > canvas.width || a6 + da6 < 0) {
        da6 = -da6;
    }
    if(a7 + da7+40 > canvas.width || a7 + da7 < 0) {
        da7 = -da7;
    }
    if(a8 + da8+60 > canvas.width || a8 + da8 < 0) {
        da8 = -da8;
    }
    if(a9 + da9+40 > canvas.width || a9 + da9 < 0) {
        da9 = -da9;
    }
    if(a10 + da10+60 > canvas.width || a10 + da10 < 0) {
        da10 = -da10;
    }
    if(rightPressed) {
        heroX += 1;
        if (heroX + heroWidth > canvas.width){
            heroX = canvas.width - heroWidth;
        }
    }
    else if(leftPressed) {
        heroX -= 1;
        if (heroX < 0){
            heroX = 0;
        }
    }
    else if(upPressed) {
        heroY -= 1;
        if (heroY < 0){
            heroY = 0;
        }
    }
    else if(downPressed) {
        heroY += 1;    
        if (heroY + heroHeight > canvas.Height){
            heroY = canvas.Height - heroHeight;
        }
    }

if((500 < (heroY+heroHeight) && 520 >= heroY)) {
    if(a10 < (heroX+heroWidth) && (a10+60) >= heroX) {
      alert('You lost!!');
      location.reload();
    }
 }
 if((450 < (heroY+heroHeight) && 470 >= heroY)) {
    if(a9 < (heroX+heroWidth) && (a9+60) >= heroX) {
      alert('You lost!!');
      location.reload();
    }
 }
 if((400 < (heroY+heroHeight) && 420 >= heroY)) {
    if(a8 < (heroX+heroWidth) && (a8+60) >= heroX) {
      alert('You lost!!');
      location.reload();
    }
 }
 if((350 < (heroY+heroHeight) && 370 >= heroY)) {
    if(a7 < (heroX+heroWidth) && (a7+60) >= heroX) {
      alert('You lost!!');
      location.reload();
    }
 }
 if((300 < (heroY+heroHeight) && 320 >= heroY)) {
    if(a6 < (heroX+heroWidth) && (a6+60) >= heroX) {
      alert('You lost!!');
      location.reload();
    }
 }
 if((250 < (heroY+heroHeight) && 270 >= heroY)) {
    if(a5 < (heroX+heroWidth) && (a5+60) >= heroX) {
      alert('You lost!!');
      location.reload();
    }
 }
 if((200 < (heroY+heroHeight) && 220 >= heroY)) {
    if(a4 < (heroX+heroWidth) && (a4+60) >= heroX) {
      alert('You lost!!');
      location.reload();
    }
 }
 if((150 < (heroY+heroHeight) && 170 >= heroY)) {
    if(a3 < (heroX+heroWidth) && (a3+60) >= heroX) {
      alert('You lost!!');
      location.reload();
    }
 }
 if((100 < (heroY+heroHeight) && 120 >= heroY)) {
    if(a2 < (heroX+heroWidth) && (a2+60) >= heroX) {
      alert('You lost!!');
      location.reload();
    }
 }
 if((50 < (heroY+heroHeight) && 70 >= heroY)) {
    if(a1 < (heroX+heroWidth) && (a1+80) >= heroX) {
      alert('You lost!!');
      location.reload();
    }
 }
 if((0 < (heroY+heroHeight) && 50 >= heroY)) {
    if(0 < (heroX+heroWidth) && 480>= heroX) {
      alert('You win!!');
      document.getElementById('yourScore').innerHTML = count;
      if(!localStorage.hasOwnProperty('hs')){
          console.log("here")
         localStorage.setItem('hs',count);
      }
      else if(count<parseInt(localStorage.getItem("hs"))){
          localStorage.setItem("hs",count);
      }
      location.reload();
    }
 }

    a1 += da1;
    a2 += da2;
    a3 += da3;
    a4 += da4;
    a5 += da5;
    a6 += da6;
    a7 += da7;
    a8 += da8;
    a9 += da9;
    a10 += da10;
   
}

setInterval(draw, 10);