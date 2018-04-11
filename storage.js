//create  homeInventoryDatabase as an empty object

const homeInventoryDatabase2 = {};

//create empty arrays for categories 

homeInventoryDatabase2.musicGear = [];
homeInventoryDatabase2.chiliseeds = [];
homeInventoryDatabase2.bikes = [];

//create objects of HouseItems
// function Music(nameStuff,tuff, locationStuff) {
//     this. nameStuff, 
//     this= tuff,
//     this= locationStuff
// }

function HouseItems(nameStuff, descriptionStuff, locationStuff) {
    this.name = nameStuff; 
    this.description = descriptionStuff;
    this.location = locationStuff;
}

//  now mass produce objects

const dirtJumper = new HouseItems("Giant STP", "adult BMX", "living room");

const garyFisher = new HouseItems("Gary Fisher Tassajara", "adult BMX", "living room");

const stumpjumper = new HouseItems("Giant STP", "mountain bike", "living room");

const dynoVFR = new HouseItems("Dyno VFR", "vintage bmx from childhood", "living room");

const rolandFantom  = new HouseItems("Roland Fantom X", "keyboard/workstation", "living room");

const brawley = new HouseItems("Brawley", "bass guitar", "living room");

const bossLoop = new HouseItems("Boss RC-50", "loop station", "living room");

const trinidadScorpion = new HouseItems("Trinidad Moruga Scorpion", "super duper hot chili", "cupboard");

const manzana = new HouseItems("Manzana", "rare, pubescen family", "cupboard");

const lemonDrop = new HouseItems("Lemon Drop", "yellow, fruity", "cupboard");

//make  3 functions to push objects into correct array

function intoBikes(bikeName) {
    homeInventoryDatabase2.bikes.push(bikeName); 
}

function intoMusicGear(pieceOfGear) {
    homeInventoryDatabase2.musicGear.push(pieceOfGear);
}

function intoChiliSeeds(seeds) {
    homeInventoryDatabase2.chiliseeds.push(seeds);
}

// push obects into array

intoBikes(dirtJumper); 
intoBikes(garyFisher);
intoBikes(stumpjumper);
intoBikes(dynoVFR);

intoMusicGear(rolandFantom);
intoMusicGear(brawley);
intoMusicGear(bossLoop);

intoChiliSeeds(trinidadScorpion);
intoChiliSeeds(manzana);
intoChiliSeeds(lemonDrop);

console.log(homeInventoryDatabase2.bikes[2]);
console.log(homeInventoryDatabase2.chiliseeds[1]);
console.log(homeInventoryDatabase2.musicGear[0]);

function saveDatabase (databaseObject, localStorageKey) {
    const stringifiedDatabase = JSON.stringify(databaseObject)
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}
saveDatabase(homeInventoryDatabase2, "Matt's Stuff 2");



