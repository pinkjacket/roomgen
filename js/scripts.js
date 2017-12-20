var dice1;
var dice2;

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
  dice1 = dice();
  dice2 = dice();
  console.log(dice1);
  console.log(dice2);
  var roomSize = (dice1 * dice2);
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

function Board(x, y) {
  this.rowArr = [];
  for (var j=1; j<=y; j++){
    var innerArray = [];
    for (var i=1; i<=x; i++) {
      innerArray.push("O");
    }
    this.rowArr.push(innerArray + '<br>');
  }
}

//Furniture objects array.
var furnitureArray = [];
//item objects array.
var itemArray = [];
//FRONT END BELOW THIS LINE------------------------------
$(document).ready(function(){

  function furnitureInside(furnitureItemsInside, idInside) {
    furnitureItemsInside.forEach(function(itemInside) {
      $("ul#" + idInside).append("<li>" + itemInside.name  + "</li></ul>")
    });
  };

  function furnitureOnTop(furnitureItemsOnTop, idOnTop) {
    furnitureItemsOnTop.forEach(function(itemOnTop) {
      $("ul.item-on-top#"+ idOnTop).append("<li>" + itemOnTop.name  + "</li></ul>")
    });
  };

  function insideHeader(furnitureItemsInside, itemName, idInside) {
    console.log(furnitureItemsInside);

    //console.log("items inside: " + furnitureItemsInside.length);
    if (furnitureItemsInside.length === 0) {
      // $("ul.furniture").append("<h3>inside the the " + furnitureItemsInside.name + " is: </h3><ul class='item-inside' id='" + idInside + "'></ul>");
      console.log("Inside items array is empty.");
      return ''
    } else {
      return ("<h3>inside the " + itemName + " is: </h3><ul class='item-inside' id='" + idInside + "'></ul>");
    }
  }

  function onTopHeader(furnitureOnTop, itemName, idOnTop) {
    console.log("idInside header: "+ idOnTop);
    //console.log("items on top: " + furnitureOnTop.length);
    if (furnitureOnTop.length === 0) {
      // $("ul.furniture").append("<h3>and on top of the " + furnitureOnTop.name + " is: </h3><ul class='item-on-top' id='" + idOnTop + "'></ul>");
      console.log("On-top items array is empty.");
      return ''
    } else {
      return ("<h3>and on top of the " + itemName + " is: </h3><ul class='item-on-top' id='" + idOnTop + "'></ul>")
    }
  }

  function roomFurniture(roomFurnitureArray) {
    // debugger;
    var idNum = 0;
    var idInside = "idInside" + idNum;
    var idOnTop = "idOnTop"+idNum
    //console.log("inside ID: " + idInside);
    roomFurnitureArray.forEach(function(furnishedItem) {
      idNum = idNum + 1;
      idInside = "idInside" + idNum;
      idOnTop = "idOnTop" + idNum;

      $("ul.furniture").append("<li><h2>" + furnishedItem.name  + "</h2></li>" +

      insideHeader(furnishedItem.insideArray, furnishedItem.name, idInside) +
      onTopHeader(furnishedItem.onTopArray, furnishedItem.name, idOnTop));

      furnitureInside(furnishedItem.insideArray, idInside);
      console.log("idInside: "+ idInside);
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

    $("#result").fadeIn();
    console.log(dice1);
    console.log(dice2);

  });
});
