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
