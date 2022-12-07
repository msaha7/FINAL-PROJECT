let health = 1500
let playerChances = ['critical', 'normal']
let monsterHealth = 1500
let monsterChoices = ['critical', 'normal', 'defense']
let playerDmg = 50
let monsterDmg = 50
let levelUp = 0
let playerTurn = true
let monsterTurn = false
var beginning
var middle
var end


// Loads all of the images and font
function preload(){
  beginning = loadImage('/FINAL-PROJECT/Pictures/BASIC/Spin.gif')
  middle = loadImage('/FINAL-PROJECT/Pictures/BASIC/mid.gif')
  end = loadImage('/FINAL-PROJECT/Pictures/BASIC/end.gif')

}

function setup() {
  createCanvas(1000, 1000);
  frameRate(60)
  imageMode(CENTER)
}


function draw() {
  textAlign(CENTER)
  textFont(font)
  textSize(40)
  fill(255)
  stroke(0)
  strokeWeight(10)
  background(225);
  image(back, 350, 350)
  image(arrow, 350, 550)
  image(player, 350, 550)
  image(monster, 350, 300)
  image(sword, 350, 300)
  text('ENEMY HP: ' + str(monsterHealth), 350, 50)
  textSize(30)
  text('HP: ' + str(health), 350, 690)
  for (let i = 50; i < 100; i++){
    textSize(i)
  }
  if (monsterHealth <= 0){
    text('PLAYER WINS', 350, 350)
  } if (health <= 0){
    text('YOU LOSE.', 350, 350)
  }
}

// Sword animation plays and arrows pause
function mousePressed(){

}

// Gameplay is activated, sword animation pauses and arrow plays.
function mouseReleased(){

}
