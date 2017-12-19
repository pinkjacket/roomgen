function randPick(arr){
  //take in an array
  return Math.floor((Math.random()*arr.length)+1)
}

function dice(){
  var diceRoll1 = Math.floor((Math.random()*10)+1)
  //var diceRoll2 = Math.floor((Math.random()*10)+1)
  return diceRoll1;
  //return diceRoll2;
}

function size(){
  var roomSize = (dice() * dice());
  console.log(roomSize)
  return roomSize;

}

//1 space represents a 5ft * 5ft square



//logic for how long
var space = size();
//var stuff = [{name:"desk", size:4}, {name:"table", size:12}, {name:"statue", size:40}, {name:"bed", size:13}]

var newChair = new Chair;
var newTable = new Table;
var newBed = new Bed;
var newChest = new Chest;

var stuff = [newChair, newTable, newBed, newChest]



function spaceFill(space, stuff){
  var area = space;
  var contain = [];
  for(var i=0; i<stuff.length; i++){
    var thing = stuff[i];
    //each thing in furniture will be an object with a size property
    if (thing.size > area){
      return contain;
    } else {
      contain.push(thing)
      area -= thing.size;
    }
  }
}

console.log(spaceFill(space, stuff));

//Object Definitions-------------------------------------
function chair (onTop) {
  this.size: 1;
  this.onTop: onTop;
}

function throne (onTop) {
  this.size: 2;
  this.onTop: onTop;
}

function table (onTop) {
  this.size: 4;
  this.onTop: onTop;
}

function bed (onTop) {
  this.size: 6;
  this.onTop: onTop;
}

function chest (inside) {
  this.size: 2;
  this.inside: inside;
}

function armoire (inside) {
  this.size: 3;
  this.inside: inside;
}

function couch (onTop) {
  this.size: 4;
  this.onTop: onTop;
}

function nightStand (onTop, inside) {
  this.size: 1;
  this.onTop: onTop;
  this.inside: inside;
}

function chestOfDrawers (onTop, inside) {
  this.size: 4;
  this.onTop: onTop;
  this.inside: inside;
}

function counter (onTop, inside) {
  this.size: 1;
  this.onTop: onTop;
  this.inside: inside;
}

function desk (onTop, inside) {
  this.size: 3;
  this.onTop: onTop;
  this.inside: inside;
}

function ottoman () {
  this.size: 1;
}

function bench (onTop) {
  this.size: 4;
  this.onTop: onTop;
}
<<<<<<< HEAD
/*
function furntiure (name, type, size, onTop, inside) {
  this.name: name;
  this.type: type;
  this.size: size;
  this.onTop: onTop
  this.inside: inside;
}*/
=======

// var furniture = function(name, size, onTop) {
//   this.name = name;
//   this.size = size;
//   this.onTop = 0;
//   this.inside = 0;
//   this.under = 0;
// }

//chair = new furniture ()

//FRONT END BELOW THIS LINE------------------------------
$(document).ready(function(){

});
>>>>>>> 0b7a5c0a165820857351f24976d90e73b9734d1c
