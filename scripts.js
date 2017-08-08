//Use this file to implement Part One of your project
'use strict';

let animal = {};

animal.username = 'kingKong';

animal['tagline'] = 'i am king of kongs';

var noises = [];
animal.noises = noises;

var count = 0;
for(var key in animal){
  count++;
  if(key === 'username'){
    console.log('hi my name is ' + animal[key]);
  }
  if(key === 'tagline'){
    console.log('i like to say ' + animal[key]);
  }
}
console.log(count);

var noiseArray = [];
noiseArray.push('oink');
noiseArray.unshift('woof');//adds to beginning of array;
noiseArray.push('moo');//add to end of array;
console.log(noiseArray);

noiseArray[3] = 'snarl';
noiseArray[noiseArray.length] = 'kaching';
console.log(noiseArray);
console.log(noiseArray.length);
console.log(noiseArray[noiseArray.length-1]);

animal.noises = noiseArray;

var animals = [];
animal.animals = animals;

var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] };
var lion = { username: 'simba', tagline: 'Yolo!', noises: ['roar', 'honk', 'sneeze', 'growl'] };
var tiger = { username: 'riot', tagline: 'Yikes!', noises: ['growl', 'honk', 'sneeze', 'growl'] };
var liger = { username: 'biggie', tagline: 'im bigga than you', noises: ['complains'] };
animals.push(quackers, lion, tiger, liger);

function animalTestUser(username){
  var obj = { username: ''};
  if(arguments.length > 1){
    var otherArgs = [];
    for(var i = 1; i < arguments.length; i++){
      otherArgs.push(arguments[i]);
      obj.otherArgs = otherArgs;
    }
  }
  obj.username = username;
  return obj;
}

var testSheep = animalTestUser('CottonBall', {'loves dancing': true}, [1,2,3] );
console.log(testSheep); //{ username: 'CottonBall', otherArgs: [ {'loves dancing': true}, [1,2,3] ] }
var lamb = animalTestUser('lambchops');
console.log(lamb);

function AnimalCreator (username, species, tagline, noises, friends){
  var newAnimal = {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: friends
  }
  return newAnimal;
}

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(sheep);
