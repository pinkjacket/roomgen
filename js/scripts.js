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

Board.prototype.populate = function(arr){
  var newRowArr = this.rowArr;
  arr.forEach(function(element) {
    var arrayElementColumn = Math.floor(Math.random() * dice1);
    var arrayElementRow = Math.floor(Math.random() * dice2);
    console.log(arrayElementColumn)
    var randomArrayColumn = newRowArr[arrayElementColumn];
    console.log(randomArrayColumn);
    randomArrayColumn[dice2] = "X";
    console.log(randomArrayColumn[dice2])
    newRowArr[arrayElementColumn] = randomArrayColumn;
  })
  console.log(newRowArr);
  this.rowArr = newRowArr;
}

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
      $("ul.furniture").append("<li>" + furnishedItem.name  + "</li>" + "<h4>inside the the " + furnishedItem.name + " is: </h4><div class='small'><ul class='item-inside' id='" + idInside + "'></ul></div>" + "<h4>and on top of the " + furnishedItem.name + " is:</h4><div class='small'><ul class='item-on-top' id='" + idOnTop + "'></ul></div><br>")
      furnitureInside(furnishedItem.insideArray, idInside);
      furnitureOnTop(furnishedItem.onTopArray, idOnTop);
    })
  };




  $("form#room").submit(function() {
    event.preventDefault();
    $("#board").fadeOut();
    $("#board").empty();
    $("#result").fadeOut(function(){
      $("#result").empty();
      var generatedRoom = makeRoom();
      var generatedFurniture = generatedRoom.contents;
      console.log(generatedFurniture);
      console.log(generatedRoom);

      $("#result").append("<h3>You have entered a room that is " + generatedRoom.space * 5 + " square feet. The room has:<br><br><ul class='furniture'></ul></h3>");
      roomFurniture(generatedRoom.contents);
      console.log(generatedRoom.space);
      var newBoard = new Board(dice1, dice2);
      console.log(newBoard.rowArr[0])
      newBoard.populate(generatedFurniture);
      $("#board").fadeIn();
      $("#board").append("<h2>Board</h2>" + newBoard.rowArr.join(" "));
  });

  // for (var i=1; i <= Math.floor(Math.sqrt(room.space)) /*10 if undefined, +1?*/; i++) {
  //   console.log(room.space);
  //   $("#board").append('<div class="row" id="row' + i + '">' + '</div>');
  //   for (var j=1; j <= Math.floor(Math.sqrt(room.space)) /*10 if undefined, +1?*/; j++) {
  //     console.log(room.space);
  //     $("#row" + i).append('<div class="col-md-1 col' + j + '">');
  //   }
  // }

    $("#result").fadeIn();
    console.log(dice1);
    console.log(dice2);

  });
});
