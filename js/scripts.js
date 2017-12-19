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
  this.onTop: onTop;
}

var throne = function(onTop) {
  this.size: 2;
  this.onTop: onTop;
}

var table = function(onTop) {
  this.size: 4;
  this.onTop: onTop;
}

var bed = function(onTop) {
  this.size: 6;
  this.onTop: onTop;
}

var chest = function(inside) {
  this.size: 2;
  this.inside: inside;
}

var armoire = function(inside) {
  this.size: 3;
  this.inside: inside;
}

var couch = function(onTop) {
  this.size: 4;
  this.onTop: onTop;
}

var nightStand = function(onTop, inside) {
  this.size: 1;
  this.onTop: onTop;
  this.inside: inside;
}

var chestOfDrawers = function(onTop, inside) {
  this.size: 4;
  this.onTop: onTop;
  this.inside: inside;
}

var counter = function(onTop, inside) {
  this.size: 1;
  this.onTop: onTop;
  this.inside: inside;
}

var desk = function(onTop, inside) {
  this.size: 3;
  this.onTop: onTop;
  this.inside = inside;
}

var ottoman = function() {
  this.size: 1;
}

var bench = function(onTop) {
  this.size: 4;
  this.onTop: onTop;
}

// var furntiure = function(name, size, onTop) {
//   this.name: name;
//   this.size: size;
//   this.onTop: onTop
// }
