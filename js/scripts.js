//Loose Helper Files

function randPick(arr){
  //take in an array
  var pick = arr[Math.floor((Math.random()*arr.length))]
  return pick
}

function dice(){
  var diceRoll1 = Math.floor((Math.random()*10)+1)
  return diceRoll1;
}

function size(){
  var roomSize = (dice() * dice());
  return roomSize;

}

function itemArrayForEach(itemArray) {
  itemArray.forEach(function(item) {
    if (!item) {
    } else {
      $("ul.items").append("<li>" + item.name  + "</li>")
    }
  }
)}

function makeRoom(){
  var newRoom = new Room(size());
  newRoom.populate();
  for (var j=0; j<newRoom.contents.length; j++){
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
    if (thing.space > area){
      break
    } else {
      this.contents.push(thing)
      area -= thing.space
    }
  }
}

Furniture.prototype.populate =function(){
  //push results to this.contents
  for (var key in this){
    if (key === "onTop" || key === "inside"){
      while (this[key] > 0){
        var thing = randPick(itemArray);
        if (thing.space <= this[key]){
          this[key+"Array"].push(thing);
          this[key] -= thing.space;
        } else {
          break;
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
  this.onTop = onTop;
  this.inside = inside;
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
    $("#board").empty();
    $("#board").show();
    var room = makeRoom();
    console.log(room);

    $("#result").append("You have entered a room that is " + room.space * 5 + " square feet. The room has: <ul id='stuff-list'></ul>");
    console.log(furnitureArray);
    furnitureArray.forEach(function(thingy) {
      debugger;
      console.log(thingy);
      $("#stuff-list").append('<li class="furnitureItem"> A ' + thingy.name + ' with </li><ul class="items">' + "</ul>" )
   });
    itemArrayForEach(itemArray);
    for (var i=1; i <= Math.floor(Math.sqrt(room.space)) /*10 if undefined, +1?*/; i++) {
      console.log(room.space);
      $("#board").append('<div class="row" id="row' + i + '">' + '</div>');
      for (var j=1; j <= Math.floor(Math.sqrt(room.space)) /*10 if undefined, +1?*/; j++) {
        console.log(room.space);
        $("#row" + i).append('<div class="col-md-1 col' + j + '">');
      }
    }
    $("#result").fadeIn();
  }
)});
