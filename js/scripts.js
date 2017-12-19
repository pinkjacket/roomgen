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


var stuff = [new Chair, new Table, new Bed, new Chest]

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

function Chair (onTop) {
  this.size = 1;
  this.onTop = onTop;
}

function Throne (onTop) {
  this.size = 2;
  this.onTop = onTop;
}

function Table (onTop) {
  this.size = 4;
  this.onTop = onTop;
}

function Bed (onTop) {
  this.size = 6;
  this.onTop = onTop;
}

function Chest (inside) {
  this.size = 2;
  this.inside = inside;
}

function Armoire (inside) {
  this.size = 3;
  this.inside = inside;
}


function Couch (onTop) {
  this.size = 4;
  this.onTop = onTop;
}

function NightStand (onTop, inside) {
  this.size = 1;
  this.onTop = onTop;
  this.inside = inside;
}

function ChestOfDrawers (onTop, inside) {
  this.size = 4;
  this.onTop = onTop;
  this.inside = inside;
}

function Counter (onTop, inside) {
  this.size = 1;
  this.onTop = onTop;
  this.inside = inside;
}

function Desk (onTop, inside) {
  this.size = 3;
  this.onTop = onTop;
  this.inside = inside;
}

function Ottoman () {
  this.size = 1;
}

function Bench (onTop) {
  this.size = 4;
  this.onTop = onTop;
}

// var furniture = function(name, size, onTop) {
//   this.name = name;
//   this.size = size;
//   this.onTop = 0;
//   this.inside = 0;
//   this.under = 0;
// }

//chair = new furniture ()

//items
var itemArray = [];
//console.log(itemArray);

function Item(space, type, name) {
  this.space = 0;
  this.type = type;
  this.name = name;
  itemArray.push(this);
}

var cheese = new Item("1", "food", "Cheese");
var wine = new Item ("1", "drink", "Wine");
var gold = new Item ("1", "currency", "Gold");
var silver = new Item ("1", "currency", "Silver");
var copper = new Item ("1", "currency", "Copper");
var apple = new Item ("1", "food", "Apple");
var banana = new Item ("1", "food", "Banana");
var milk = new Item ("1", "drink", "Milk");
var ale = new Item ("1", "drink", "Ale");
var coal = new Item ("1", "material", "Coal");
var iron = new Item ("1", "material", "Iron");
var wool = new Item ("1", "material", "Wool");
var tin = new Item ("1", "material", "Tin");
var chef = new Item ("2", "tool", "Chef's Tools");
var tome = new Item ("1", "tool", "Tome");
var cookBook = new Item ("1", "tool", "Cook Book");
var blast = new Item ("2", "tool", "Blasting Kit");
var repair = new Item ("2", "tool", "Repair Kit");
var crowbar = new Item ("2", "tool", "Crowbar");
var lute = new Item ("3", "tool", "Lute");
var guitar = new Item ("3", "tool", "Guitar");
var healing = new Item ("2", "tool", "Healing Kit");
var matches = new Item ("1", "tool", "Matches");
var torch = new Item ("1", "tool", "Torch");
var forgery = new Item ("2", "tool", "Forgery Kit");
var spice = new Item ("2", "tool", "Spice Kit");
var book = new Item ("1", "tool", "Book of Tales");
var candle = new Item ("1", "tool", "Candle");
var spyGlass = new Item ("1", "tool", "Spy Glass");
var rope = new Item ("1", "tool", "Rope");
var alchemist = new Item ("1", "projectile", "Wine");

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
// function spaceFill(space, stuff){
//   var area = space;
//   var contain = [];
//   for(var i=0; i < (stuff.length); i++){
//     var thing = stuff[i];
//     //each thing in furniture will be an object with a size property
//     if (thing.size > area){
//       return contain;
//     } else {
//       contain.push(thing)
//       area -= thing.size;
//     }
//   }
//   console.log(contain);
// }


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
