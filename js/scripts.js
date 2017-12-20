//Loose Helper Files

function randPick(arr){
  //take in an array
  return Math.floor((Math.random()*arr.length))
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

//var stuff = [{name:"desk", size:4}, {name:"table", size:12}, {name:"statue", size:40}, {name:"bed", size:13}]

//var stuff = [new Chair, new Table, new Bed, new Chest]

function makeRoom(){
  var newRoom = new Room(size(), "generic");
  return newRoom;
  // spaceFill(newRoom.size, stuff /*replace with furniture array*/)

  console.log("foo");
}



//Object Definitions-------------------------------------
function Room(space, type) {
  this.space = size();
  this.type = type;
  this.contents = [];
}

// Furniture contsructor.
function Furniture (name, size, onTop, inside) {
  this.name = name;
  this.size = size;
  this.onTop = onTop;

  this.onTopArray = [];
  this.insideArray = [];
  furnitureArray.push(this);
};

//Item constructor.
function Item(space, type, name) {
  this.space = 0;
  this.type = type;
  this.name = name;
  itemArray.push(this);
}

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



var itemArray = [];

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
var silkRope = new Item (1, "tool", "Silk Rope");
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

//Prototypes-------------------------------------------------------------------------------

Room.prototype.populate = function(){
  var area = this.size;
  //push results to this.contents

  while (area > 0){
    var thing = furnitureArray[randPick(furnitureArray)];
    if (thing.size > area){
      return
    } else {
      this.contents.push(thing)
      area -= thing.size
    }

  }

}

Furniture.prototype.populate =function(){
  var area = this.size;
  //push results to this.contents
  for (var key in this)
    if (key === "onTop" || key === "inside" || key === "under"){
      while (area > 0){
        var thing = furnitureArray[randPick(furnitureArray)];
        if (thing.size > area){
          return
        } else {
          this.contents.push(thing)
          area -= thing.size
        }
      }
    }
}

// function itemArrayForEach(itemArray) {
//   itemArray.forEach(function(item) {
//     console.log(item.name);
//     return "<p>" + item.name + "</p>";
//   })
// }

function itemArrayForEach(itemArray) {
  itemArray.forEach(function(item) {
    if (!item) {
      console.log("addfjkl");
    } else {
      $("ul.items").append("<li>" + item.name  + "</li>")
    }
  }
)}
//FRONT END BELOW THIS LINE------------------------------
$(document).ready(function(){
  $("form#room").submit(function(event){
    event.preventDefault();
    $("#result").fadeOut();
    $("#result").empty();
    var room = makeRoom();
    console.log(room);

    $("#result").append("You have entered a room that is " + room.space * 5 + " square feet. The room has: <ul id='stuff-list'></ul>");
    console.log(furnitureArray);
    //var items = itemArrayForEach(itemArray)
    furnitureArray.forEach(function(thingy) {
      debugger;
      console.log(thingy);
      $("#stuff-list").append('<li class="furnitureItem"> A ' + thingy.name + ' with </li><ul class="items">' + "</ul>" )
   });
    itemArrayForEach(itemArray);

    $("#result").fadeIn();
  }
)});
