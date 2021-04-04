var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
  car1Img = loadImage("images/car1.png");
  car2Img = loadImage("images/car2.png");
  car3Img = loadImage("images/car3.png");
  car4Img = loadImage("images/car4.png");

  gameOver = loadImage("images/gameOver.jpg");
  track  = loadImage("images/track.jpg");

}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  GameOver = createSprite(displayWidth/2, displayHeight/2);
  GameOver.addImage(gameOver);
  GameOver.visible = false;
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === "End"){
    //track.visible = false
    //textSize(40)
    GameOver.visible = true;
    //text("GAME OVER", displayWidth-250, displayHeight-250);
    console.log("game over")
  }
  
}


