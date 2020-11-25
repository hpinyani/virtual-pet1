//Create variables here
var dog, dogImg, dogImg1, database, foodS, foodStock;

function preload()
{
dogImg = loadImage("images/dogImg.png");
dogImg1 = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  foodStock = database.ref("food");
  foodStock.on("value",readStock)
  

  dog = createSprite(250,350,10,60)
  dog.addImage(dogImg);
  dog.scale = 0.2;

}


function draw() {  
  background("green");
  
    textSize(20);
    fill(255)
    text("Note: Press UP ARROW to feed DRAGO milk",50,50)
    text("Food Remaining:"+foodS,150,150);
    if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogImg1);
  }

  
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val()
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}

