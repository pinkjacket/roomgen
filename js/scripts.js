//Loose Helper Files

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

//var stuff = [{name:"desk", size:4}, {name:"table", size:12}, {name:"statue", size:40}, {name:"bed", size:13}]

//var stuff = [new Chair, new Table, new Bed, new Chest]

function makeRoom(){
  var newRoom = new Room(size(), "generic");

  // spaceFill(newRoom.size, stuff /*replace with furniture array*/)

  console.log("foo");
}



//Object Definitions-------------------------------------
function Room(space, type) {
  this.space = size();
  this.type = type;
  this.contents = [];
}

// Furniture contsructor.
function Furniture (name, size, onTop, inside) {
  this.name = name;
  this.size = size;
  this.onTop = onTop;

  this.onTopArray = [];
  this.insideArray = [];
  furnitureArray.push(this);
};

//Item constructor.
function Item(space, type, name) {
  this.space = 0;
  this.type = type;
  this.name = name;
  itemArray.push(this);
}

//Furniture objects array.
var furnitureArray = [];
//item objects array.
var itemArray = [];



//Prototypes-------------------------------------------------------------------------------

Room.prototype.populate = function(){
  var area = this.size;
  //push results to this.contents

  while (area > 0){
    var thing = furnitureArray[randPick(furnitureArray)];
    if (thing.size > area){
      return
    } else {
      this.contents.push(thing)
      area -= thing.size
    }

  }

}

Furniture.prototype.populate =function(){
  var area = this.size;
  //push results to this.contents
  for (var key in this)
    if (key === "onTop" || key === "inside" || key === "under"){
      while (area > 0){
        var thing = furnitureArray[randPick(furnitureArray)];
        if (thing.size > area){
          return
        } else {
          this.contents.push(thing)
          area -= thing.size
        }
      }
    }
}
//FRONT END BELOW THIS LINE------------------------------
$(document).ready(function(){

});
