const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var rain = [];
var Bruce,umbrella;
var maxDrops = 1000;

function preload(){
  bruce_walking = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png")
   
}

function setup(){
   var canvas = createCanvas(400,400);
   engine = Engine.create();
   world = engine.world;

   Bruce = createSprite(200,300,20,50);
   Bruce.addAnimation("walking",bruce_walking);
   Bruce.scale = 0.3;

   umbrella = new Umbrella(200,230);

   if(frameCount % 30 == 0){
      for(var i = 0; i < maxDrops; i++){
         rain.push(new Rain(random(0,400),random(0,400),random(1,5)));
         console.log(rain[i]);
      }
   }


}

function draw(){
   Engine.update(engine);
   background(0);

   umbrella.display();

   for(var i = 0; i < maxDrops; i++){
      rain[i].display();
   }

drawSprites();
}   

