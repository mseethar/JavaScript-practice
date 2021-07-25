
//#region Global Objects
// INFO: The following are not in the globals but Global Objects
// Every module defines them. So it looks like globals
// Prints the absolute directory path of this file.
console.log(__dirname);
// Prints the absolute path of this file
console.log(__filename);
console.log(exports);
console.log(module);
console.log(require);
console.log(this);
this.count = 5;
console.log(this);
//#endregion

//#region JavaScript built-in Objects
// The following built-in objects are defined by the Javascript standard itself
// These can also be called Global properties

// ======= Value properties =======

// Infinity - is a numerical value representing Infinity
console.log(Infinity);
console.log(1/0 === Infinity); // This evaluates to true

console.log(NaN);
console.log((0/0) === NaN);  // This evaluates to false. Use Number.isNaN() or isNaN()
console.log(Number.isNaN(0/0));
console.log(isNaN(0/0));

// undefined - This is one of the primitive types in JavaScript
// undefined represents the value of the type undefined
// It is a property of the global object. That is, it is a variable in global scope.
// undefined is a primitive value automatically assigned to variables that have
// just been declared, or to formal arguments for which there are no actual arguments.

let x;
console.log(x);
console.log(x===undefined);

// globalThis - This is the global object itself
// The global globalThis property contains the global this value, which is akin to the global object.
console.log("***********************  globalThis  ***************************")
console.log(globalThis);
console.log(globalThis.setInterval === setInterval);

console.log(globalThis.XMLHttpRequest);

function canMakeHTTPRequest() {
    return typeof globalThis.XMLHttpRequest === 'function';
}

console.log(canMakeHTTPRequest());

// ======= Function properties =======
// 1. eval() - Evaluates any JavaScript code given as a String
// NEVER USE eval() - It is a SECURITY RISK
console.log(eval(' 1 + 1'));
console.log(eval(' setTimeout(() => {console.log("Timed out!");}, 1000 ); ')); // The eval() Returns the Timeout object
console.log(eval('console.log("What an efficient way of logging to the console!");')); // The eval() returns undefined

// 2. isFinite() - Returns true if the number passed is finite.
console.log(isFinite(1000));
console.log(isFinite(1000/0));
console.log(isFinite('10000000000000000000000000000000000000000000000000000000000000000000000000000000'));
console.log(isFinite(Math.pow(10, 1000)));

// 3. isNaN()
console.log(isNaN(0/0));

// 4. parseFloat()
console.log(parseFloat('3.14'));
console.log(parseFloat('314'));
// 5. parseInt()
console.log(parseInt('762772'));
console.log(parseInt('7627.72'));  // Returns 7627

// 6. encodeURI()
// Escapes all characters except A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #

const uri = 'https://mozilla.org/?x=шеллы';
const encoded = encodeURI(uri);
console.log(encoded);
// expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

try {
  console.log(decodeURI(encoded));
  // expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // catches a malformed URI
  console.error(e);
}

let set1 = ';,/?:@&=+$'
console.log(encodeURI(set1));

// 7. encodeURIComponent()
// Escapes all characters except A-Z a-z 0-9 - _ . ! ~ * ' ( )
console.log(encodeURIComponent(set1));

// 8. decodeURI()
// 9. decodeURIComponent()
//#endregion