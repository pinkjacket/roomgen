function randPick(arr){
  //take in an array
  return Math.floor((Math.random()*arr.length)+1)
}

function dice(){
  return Math.floor((Math.random()*10)+1)
}
//1 space represents a 5ft * 5ft square

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
