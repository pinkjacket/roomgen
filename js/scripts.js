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

function makeRoom(){
  var newRoom = new Room(size());
  newRoom.populate();
  for (var j=0; j<newRoom.contents.length; j++){
    var furn = newRoom.contents[j];
    furn.populate();
  }
  return newRoom;
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

  function furnitureInside(furnitureItemsInside) {
    furnitureItemsInside.forEach(function(itemInside) {
      $("ul.item-inside").append("<li>" + itemInside.name  + "</li></ul>")
    });
  };

  function furnitureOnTop(furnitureItemsOnTop) {
    furnitureItemsOnTop.forEach(function(itemOnTop) {
      $("ul.item-on-top").append("<li>" + itemOnTop.name  + "</li></ul>")
    });
  };

  function roomFurniture(roomFurnitureArray) {
    roomFurnitureArray.forEach(function(furnishedItem) {
      $("ul.furniture").append("<li>" + furnishedItem.name  + "</li>")
    })
  };

  $("form#room").submit(function() {
    event.preventDefault();
    $("#result").fadeOut();
    $("#result").empty();
    var generatedRoom = makeRoom();
    var generatedFurniture = generatedRoom.contents;
    // var generatedItems =
    // console.log(generatedRoom);

    $("#result").append("You have entered a room that is " + generatedRoom.space * 5 + " square feet. The room has: <ul id='stuff-list'></ul>");
    generatedFurniture.forEach(function(furnishing) {
      $("#stuff-list").append('<li class=""')
    })


//////////////////////////////////////////////////////////////////////////

    $("#result").append("You have entered a room that is " + generatedRoom.space * 5 + " square feet. The room has: <ul id='stuff-list'></ul>");
    // console.log(furnitureArray);
    generatedRoom.contents.forEach(function(furnishedItem) {
      // console.log(furnishedItem);
      // console.log(generatedRoom);
      $("#stuff-list").append('<li class="furniture"> A ' + generatedRoom.contents.name + ' with </li>' + '<ul class="furniture"></ul>' + '<ul class="item-on-top"></ul>' + '<ul class="item-inside"></ul>' )
   });

    $("#result").fadeIn();
  });
});
