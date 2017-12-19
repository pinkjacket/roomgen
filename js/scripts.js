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
var space = 30
var stuff = [{name:"desk", size:4}, {name:"table", size:12}, {name:"statue", size:40}, {name:"bed", size:13}]
var furnitureArray[];
function spaceFill(space, stuff){
  var area = space;
  var contain = [];
  furnitureArray.push(this);


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
  console.log(contain);
}

console.log(spaceFill(space, stuff));

//Object Definitions-------------------------------------
function Chair (onTop) {
  this.size = 1;
  this.onTop = onTop;
}

function Throne (onTop) {
  this.size = 2;
  this.onTop = onTop;
}

function Table (onTop) {
  this.size = 4;
  this.onTop = onTop;
}

function Bed (onTop) {
  this.size = 6;
  this.onTop = onTop;
}

function Chest (inside) {
  this.size = 2;
  this.inside = inside;
}

function Armoire (inside) {
  this.size = 3;
  this.inside = inside;
}


function Couch (onTop) {
  this.size = 4;
  this.onTop = onTop;
}

function NightStand (onTop, inside) {
  this.size = 1;
  this.onTop = onTop;
  this.inside = inside;
}

function ChestOfDrawers (onTop, inside) {
  this.size = 4;
  this.onTop = onTop;
  this.inside = inside;
}

function Counter (onTop, inside) {
  this.size = 1;
  this.onTop = onTop;
  this.inside = inside;
}

function Desk (onTop, inside) {
  this.size = 3;
  this.onTop = onTop;
  this.inside = inside;
}

function Ottoman () {
  this.size = 1;
}

function Bench (onTop) {
  this.size = 4;
  this.onTop = onTop;
}
/*
function furntiure (name, type, size, onTop, inside) {
  this.name: name;
  this.type: type;
  this.size: size;
  this.onTop: onTop
  this.inside: inside;
}*/

// var furniture = function(name, size, onTop) {
//   this.name = name;
//   this.size = size;
//   this.onTop = 0;
//   this.inside = 0;
//   this.under = 0;
// }

//chair = new furniture ()

//items
var itemArray = [];
console.log(itemArray);

function Item(space, type, name) {
  this.space = 0;
  this.type = type;
  this.name = name;
  itemArray.push(this);
}

var cheese = new Item(1, "food", "Cheese");
var wine = new Item (1, "drink", "Wine");
var gold = new Item (1, "currency", "Gold x10");
var silver = new Item (1, "currency", "Silver x10");
var copper = new Item (1, "currency", "Copper x10");
var apple = new Item (1, "food", "Apple");
var banana = new Item (1, "food", "Banana");
var milk = new Item (1, "drink", "Milk");
var ale = new Item (1, "drink", "Ale");
var coal = new Item (1, "material", "Coal");
var iron = new Item (1, "material", "Iron");
var wool = new Item (1, "material", "Wool");
var tin = new Item (1, "material", "Tin");
var chef = new Item (2, "tool", "Chef's Tools");
var tome = new Item (1, "tool", "Tome");
var cookBook = new Item (1, "tool", "Cook Book");
var blast = new Item (2, "tool", "Blasting Kit");
var repair = new Item (2, "tool", "Repair Kit");
var crowbar = new Item (2, "tool", "Crowbar");
var lute = new Item (3, "tool", "Lute");
var guitar = new Item (3, "tool", "Guitar");
var healing = new Item (2, "tool", "Healing Kit");
var matches = new Item (1, "tool", "Matches");
var torch = new Item (1, "tool", "Torch");
var forgery = new Item (2, "tool", "Forgery Kit");
var spice = new Item (2, "tool", "Spice Kit");
var book = new Item (1, "tool", "Book of Tales");
var candle = new Item (1, "tool", "Candle");
var spyGlass = new Item (1, "tool", "Spy Glass");
var rope = new Item (1, "tool", "Rope");
var silkRope = new Item (1, "tool", "Silk Rope")
var alchemist = new Item (1, "projectile", "Alchemist's Fire");
var holyWater = new Item (1, "projectile", "Holy Water");
var thunderStone = new Item (1, "projectile", "Thunderstone");
var dagger = new Item (1, "weapon", "Dagger");
var sickle = new Item (1, "weapon", "Sickle");
var gauntlet = new Item (1, "weapon", "Gauntlet");
var mace = new Item (2, "weapon", "Mace");
var club = new Item (2, "weapon", "Club");
var shortspear = new Item (3, "weapon", "Shortspear");
var longspear = new Item (5, "weapon", "Longspear");
var quarterstaff = new Item (4, "weapon", "Quarterstaff");
var crossbow = new Item (3, "weapon", "Crossbow");
var bolt = new Item (1, "projectile", "Crossbow Bolts x10");
var dart = new Item (1, "projectile", "Darts x10");
var sling = new Item (2, "weapon", "Sling");
var lhammer = new Item (3, "weapon", "Light Hammer");
var handaxe = new Item (2, "weapon", "Hand Axe");
var battleaxe = new Item (4, "weapon", "Battleaxe");
var flail = new Item (3, "weapon", "Flail");
var longsword = new Item (4, "weapon", "Longsword");
var scimitar = new Item (3, "weapon", "Scimitar");
var lightShield = new Item (3, "armor", "Light Shield");
var heavyShield = new Item (5, "armor", "Heavy Shield");
var trident = new Item (4, "weapon", "Trident");
var warhammer = new Item (4, "weapon", "Warhammer");
var greateaxe = new Item (6, "weapon", "Greataxe");
var falchion = new Item (5, "weapon", "Falchion");
var greatclub = new Item (6, "weapon", "Greatclub");
var greatsword = new Item (6, "weapon", "Greatsword");
var halberd = new Item (6, "weapon", "Halberd");
var longbow = new Item (5, "weapon", "Longbow");
var shortbow = new Item (3, "weapon", "Shortbow");
var arrows = new Item (1, "projectile", "Arrows x20");
var dagger = new Item (1, "weapon", "Dagger");
var lance = new Item (5, "weapon", "Lance");
var paddedArmor = new Item (3, "armor", "Padded Armor");
var leatherArmor = new Item (3, "armor", "Leather Armor");
var studdedArmor = new Item (3, "armor", "Studded Armor");
var chainShirt = new Item (3, "armor", "Chain Shirt");
var hideArmor = new Item (4, "armor", "Hide Armor");
var scailMail = new Item (4, "armor", "Scale Mail");
var chainMail = new Item (4, "armor", "Chain Mail");
var breastplate = new Item (4, "armor", "Breastplate");
var splintMail = new Item (5, "armor", "Splint Mail");
var bandedMail = new Item (5, "armor", "Banded Mail");
var halfPlate = new Item (5, "armor", "Half-Plate");
var fullPlate = new Item (6, "armor", "Full-Plate");
var buckler = new Item (2, "armor", "Buckler");
var amuletHealth = new Item (1, "magic", "Amulet of Health");
var amuletPlanes = new Item (1, "magic", "Amulet of Planes");
var amuletArmor = new Item (1, "magic", "Amulet of Natural Armor");
var amuletFists = new Item (1, "magic", "Amulet of Mighty Fists");
var bagHolding = new Item (2, "magic", "Bag of Holding");
var bagTricks = new Item (2, "magic", "Bag of Tricks");
var beltStrength = new Item (2, "magic", "Belt of Giant Strength");
var bootElf = new Item (2, "magic", "Boots of Elvenkind");
var bootLevitation = new Item (2, "magic", "Boots of Levitation");
var bootWing = new Item (2, "magic", "Winged Boots");
var candleTruth = new Item (1, "magic", "Candle of Truth");
var capeMountebank = new Item (2, "magic", "Cape of the Mountebank");
var carpetFlying = new Item (3, "magic", "Carpet of Flying");
var crystalBall = new Item (2, "magic", "Crystal Ball");
var cubeForce = new Item (1, "magic", "Cube of Force");
var cubeGate = new Item (1, "magic", "Cubic Gate");
var darkskull = new Item (1, "magic", "Darkskull");
var deckIllusions = new Item (1, "magic", "Deck of Illusions");
var elixerFire = new Item (1, "magic", "Elixer of Fire");
var elixerHiding = new Item (1, "magic", "Elixer of Hiding");
var elixerLove = new Item (1, "magic", "Elixer of Love");
var elixerTruth = new Item (1, "magic", "Elixer of Truth");
var gemSeeing = new Item (1, "magic", "Gem of Seeing");
var gloveStoring = new Item (2, "magic", "Glove of Storing");
var handGlory = new Item (1, "magic", "Hand of Glory");
var handyHaversack = new Item (3, "magic", "Handy Haversack");
var harpCharming = new Item (3, "magic", "Harp of Charming");
var hatDisguise = new Item (2, "magic", "Hat of Disguise");
var instantFortress = new Item (1, "magic", "Instant Fortress");
var maulTitans = new Item (8, "magic", "Maul of the Titans");
var potionWounds = new Item (1, "potion", "Cure light wounds (Potion)");
var potionElements = new Item (1, "potion", "Endure Elements (Potion)");
var potionAnimal = new Item (1, "potion", "Hide from Animals (Potion)");
var potionUndead = new Item (1, "potion", "Hide from Undead (Potion)");
var potionJump = new Item (1, "potion", "Jump (Potion)");
var potionMage = new Item (1, "potion", "Mage Armor (Potion)");
var potionFang = new Item (1, "potion", "Magic Fang (Potion)");
var potionStone = new Item (1, "potion", "Magic Stone (Oil)");
var potionWeapon = new Item (1, "potion", "Magic Weapon (Oil)");
var potionFear = new Item (1, "potion", "Remove Fear (Potion)");
var potionSanctuary = new Item (1, "potion", "Sanctuary (Potion)");
var potionEnlarge = new Item (1, "potion", "Enlarge Person (Potion)");
var potionReduce = new Item (1, "potion", "Reduce Person (Potion)");
var potionAid = new Item (1, "potion", "Aid (Potion)");
var potionBarkskin = new Item (1, "potion", "Barkskin (Potion)");







//FRONT END BELOW THIS LINE------------------------------
$(document).ready(function(){
  $("form#room").submit(function(event){
    event.preventDefault();

  })
});
