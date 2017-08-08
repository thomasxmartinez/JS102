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
