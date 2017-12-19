function randPick(arr){
  //take in an array
  return Math.floor((Math.random()*arr.length)+1)
}

function dice(){
  return Math.floor((Math.random()*10)+1)
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

//FRONT END BELOW THIS LINE------------------------------
