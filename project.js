var fox;
var cabbage;
var rabbit;
var win;
var lose;
var top;
var count = 0;
var player;
var boat;
var foxIn;
var rabbitIn;
var cabbageIn;
var up;
var time = 60;
let x = 10;
let y = 280
var myVar1
var myVar;
var count=0;
var audio3 = new Audio('bite.mp3');
let wave=30;
let wave2=500;

function setup() {
    var song = new Audio('song.wav');
    song.play();
    song.loop=true;
    clearInterval(myVar);
    time=60;
    boat = 1;
    up = false;
    player = false;
    top = false;
    lose = false;
    fox = false;
    cabbage = false;
    rabbit = false;
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#4286f4";
    ctx.fillRect(0, 100, 1200, 375);
    ctx.fillStyle = "#2a7710";
    ctx.fillRect(0, 0, 2000, 150);
    ctx.fillStyle = "#2a7710";
    ctx.fillRect(0, 400, 2000, 300);
    var img = document.getElementById("boat");
    ctx.drawImage(img, 520, 280);
    var img = document.getElementById("fox");
    ctx.drawImage(img, 10, 440);
    var img = document.getElementById("rabbit");
    ctx.drawImage(img, 500, 470);
    var img = document.getElementById("cabbage");
    ctx.drawImage(img, 1075, 480);
    myVar = setInterval(myTimer, 1000);
    
}

function travel() {
    if (lose == false) {
        var audio = new Audio('water1.mp3');
        audio.play();
        if (up == false) {
            x = 10;
            if(count<1){
                myVar1=setInterval(boatTimer, 50);
            }
            up = true;
            player = true;
            checkWin();
            count++;
        }
        else {
            if(count<1){
                myVar1=setInterval(boatTimer, 50);
                
            }
            x = -10;
            up = false;
            player = false;
            checkWin();
            
        }
        
        
    }
}

function addItem(x) {
    if(lose!=true){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    if (boat < 2) {
        if (up == false && fox == false || up == true && fox == true) {
            if (x == 'fox') {
                fox = null;
                foxIn = true;
                boat = 2;
                if (up == false) {
                    ctx.fillStyle = "#2a7710";
                    ctx.fillRect(0, 405, 200, 250);
                }
                else {
                    fox = null;
                    ctx.fillStyle = "#2a7710";
                    ctx.fillRect(0, 0, 150, 150);
                }
            }
        }
    }
    if (boat < 2) {
        if (up == false && rabbit == false || up == true && rabbit == true) {
            if (x == 'rabbit') {
                rabbit = null;
                rabbitIn = true;
                boat = 2;
                if (up == false) {
                    ctx.fillStyle = "#2a7710";
                    ctx.fillRect(500, 405, 300, 250);
                }
                else {
                    rabbit = null;
                    ctx.fillStyle = "#2a7710";
                    ctx.fillRect(500, 0, 200, 150);
                }
            }
        }
    }
    if (boat < 2) {
        if (up == false && cabbage == false || up == true && cabbage == true) {
            if (x == 'cabbage') {
                cabbage = null;
                cabbageIn = true;
                boat = 2;
                if (up == false) {
                    ctx.fillStyle = "#2a7710";
                    ctx.fillRect(735, 405, 800, 250);
                }
                else {
                    cabbage = null;
                    ctx.fillStyle = "#2a7710";
                    ctx.fillRect(940, -100, 500, 250);
                }
            }
        }
    }
}
}

function dropOff() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    if (foxIn) {
        if (up) {
            foxIn = false;
            fox = true;
            ctx.fillStyle = "#2a7710";
            ctx.fillRect(80, 500, 100, 50);
            var img = document.getElementById("fox");
            ctx.drawImage(img, 10, 0);
            boat = 1;
        }
        else if (up == false) {
            fox = false;
            foxIn = false;
            ctx.fillStyle = "#2a7710";
            ctx.fillRect(80, 80, 100, 50);
            var img = document.getElementById("fox");
            ctx.drawImage(img, 10, 440);
            boat = 1;
        }
    }
    if (rabbitIn) {
        if (up) {
            rabbitIn = false;
            rabbit = true;
            ctx.fillStyle = "#2a7710";
            ctx.fillRect(535, 500, 100, 50);
            var img = document.getElementById("rabbit");
            ctx.drawImage(img, 500, 10);
            boat = 1;
        }
        else if (up == false) {
            rabbit = false;
            rabbitIn = false;
            ctx.fillStyle = "#2a7710";
            ctx.fillRect(535, 80, 100, 50);
            var img = document.getElementById("rabbit");
            ctx.drawImage(img, 500, 470);
            boat = 1;
        }
    }
    if (cabbageIn) {
        if (up) {
            cabbageIn = false;
            cabbage = true;
            ctx.fillStyle = "#2a7710";
            ctx.fillRect(1000, 500, 100, 50);
            var img = document.getElementById("cabbage");
            ctx.drawImage(img, 1075, 20);
            boat = 1;
        }
        else if (up == false) {
            cabbage = false;
            cabbageIn = false;
            ctx.fillStyle = "#2a7710";
            ctx.fillRect(1000, 80, 100, 50);
            var img = document.getElementById("cabbage");
            ctx.drawImage(img, 1075, 480);
            boat = 1;
        }
    }
    checkWin();
}

function checkWin() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    if (cabbage == true && fox == true && rabbit == true) {
        lose = false;
        ctx.fillStyle = "black";
        ctx.font = "bold 35px Arial";
        ctx.fillText("Everyone made it safely, you win!", 350, 300);
        clearInterval(myVar);
        
    }
    if (cabbage == false && rabbit == false && fox == true && up == true) {
        lose = true;
        ctx.fillStyle = "black";
        ctx.font = "bold 35px Arial";
        
        audio3.play();
        ctx.fillText("Rabbit ate the cabbage, you lose.", 350, 300);
        let myVar5=setInterval(rabbitEat, 10);
        clearInterval(myVar);
        audio3.stop();
        loseText('rabbit');
        
    }
    if (rabbit == true && cabbage == true && fox == false && up == false) {
        lose = true;
        ctx.fillStyle = "black";
        ctx.font = "bold 35px Arial";
        var audio1 = new Audio('bite.mp3');
        audio1.play();
        ctx.fillText("Rabbit ate the cabbage, you lose.", 350, 300);
        let myVar5=setInterval(rabbitEat, 10);
        clearInterval(myVar);
        loseText('rabbit');
    }
    if (rabbit == false && fox == false && cabbage == true && up == true) {
        lose = true;
        ctx.fillStyle = "black";
        ctx.font = "bold 35px Arial";
        ctx.fillText("Fox ate the rabbit, you lose.", 350, 300);
        let myVar5=setInterval(foxEat, 10);
        var audio1 = new Audio('foxAttack.mp3');
        audio1.play();
        clearInterval(myVar);
    }
    if (rabbit == true && cabbage == false && fox == true && up == false) {
        lose = true;
        ctx.fillStyle = "black";
        ctx.font = "bold 35px Arial";
        ctx.fillText("Fox ate the rabbit, you lose.", 350, 300);
        let myVar5=setInterval(foxEat, 10);
        var audio1 = new Audio('foxAttack.mp3');
        audio1.play();
        clearInterval(myVar);
    }
}

function myTimer() {
    if (time == 0) {
        var audio2 = new Audio('beep2.mp3');
        audio2.play();
        clearInterval(myVar);
        lose=true;
    }
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#2a7710";
    ctx.fillRect(0, 0, 40, 30);
    if(time<=10&&time>0){
        var audio1 = new Audio('beep1.mp3');
        audio1.play();
        ctx.fillStyle = "red";
        ctx.font = "bold 35px Arial";
        ctx.fillText(time, 0, 30);
        time--;
    }else{
        ctx.fillStyle = "black";
        ctx.font = "bold 35px Arial";
        ctx.fillText(time, 0, 30);
        time--;
    }
    audio3.stop();
}

function boatTimer() {
    if (y == 150 && x !== -10) {
        
        x=10;
        cleartInterval(myVar1);
        
    }
    if (x == -10 && y == 280) {
        
        x=-10;
        cleartInterval(myVar1);
        
        
        
        
    }
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#4286f4";
    ctx.fillRect(0, 150, 1200, 250);
    y = y - x;
    var img = document.getElementById("boat");
    ctx.drawImage(img, 520, y);
    
}

function waveTimer(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
   
    ctx.strokeStyle = "#000";
    ctx.moveTo(wave-20,200);
    ctx.lineTo(wave-10,180);
    ctx.lineTo(wave,200);
    ctx.stroke();
     
    ctx.strokeStyle = "#4286f4";
    ctx.moveTo(wave-30,200);
    ctx.lineTo(wave-20,180);
    ctx.lineTo(wave-10,200);
    ctx.stroke();
    wave+=10;
    
}

function foxEat(){
    if(fox==false&&wave!=500){
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.fillStyle = "#2a7710";
        ctx.fillRect(0, 400, 520, 450);
        var img = document.getElementById("fox");
        ctx.drawImage(img, wave, 440);
        wave+=10;
    }else if(fox==true&&wave!=500){
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.fillStyle = "#2a7710";
        ctx.fillRect(0, 0, 520, 150);
        var img = document.getElementById("fox");
        ctx.drawImage(img, wave, 0);
        wave+=10;
    }
    if(wave==450){
        if(fox==false){
            ctx.fillStyle = "#2a7710";
            ctx.fillRect(500, 400, 400, 450);
        }else{
            ctx.fillStyle = "#2a7710";
            ctx.fillRect(500, 0, 400, 150);
        }

    }
    if(wave==500){
        if(fox==false){
            ctx.fillStyle = "#2a7710";
            ctx.fillRect(470, 400, 400, 450);
            var img = document.getElementById("fox");
            ctx.drawImage(img, wave, 440);
        }else{
            ctx.fillStyle = "#2a7710";
            ctx.fillRect(470, 0, 500, 150);
            var img = document.getElementById("fox");
            ctx.drawImage(img, wave, 0);
        }

    }
}

function rabbitEat(){
    if(rabbit==false&&wave2!=1050){
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.fillStyle = "#2a7710";
        ctx.fillRect(500, 400, 600, 450);
        var img = document.getElementById("rabbit");
        ctx.drawImage(img, wave2, 470);
        wave2+=10;
    }else if(rabbit==true&&wave2!=1050){
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.fillStyle = "#2a7710";
        ctx.fillRect(500, 0, 600, 150);
        var img = document.getElementById("rabbit");
        ctx.drawImage(img, wave2, 0);
        wave2+=10;
    }
    if(wave2==450){
        if(rabbit==false){
            ctx.fillStyle = "#2a7710";
            ctx.fillRect(500, 400, 400, 450);
        }else{
            ctx.fillStyle = "#2a7710";
            ctx.fillRect(500, 0, 400, 150);
        }

    }
    if(wave2==1050){
        if(rabbit==false){
            ctx.fillStyle = "#2a7710";
            ctx.fillRect(700, 400, 1000, 450);
            var img = document.getElementById("rabbit");
            ctx.drawImage(img, wave2, 470);
        }else{
            ctx.fillStyle = "#2a7710";
            ctx.fillRect(700, 0, 1000, 150);
            var img = document.getElementById("rabbit");
            ctx.drawImage(img, wave2, 0);
        }

    }
}

function loseText(z){
    if(z=='rabbit'){
        lose = true;
        ctx.fillStyle = "black";
        ctx.font = "bold 35px Arial";
        ctx.fillText("Rabbit ate the cabbage, you lose.", 350, 300);
    }
}