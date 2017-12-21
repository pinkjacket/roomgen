/*BACK END LOGIC*/
var dice1;
var dice2;
//Loose Helper Files
function randPick(arr){
  var pick = arr[Math.floor((Math.random()*arr.length))]
  return pick
}
//Roll to create room dimensions (MAX: 10x10)
function dice(){
  var diceRoll1 = Math.floor((Math.random()*10)+1)
  return diceRoll1;
}
//Create room dimensions.
function size(){
  dice1 = dice();
  dice2 = dice();
  var roomSize = (dice1 * dice2);
  return roomSize;

}
//Create room and populate with furniture.
function makeRoom(){
  var newRoom = new Room(size());
  newRoom.populate();
  for (var j=0; j<newRoom.contents.length; j++){
    var furn = newRoom.contents[j];
    furn.populate();
  };
  console.log(newRoom);
  return newRoom;
};
//Unique Furniture objects array.
function makeUnique(dupes){
  var result = [];
  for(var i = 0; i<dupes.length;i++){
    var dupe = dupes[i];
    var furn = new Furniture(dupe.name, dupe.space, dupe.onTop, dupe.inside)
    result.push(furn)
  };
  return result
};

//PROTOTYPES
//Room furniture prototype.
Room.prototype.populate = function(){
  var area = this.space;
  var dupes = [];
  while (area > 0){
    var thing = randPick(furnitureArray);
    if (thing.space > area){
      break
    } else {
      dupes.push(thing);
      area -= thing.space;
    }
  };
  this.contents = makeUnique(dupes)
};
//Furniture on-top & inside items prototype.
Furniture.prototype.populate =function(){
  for (var key in this){
    if (key === "onTop" || key === "inside"){
      while ( this[key] > 0){
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

//OBJECT DEFINITIONS
//Room constructor.
function Room(size) {
  this.space = size;
  this.type = "generic";
  this.contents = [];
}
//Furniture contsructor.
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

//Furniture & item objects array.

var furnitureArray = [];
var itemArray = [];

/*FRONT END LOGIC*/
$(document).ready(function(){
  //Post items inside of the furniture to the page.
  function furnitureInside(furnitureItemsInside, idInside) {
    furnitureItemsInside.forEach(function(itemInside) {
      $("ul#" + idInside).append("<li>" + itemInside.name  + "</li></ul>")
    });
  };
  //Post items on-top of the furniture to the page.
  function furnitureOnTop(furnitureItemsOnTop, idOnTop) {
    furnitureItemsOnTop.forEach(function(itemOnTop) {
      $("ul.item-on-top#"+ idOnTop).append("<li>" + itemOnTop.name  + "</li></ul>")
    });
  };
  //Create the inside items header if the Furniture inside items aray is not empty.
  function insideHeader(furnitureItemsInside, itemName, idInside) {

    if (furnitureItemsInside.length === 0) {

      return ''
    } else {
      return ("<h3>inside the " + itemName + " is: </h3><ul class='item-inside' id='" + idInside + "'></ul>");
    }
  }
  //Create the on-top header if the Furniture on-top aray is not empty.
  function onTopHeader(furnitureOnTop, itemName, idOnTop) {

    if (furnitureOnTop.length === 0) {

      return ''
    } else {
      return ("<h3>and on top of the " + itemName + " is: </h3><ul class='item-on-top' id='" + idOnTop + "'></ul>")
    }
  }
  //Post the room dimensions, furnite in the room, & items on-top of/inside of the furniture.
  function roomFurniture(roomFurnitureArray) {
    var idNum = 0;
    var idInside = "idInside" + idNum;
    var idOnTop = "idOnTop"+idNum
    roomFurnitureArray.forEach(function(furnishedItem) {
      idNum = idNum + 1;
      idInside = "idInside" + idNum;
      idOnTop = "idOnTop" + idNum;
      $("ul.furniture").append("<li><h2>" + furnishedItem.name  + "</h2></li>" +
      insideHeader(furnishedItem.insideArray, furnishedItem.name, idInside) +
      onTopHeader(furnishedItem.onTopArray, furnishedItem.name, idOnTop));
      furnitureInside(furnishedItem.insideArray, idInside);

      furnitureOnTop(furnishedItem.onTopArray, idOnTop);
    })
  };
  //Create the randomly generated DND room and it's attributes.
  $("form#room").submit(function() {
    event.preventDefault();
<<<<<<< HEAD

=======
    $("#description").hide();
>>>>>>> sgrf
    $("#result").fadeOut();
    $("#result").empty();
    var generatedRoom = makeRoom();
    var generatedFurniture = generatedRoom.contents;
<<<<<<< HEAD

    $("#result").append("You have entered a room that is " + generatedRoom.space * 5 + " square feet. The room has: <ul class='furniture'></ul>");

=======
    console.log(generatedRoom.contents);
    $("#result").append("<h2>You have entered a room that is " + generatedRoom.space * 5 + " square feet. The room has: </h2><ul class='furniture'></ul>");
>>>>>>> sgrf
    roomFurniture(generatedRoom.contents);
    $("#result").fadeIn();

  });
});
