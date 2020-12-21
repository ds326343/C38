var gamestate = 0;
var playerCount = 0;
var database 
var form
var player
var game 
var allPlayers
var car1,car2,car3,car4
var cars
function setup(){  
    database = firebase.database();
    createCanvas(displayWidth-50,displayHeight-50);
    game = new Game();
    game.getState();
    game.start();

    
}


function draw(){
    if(playerCount===4){
        game.update(1);
    }  
    if(gamestate===1){
        clear();
        game.play();
    } 
}

