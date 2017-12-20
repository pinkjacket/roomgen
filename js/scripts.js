//Loose Helper Files

function randPick(arr){
  //take in an array

  var pick = arr[Math.floor((Math.random()*arr.length))]
  console.log("Pick: " + pick.name + " Size: " + pick.space);
  return pick

}

function dice(){
  var diceRoll1 = Math.floor((Math.random()*10)+1)
  //var diceRoll2 = Math.floor((Math.random()*10)+1)
  return diceRoll1;
  //return diceRoll2;
}

function size(){
  var roomSize = (dice() * dice());
  //console.log("Room Size: " + roomSize)
  return roomSize;

}

function itemArrayForEach(itemArray) {
  itemArray.forEach(function(item) {
    if (!item) {
      console.log("addfjkl");
    } else {
      $("ul.items").append("<li>" + item.name  + "</li>")
    }
  }
)}

//var stuff = [{name:"desk", size:4}, {name:"table", size:12}, {name:"statue", size:40}, {name:"bed", size:13}]

function makeRoom(){
  //debugger;
  var newRoom = new Room(size());
  console.log("room size: " + newRoom.space);
  newRoom.populate();
  for (var j=0; j<newRoom.contents.length; j++){
    console.log(newRoom.contents[j].name);
    var furn = newRoom.contents[j];
    furn.populate();
  }
  console.log(newRoom);
}

//Prototypes-------------------------------------------------------------------------------

Room.prototype.populate = function(){
  var area = this.space;
  //push results to this.contents

  while (area > 0){
    var thing = randPick(furnitureArray);
    // console.log("Room thing: " + thing.name);
    if (thing.space > area){
      break
    } else {
      this.contents.push(thing)
      area -= thing.space
    }
  }

  // console.log("Contents: " + this.contents);
}

Furniture.prototype.populate =function(){
  // debugger;
  var size = this.space;
  //console.log("Furniture Size: " + size);
  //push results to this.contents
  for (var key in this){
    if (key === "onTop" || key === "inside" || key === "under"){
      //console.log("key: " + key);
      while (size > 0){
        var thing = randPick(itemArray);
        // console.log();
        if (thing.space < size){
          console.log("array: "+ this[key+"Array"]);
          this[key+"Array"].push(thing);
          size -= thing.space;
        } else {
          // console.log("Item: "+ thing.name);
          // console.log("item Size: "+ thing.space + "----" + "furniture space: " + size);
          return;
        }
      }
    }
  }
}

//Object Definitions-------------------------------------
function Room(size) {
  this.space = size;
  this.type = "generic";
  this.contents = [];
}

// Furniture contsructor.
function Furniture (name, size, onTop, inside) {
  this.name = name;
  this.space = size;
  this.onTop = 0;
  this.inside = 0;
  this.onTopArray = [];
  this.insideArray = [];
  furnitureArray.push(this);
};

//Item constructor.
function Item(space, type, name) {
  this.space = space;
  this.type = type;
  this.name = name;
  itemArray.push(this);
}

//Furniture objects array.
var furnitureArray = [];

//item objects array.
var itemArray = [];


//FRONT END BELOW THIS LINE------------------------------
$(document).ready(function(){
  $("form#room").submit(function(event){
    event.preventDefault();
    $("#result").fadeOut();
    $("#result").empty();
    var room = makeRoom();
    console.log(room);

    $("#result").append("You have entered a room that is " + room.space * 5 + " square feet. The room has: <ul id='stuff-list'></ul>");
    console.log(furnitureArray);
    //var items = itemArrayForEach(itemArray)
    furnitureArray.forEach(function(thingy) {
      debugger;
      console.log(thingy);
      $("#stuff-list").append('<li class="furnitureItem"> A ' + thingy.name + ' with </li><ul class="items">' + "</ul>" )
   });
    itemArrayForEach(itemArray);

    $("#result").fadeIn();
  }
)});
