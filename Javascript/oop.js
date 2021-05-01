let employee = {  // Object literal syntax
    name: 'John',
    age: 34,
    overttime: 10,
    baseSalary: 50.0,

    getSalary: function() {
        return this.baseSalary * 40 + (this.baseSalary * 1.5) * this.overttime;
    }
}

console.log(employee.getSalary());

let circle = {
    radius: 1.0,
    location: {
        x: 1,
        y: 1
    },

    draw: function() {  // Method
        console.log('drawing');
        console.log('done');
    }
}

circle.draw();
// NOTE: There is no class concept in Javascript
// Create objects with factory function
function createCircle(radius) {
    return {
        radius, // We don't have to write radius: radius, if the property name and the value variable have the same name
        draw: function() {
            console.log('drawing radius: ' + this.radius);
        }
    }
}

let circle1 = createCircle(3);
circle1.draw();

// Constructor function
function Circle(radius) {  // Name should start with a Caps
    this.radius = radius; // Use this keyword
    this.draw = function() {
        console.log('drawing radius: ' + this.radius);
    }
}

// new creates an empty object
// Passes it to the Constructor function
// Inside the constructor function the new object is available as the this keyword
let circle2 = new Circle(45); // Don't forget new. Without new the object returned is global
circle2.draw();
// Every object has a property called constructor
// The constructor property has the reference of the constructor function
console.log(circle1.constructor); // This is a f Object()
console.log(circle2.constructor); // This is a f Circle()

let x = {};

console.log(x.constructor);

// functions are objects as well
console.log(Circle.name);
console.log(Circle.constructor);

// A function can be created as follows
// The last argument is the function body.
// All the other arguments are parameters of the function
const Circle1 = new Function('radius', 'name', `
    this.radius = radius; // Use this keyword
    this.name = name;
    this.draw = function() {
    console.log('drawing radius: ' + this.radius + ', name is ' + this.name);
}
`);

let c4 = new Circle1(27, 'Madhu');
c4.draw();

// Calling a constructor function
// First argument is this and the others are the explict arguments
let newObject = {};
Circle1.call(newObject, 234, 'adad'); // This is equivalent to the new operator
newObject.draw();

newObject = {};
Circle1.apply(newObject, [432, 'Damn']); // Same as call, but the arguments are passed as an array.
newObject.draw();

// Properties can be dynamically added to objects
newObject.location = { x: 1, y: 2};

console.log(newObject);

newObject.info = {'ideal key': 653}
console.log(newObject.info['ideal key']);
console.log(newObject);

delete newObject.location;
console.log(newObject);
delete newObject.info['ideal key'];
console.log(newObject);

newObject.arrayVal = [1, 2, 3, 4];
// Iterating through the properties of an object
for(let key in newObject) {
    if (typeof newObject[key] == 'function') { // NOTE: Not equals operator is !==
        console.log(key, 'is a function');
        console.log(key + ': ' + newObject[key]); // We don't have to concatenate the values
    } else if (typeof newObject[key] == 'object') {
        console.log(key, 'is an object');
    } else {
        console.log(key, 'is a', typeof newObject[key]);
    }
}

const keys = Object.keys(newObject);
console.log(keys);
// INFO: Trying to iterate over an array gives the indices of the keys
for(let index in keys) {
    console.log(keys[index], 'is a', typeof newObject[keys[index]]);
}

if( 'info' in newObject) { // INFO: Checking if an object has a property
    console.log('newObject has a property called "info"');
}

// Private variables / abstraction
// Constructor function
function Square(side) {  // Name should start with a Caps
    // Closure / Currying
    // This variable is local scoped to this Constructor function and is not available for access outside 
    let defaultLocation = { x: 0, y: 0};
    let determineOptimalLocation = function(factor) {
        console.log('default locatio is', defaultLocation, 'factor is', factor);
    };
    this.side = side; // Use this keyword
    this.draw = function() {
        determineOptimalLocation(0.3); // NOTE: No this keyword
        console.log('drawing side: ' + this.side);
    }

    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    //INFO: Defining Getters and setters
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            // We can validate the object
            if(typeof value == 'object' && 'x' in value && 'y' in value) {
                console.log('Value is a valid point with x and y coordinates. So setting this value');
                defaultLocation = value;
            }
            if (!value.x && !value.y) {
                throw new Error('Invalid location');
            }
        }
    });

}

let sq = new Square(10);
sq.draw();

//sq.defaultLocation = 23; // This will not set the value, because this is not a point with x and y coordinates
sq.defaultLocation = { x: 23, y: 32};
