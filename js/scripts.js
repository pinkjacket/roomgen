function randPick(arr){
  //take in an array
  return Math.floor((Math.random()*arr.length)+1)
}

function dice(){
  return Math.floor((Math.random()*10)+1)
}
//1 space represents a 5ft * 5ft square

function chair (onTop) {
  this.size: 1;
  this.onTop: onTop;
}

function throne (onTop) {
  this.size: 2;
  this.onTop: onTop;
}

function table (onTop) {
  this.size: 4;
  this.onTop: onTop;
}

function bed (onTop) {
  this.size: 6;
  this.onTop: onTop;
}

function chest (inside) {
  this.size: 2;
  this.inside: inside;
}

function armoire (inside) {
  this.size: 3;
  this.inside: inside;
}

function couch (onTop) {
  this.size: 4;
  this.onTop: onTop;
}

function nightStand (onTop, inside) {
  this.size: 1;
  this.onTop: onTop;
  this.inside: inside;
}

function chestOfDrawers (onTop, inside) {
  this.size: 4;
  this.onTop: onTop;
  this.inside: inside;
}

function counter (onTop, inside) {
  this.size: 1;
  this.onTop: onTop;
  this.inside: inside;
}

function desk (onTop, inside) {
  this.size: 3;
  this.onTop: onTop;
  this.inside: inside;
}

function ottoman () {
  this.size: 1;
}

function bench (onTop) {
  this.size: 4;
  this.onTop: onTop;
}

// function furntiure (name, size, onTop) {
//   this.name: name;
//   this.size: size;
//   this.onTop: onTop
// }
