#!/usr/bin/env node
//in this script, i'm going to play with some objects

const me = { 
    name : "a.rehman",
    age : 23,
    species : "Human",
    position : "intern",
    status : "student",
    married : false
};

const you = {
    name : "VScode",
    age : "Don't know",
    species : "software",
    info : "I don't know much about it"
};
// I created two objects, now let's make some output

console.log ("properties of 'me' ")
console.log ("name = " + me.name)
console.log ("age = " + me.age)
console.log ("Species = " + me.species)
console.log ("status = " + me.Status)
console.log ("position = " + me.position)
console.log ("married status = " + me.married)


//comment for line break
console.log ("\nProperties of 'you' ")
for (let key in you) {
    console.log(`${key}: ${you[key]}`);
}
//that's just end.
// bye.