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

// function Board(x, y) {
//
//     this.row = []
// }

//Furniture objects array.
var furnitureArray = [];
//item objects array.
var itemArray = [];
//FRONT END BELOW THIS LINE------------------------------
$(document).ready(function(){

  function furnitureInside(furnitureItemsInside, idInside) {
    // var idInside = 0
    furnitureItemsInside.forEach(function(itemInside) {
      // idInside = idInside + 1;
      $("ul#" + idInside).append("<li>" + itemInside.name  + "</li></ul>")
    });
  };

  function furnitureOnTop(furnitureItemsOnTop, idOnTop) {
    // var idOnTop = 0
    furnitureItemsOnTop.forEach(function(itemOnTop) {
      // idOnTop = idOnTop + 1;
      $("ul.item-on-top#"+ idOnTop).append("<li>" + itemOnTop.name  + "</li></ul>")
    });
  };

  function roomFurniture(roomFurnitureArray) {
    var idNum = 0;
    var idInside = "idInside" + idNum;
    var idOnTop = "idOnTop"+idNum
    console.log("idFurniture: " + idInside);
    roomFurnitureArray.forEach(function(furnishedItem) {
      idNum = idNum + 1;
      idInside = "idInside" + idNum;
      idOnTop = "idOnTop" + idNum;
      $("ul.furniture").append("<li>" + furnishedItem.name  + "</li>" + "<h3>inside the the " + furnishedItem.name + " is: </h3><ul class='item-inside' id='" + idInside + "'></ul>" + "<h3>and on top of the " + furnishedItem.name + " is:</h3><ul class='item-on-top' id='" + idOnTop + "'></ul>")
      furnitureInside(furnishedItem.insideArray, idInside);
      furnitureOnTop(furnishedItem.onTopArray, idOnTop);
    })
  };




  $("form#room").submit(function() {
    event.preventDefault();
    $("#result").fadeOut();
    $("#result").empty();
    var generatedRoom = makeRoom();
    var generatedFurniture = generatedRoom.contents;
    console.log(generatedRoom);

    $("#result").append("You have entered a room that is " + generatedRoom.space * 5 + " square feet. The room has: <ul class='furniture'></ul>");
    roomFurniture(generatedRoom.contents);
    // generatedFurniture.forEach(function(furnishing) {
    //   $("#stuff-list").append('<li class=""')
    // })


//////////////////////////////////////////////////////////////////////////

  //   $("#result").append("You have entered a room that is " + generatedRoom.space * 5 + " square feet. The room has: <ul id='stuff-list'></ul>");
  //   // console.log(furnitureArray);
  //   generatedRoom.contents.forEach(function(furnishedItem) {
  //     // console.log(furnishedItem);
  //     // console.log(generatedRoom);
  //     $("#stuff-list").append('<li class="furniture"> A ' + generatedRoom.contents.name + ' with </li>' + '<ul class="furniture"></ul>' + '<ul class="item-on-top"></ul>' + '<ul class="item-inside"></ul>' )
  //  });

    $("#result").fadeIn();
  });
});
