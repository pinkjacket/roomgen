function randPick(arr){
  //take in an array
  return Math.floor((Math.random()*arr.length)+1)
}

function dice(){
  var diceRoll1 = Math.floor((Math.random()*10)+1)
  var diceRoll2 = Math.floor((Math.random()*10)+1)
  return diceRoll1;
  return diceRoll2;
}

function size(roomSize){
  var roomSize = (diceRoll1 * diceRoll2);
  console.log(roomSize)
  return roomSize;

}

//1 space represents a 5ft * 5ft square


//logic for how long
var space = 30
var stuff = [{name:"desk", size:4}, {name:"table", size:12}, {name:"statue", size:40}, {name:"bed", size:13}]

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

  return area;
}

console.log(spaceFill(space));

//Object Definitions-------------------------------------
var chair = function(onTop) {
  this.size: 1;
  this.onTop: onTop
}

var table = function(onTop) {
  this.size: 4;
  this.onTop: onTop
}

var bed = function(onTop) {
  this.size: 6;
  this.onTop: onTop
}

var chest = function(inside) {
  this.size: 2;
  this.inside: inside
}

var armoire = function(inside) {
  this.size: 3;
  this.inside: inside;
}

// var furntiure = function(name, size, onTop) {
//   this.name: name;
//   this.size: size;
//   this.onTop: onTop
// }

//FRONT END BELOW THIS LINE------------------------------




