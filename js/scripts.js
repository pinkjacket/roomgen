/*BACK END LOGIC*/
function randPick(arr){
  //take in an array
  return Math.floor((Math.random()*arr.length)+1)
}

function dice(){
  var diceRoll1 = Math.floor((Math.random()*10)+1)
  //var diceRoll2 = Math.floor((Math.random()*10)+1)
  return diceRoll1;
  //return diceRoll2;
}

function size(){
  var roomSize = (dice() * dice());
  console.log(roomSize)
  return roomSize;

}

//1 space represents a 5ft * 5ft square



//logic for how long
var space = size();
//var stuff = [{name:"desk", size:4}, {name:"table", size:12}, {name:"statue", size:40}, {name:"bed", size:13}]


var stuff = [new Chair, new Table, new Bed, new Chest]



function spaceFill(space, stuff){
  var area = space;
  var contain = [];
  for(var i=0; i < (stuff.length); i++){
    var thing = stuff[i];
    //each thing in furniture will be an object with a size property
    if (thing.size > area){
      return contain;
    } else {
      contain.push(thing)
      area -= thing.size;
    }
  }
  console.log(contain);
}

console.log(spaceFill(space, stuff));

//Object Definitions-------------------------------------


// Furniture contsructor.
function Furntiure (name, size, onTop, inside) {
  this.name = name;
  this.size = size;
  this.onTop = onTop;
  this.inside = inside;
  this.onTopArray = [];
  this.insideArray = [];
  furnitureArray.push(this);
};
//Furniture objects array.
var furnitureArray = [];
//Furniture objects.
var armoire = new Furniture("Armoire", 3, 3, 8);
var bed = new Furniture("Bed", 6, 10, 2);
var bench = new Furniture("Bench", 4, 5, 0);
var chair = new Furniture("Chair", 1, 2, 0);
var chest = new Furniture("Chest", 2, 7, 10);
var chestOfDrawers = new Furniture("Chest of Drawers", 4, 3, 8);
var couch = new Furniture("Couch", 4, 10, 0);
var counter = new Furniture("Counter", 1, 10, 7);
var desk = new Furniture("Desk", 3, 10, 7);
var nightStand = new Furniture("Night Stand", 1, 5, 5);
var ottoman = new Furniture("Ottoman", 1, 2, 10);
var table = new Furniture("Table", 4, 10, 0);
var throne = new Furniture("Throne", 2, 1, 0);
//Item constructor.
function Item(space, type, name) {
  this.space = 0;
  this.type = type;
  this.name = name;
  itemArray.push(this);
}
//Item objects array.
var itemArray = [];
//Item objects.
var cheese = new Item("1", "food", "Cheese");
var wine = new Item ("1", "drink", "Wine");
var gold = new Item ("1", "currency", "Gold");
var silver = new Item ("1", "currency", "Silver");
var copper = new Item ("1", "currency", "Copper");
var apple = new Item ("1", "food", "Apple");
var banana = new Item ("1", "food", "Banana");
var milk = new Item ("1", "drink", "Milk");
var ale = new Item ("1", "drink", "Ale");
var coal = new Item ("1", "material", "Coal");
var iron = new Item ("1", "material", "Iron");
var wool = new Item ("1", "material", "Wool");
var tin = new Item ("1", "material", "Tin");
var chef = new Item ("2", "tool", "Chef's Tools");
var tome = new Item ("1", "tool", "Tome");
var cookBook = new Item ("1", "tool", "Cook Book");
var blast = new Item ("2", "tool", "Blasting Kit");
var repair = new Item ("2", "tool", "Repair Kit");
var crowbar = new Item ("2", "tool", "Crowbar");
var lute = new Item ("3", "tool", "Lute");
var guitar = new Item ("3", "tool", "Guitar");
var healing = new Item ("2", "tool", "Healing Kit");
var matches = new Item ("1", "tool", "Matches");
var torch = new Item ("1", "tool", "Torch");
var forgery = new Item ("2", "tool", "Forgery Kit");
var spice = new Item ("2", "tool", "Spice Kit");
var book = new Item ("1", "tool", "Book of Tales");
var candle = new Item ("1", "tool", "Candle");
var spyGlass = new Item ("1", "tool", "Spy Glass");
var rope = new Item ("1", "tool", "Rope");
var alchemist = new Item ("1", "projectile", "Wine");

//FRONT END BELOW THIS LINE------------------------------
$(document).ready(function(){
  $("form#room").submit(function(event){
    event.preventDefault();

  })
});
