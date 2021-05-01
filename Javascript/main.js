// data types
// Value types - primitives like String, Number, Boolean, Symbol, undefined and null
// Reference types - Object, Function and Arrays
// Value types are passed by values and reference types are passed by reference.

// var has issues in scoping, So use let or const instead.
var variable = 'Some string variable';

let name = 'Madhu';

console.log(name);

let firstName = 'Madhusuthanan';
let lastName = 'Seetharam';

console.log(firstName + " " + lastName);

const PI = 3.14;

let undef = undefined;
let nullVar = null;

console.log(undef);
console.log(nullVar);

let stringVar = 'String';
let numberVar = 30;
let booleanVar = true;
let undefVar = undefined;
let nullVar2 = null;

console.log(typeof stringVar);
console.log(typeof numberVar);
console.log(typeof booleanVar);
console.log(typeof undefVar);
console.log(typeof nullVar2);
console.log(typeof nullVar);

let person = {
    name: 'Madhu',
    age: 43
}

console.log(person.name);
person['name'] = 'Ladha';
console.log(person['name']);

person.name = 'Aksh';
console.log(person.name);

console.log(typeof person);

let colors = ['red', 'blue', 'green'];

console.log(colors);
console.log(typeof colors);

colors[3] = 'yellow';
console.log(colors);
colors[3] = 4;
console.log(colors);
console.log(colors.length);

function greet(name) {
    console.log('Hello ' + name);
}

greet('Mad');

greet('Crazy');