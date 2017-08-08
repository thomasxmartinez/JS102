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
console.log(animal.animals);
