console.log("Hello world!");

/* Data Types: 
undefined, null, boolean, string, symbol, number and object	
*/

var myName = "Ilia";

myName = 8;

// variable that will only be used in the current scope
let ourName = "freeCodeCamp";

// variable that never changes
const pi = 3.14;

// semi colons are optional, but recommended

var a; 
var b = 2;

console.log(a)
a = 7; 

b = a;

console.log(a);

// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";

// Do not change code below this line
a = a + 1;
b = b + 5; 
c = c + " String!"

console.log("a b and c are: ", a, b, c)

// Case sensitive variables
var andy ;
var Andy ; 

// These are different variables
// Camel case is a common naming convention 


// adding numbers
var sum = 10 + 10;

// ubstracting 
var difference = 84 - 42;

// multiplying 
var product = 21 * 2;

// dividing 
var quotient = 126 / 3;

// incrementing and decrementing a number 
var myVar = 97; 
myVar++; 
myVar--;

// decimal numbers 
var decimal = 5.7; 

// multiplying & diciding
var product = 2.0 * 1;
var quotient = 4.3 / 2;

// modulo
var remainder; 
remainder = 11 % 3;

// augmented math ops
var d = 3; 
d += 39;
d -= 2; 
d *= 3;
d /= 3;

// Declare Strings
var firstName = "Alan";
var lastName = "Turing";

// Escaping characters
var string = "I am a \"double quoted\" string inside \"double quotes";

// Quoting strings with single quotes
var anotherString = "<a href='example.com'>Link</a>"

// Escape sequences in strings 
/*****
CODE  Output
\'	  single quote
\"	  double quote
\\    backslash
\n    newline
\r    carriage return
\t    tab
\b    backspace
\f    form feed
*****/
var escapeExample = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(escapeExample);

// String concat 
var concatStr = "I come first. " + "I come second."
concatStr += "I come third!";

var myName = "Ilia"
var greeting = "My name is " + myName + ". Nice to meet you!"

// Appending variables to Strings
var one = "one";
var two = " plus two";
one+=two;

// length of string
var word = "Lovelace"; 
wordLength = word.length

// bracket notation
var firstWordChar = word[0];

// string immutability 
var immutableExample = "Jello World!";
	// immutableExample[0] = "H" -> wrong
immutableExample = "Hello World!";

// word blanks example

function wordBlanks (noun,adj,verb,adverb){
	var result = "";
	result = "The " + adj +" "+ noun +" "+ verb + " to the store " + adverb + ".";

	return result;
}

console.log(wordBlanks("dog","big","ran","quickly"))

// Arrays
var myArr = ["John", 23];

// Nested arrays 
var nestedArr = [["Elijah", 23],["Michael", 26]] 

// Accessing arrays 
var nums = [1,2,3,4];
var secondEl = nums[1];
nums[0] = 42;

// selecting in nested arrays 
console.log(nestedArr[1][1]); // accessing 26

// append data with push
nums.push(5);
console.log("pushed 5 to nums", nums);

// remove and get with pop
var popped = nums.pop(); 
console.log(popped);

// The shift function
var theAnswer = nums.shift();
console.log(theAnswer); 

// The unshift function
nums.unshift("42");
console.log(nums);

// Nested arrays; shopping lis
var myList = [["cereal", 3],["milk", 2],["juice", 2]]

// reusable code -> functions 
function reusableFunction() {
	console.log("Heyya, World!");
}

reusableFunction();
reusableFunction();

// func params 
function funcWithArgs(a,b){
	console.log(a - b);
}

funcWithArgs(65,23);

// scope reffers to the visibility of variables
var globalVar = 10; 

function f1(){
	oopsGlobal = 5;
};

function f2(){
	var output="";
	if(typeof globalVar != "undefined"){
		output += "globalVar: " + globalVar; 
		output += "\n";
	}
	if(typeof oopsGlobal != "undefined"){
		output += "oopsGlobal: " + oopsGlobal; 
	}
	console.log(output);
}

f1();
f2();

// local scope and functions 

function myLocalScope() {
	var localVar = 5;
	console.log(localVar);
}

myLocalScope();
	// console.log(localVar); -> gives Error

// global vs local scope in functions

var outerWear = "T-shirt";

function myOutfit(){
	var outerWear = "Sweater";
	return outerWear;
};

console.log(myOutfit());
console.log(outerWear);

// Return a value from a function

function minusSeven(num) {
	return num - 7;
}

console.log(minusSeven(49));

// understanding undegfined value returned from a function

var sum = 0;

function addThree() {
	sum += 3;
}
function addFive() {
	sum += 5;
}
	// if we lof these func out, they'll return undefined 

// assignment with return var
var changed = 0; 

function change(num) {
	return (num + 5) / 3;
}

changed = change(85);

// Stand in Line 

function nextInLine(arr, item) {
	arr.push(item);
	return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Boolean values 
function welcomeToBooleans() {
	return false;
}

// conditional logic, if-statement
condition = true;

if(condition){
	console.log("Yes it's true");
}

// comparison with the equality operator
var val = "42";
if(val == 42){
	console.log("The answer is correct");
}

//  comparison with the strict equality operator
var val = "42";
if(val === 42){
	console.log("The answer is correct");
}else{
	console.log("The answer is not correct");
}

// comparison with the inequality operator 
if (val != 99) {
	console.log("Not equal");
}

// comparison with the strict inequality operator 
if (val !== 42) {
	console.log("Not equal");
}

// other comparison operators are 
// <, >, <=, >=; &&(and) , ||(or)

// To chain if statements use the else if statement
if( val > 43 ){
	console.log("larger");
}else if(val==42){
	console.log("equal");
}else{
	console.log("smaller")
}

// Order in else if chains is important

function testSize(num){
	if(num<5){
		return "Tiny"
	}else if(num<10){
		return "Small"
	}else if(num<15){
		return "Mediim"
	}else if(num<20){
		return "Large"
	}else{
		return "Huge"
	}
}

for (var i = 0; i < 5; i++) {
	console.log(testSize(i*5));
}

// Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey","Double Bogey", "Go home!"];
function golfScore(par, strokes){
	if(strokes == 1){
		return names[0];
	}else if(strokes <= par - 2){
		return names[1]
	}else if(strokes == par - 1){
		return names[2]
	}else if(strokes == par){
		return names[3]
	}else if(strokes == par + 1){
		return names[4]
	}else if(strokes == par + 2){
		return names[5]
	}else if(strokes >= par + 3){
		return names[6]
	}
}

console.log(golfScore(5,4));

// Switch statement
function caseInSwitch(val){
	var answer = "";
	switch(val){
		case 1:/*strict equality here*/
			answer = "alpha";
			break;
		case 2:
			answer = "beta";
			break;
		case 3:
			answer = "gamma";
			break;
		case 4:
			answer = "delta";
			break;
		default: 
			answer = "zeta"
			break;
	}
	return answer;
}

for( var i = 1; i < 6; i++){
	console.log(caseInSwitch(i));
}

// multiple identical cases in switch

function sequentialSizes(val){
	var answer = "";
	switch(val){
		case 1:
		case 2:
		case 3:
			answer = "Low";
			break;
		case 4:
		case 5:
		case 6:
			answer = "Middle";
			break;
		case 7:
		case 8:
		case 9:
			answer = "High";
			break;
	}
	return answer;
}

for( var i = 1; i < 10; i++){
	console.log(sequentialSizes(i));
}

	// Sometimes else if chains make sense to be 
	// converted to switch statements

// returning boolean from functions
function isLess(a, b){
	return a < b; /* this returns true or false*/
}

// returning early pattern from functions
function abTest(a, b){
	if(a < 0 || b < 0) return;

	return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2,2));
console.log(abTest(2,-1));

// Blackjack Card counting function
var count = 0; 

function cc(card){
	switch(card){
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
			count++;
			break;
		case "10":
		case "J":
		case "Q":	
		case "K":
		case "A":
			count--;
			break;
	}

	var holdbet = "Hold";
	if (count > 0){
		holdbet = "Bet";
	}

	return count + " " + holdbet;
}

console.log(cc("K"));

// Object
var dog = {
	"name": "Sharo",
	"legs": 4,
	"tails": 1,
	"friends and stuff": ["everything"] 
}

// Accessing properties
	// Dot notation

console.log(dog.name);
	// Bracket notation

console.log(dog["friends and stuff"][0])
	// lookup obj properties using variables
var name = "name";
console.log(dog[name]);

// Updating properties
dog.name = "Happy Sharo";
console.log(dog.name);

// Add new properties
dog.hungry = false;
dog["thirsty"] = true;
console.log(dog);

// Deleting properties
delete dog.tails;
console.log(dog);

// Use obj to lookup values
val = "alpha";

var lookup = {
	"alpha": "Adams",
	"bravo": "Boston",
	"chrlie": "Chicago"
}
result = lookup[val]
console.log(result)

// Testing obj for property

function checkObj(checkProp) {
	if (dog.hasOwnProperty(checkProp)){
		return dog[checkProp];
	}else{
		return "Not found";
	}
}

console.log(checkObj("name"))
console.log(checkObj("tails"))

// Manipulating complex objects
var myMusic = [
	{
		"artist": "Jluch",
		"title": "Bashta vi e piqn",
		"formats": [
			"CD",
			"mp3"
		]
	},
	{
		"artist": "Jluch",
		"title": "Sofiisko gradsko",
		"formats" :[
			"CD",
			"mp3"
		]
	}
]

// Accessing nested objects
var myStorage = {
	"car": {
		"inside":{
			"glove box": "maps"
		}
	}
};

console.log(myStorage.car.inside["glove box"]);

// Accessing nested arrays

var nestedElement = myMusic[1].formats[1];
console.log(nestedElement);

// Iterate with while loops

var myArray = []
var i = 0;
while(i < 5) {
	myArray.push(i);
	i++;
}

console.log(myArray);

// Iterate with for loops
	
for(i; i < 10; i++){
	myArray.push(i);
}

console.log(myArray);

// Iterate odd numbers
myArray = [];
for(i = 1; i < 10; i+=2){
	myArray.push(i);	
}

console.log(myArray);

// count backwards
myArray = []
for(i = 10; i > 0; i-=2){
	myArray.push(i);
}

console.log(myArray);

// iterate through an array 
var total = 0;
for(i = 0; i < myArray.length; i++) {
	total += myArray[i];
}

console.log(total);

// Nesting for loops

nestedArr = [[1,2],[3,4],[5,6,7]];


function multAll(arr){
	var product = 1;

	for( var i = 0; i < arr.length; i++){
		for( var j = 0; j < arr[i].length; j++){
			product *= arr[i][j];
		}
	}

	return product;
}

console.log(multAll(nestedArr));

// Do while loops
/* while loop checks the condition before 
running the block of code, a do-while loop will
always run atleast once before checking the 
condition*/

i = 10;
myArr = []
do{
	myArr.push(i);
	i++;
}while (i<5)

console.log(myArr); 

// generate random fractions

function randomFraction(){
	return Math.random();
}

console.log(randomFraction());

// generate random whole number
var randomNumBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNumber(){
	return Math.floor(Math.random() * 10);
}

console.log(randomWholeNumber());

// generate random whole number within a range

function randomRangeNumber(min, max){
	return Math.floor(Math.random() * (max-min+1)) + min;
}

console.log(randomRangeNumber(2,15));

// The parseInt function

function convertToInteger(str) {
	return parseInt(str);
}

console.log(convertToInteger("42"));

// The parseInt function with Radix
/*radix specifies the base of the number in 
the string, base 2 is binary and so on*/

function convertToIntegerFromBinaryString(str) {
	return parseInt(str, 2);
}

console.log(convertToIntegerFromBinaryString("10011"));

// Ternary operator

// condition ? statement-if-true : statement-if-false;

function checkEqual(a, b) {
//	return a === b ? true : false;
	return a === b;
}


// Nested ternary operators

function checkSign(num) {
	return num > 0 ? "positive" : num < 0 ? "negative" : "zero"; 
}

console.log(checkSign(0));
console.log(checkSign(1));
console.log(checkSign(-1));

// Difference between var and let (ES6)

/* var allows you to declare a variable more
than once, while let doesn't*/

function catTalk() {
	"use strict"; /*this catches coding mistakes*/
}

/* Scope, let is only in the scope of the block 
it is declared in*/

// Declare a read-only variable with const

const sentance = "This can never be reasigned";
/* sentence = "false"; -> will throw an error*/

// Mutate an array declared with const
const s = [5,2,7];
function editInPlace(){
	"use strict";
	/* s = [2,5,6]; -> Error*/
	s[0] = 3; /* this works*/
}

// Prevent object mutation 

function freezeObj() {
	"use strict";
	const MATH_CONST = {
		PI: 3.14
	};

	Object.freeze(MATH_CONST);

	try{
		MATH_CONST.PI = 99;
	} catch (ex) {
		console.log(ex)
	}

	return MATH_CONST.PI;
}

const PI = freezeObj();
console.log(PI);

// Arrow functions
const magic = () => new Date();

const concat = (arr1,arr2) => arr1.concat(arr2);

// Higher order arrow functions

const realNumberArray = [4,5.6,-9.8];

const squareList = (arr) => {
	const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
	return squaredIntegers;
}

// rest operator

const summ = (function(){
	return function(...args) {
		return args.reduce((a,b) => a+b, 0);
	};
})();

console.log(summ(1,2,3,4,5))

// spread operator
const arr1 = [1,2,3,4]
let arr2 = [...arr1]; // makes a copy of arr1

// Destructuring assignment

var voxel = {x: 3.6, y: 7.4}

var x = voxel.x;
var y = voxel.y;

const {x: v, y: u} = voxel;
console.log(v, u);

// Template literals
const greetingDog = `Hello my name is ${dog.name}! I am a good boy!`
console.log(greetingDog);

// Writing concise object literal declarations using simple fields

const createPerson1 = (name, age, gender) => {
	return {
		name: name,
		age: age,
		gender: gender
	};
};/*This can be done easier*/

const createPerson2 = (name, age, gender) => ({name, age, gender});

// Writing concise declarative functions

const bicycle = {
	gear: 2,
	setGear(newGear){
		 "use strict";
		 this.gear = newGear;
	}
};
bicycle.setGear(3);
console.log(bicycle.gear);

// class Syntax to define a constructor; getter and setter 
function makeClass(){
	class SpaceShuttle {
		constructor(targetPlanet){
			this.targetPlanet = targetPlanet;
			this._privateName = "Apolo " + 11;
		}

		get name(){
			return this._privateName;
		}

		set name(newValue){
			this._privateName = newValue;
		}
	}
	return SpaceShuttle;
}

const Shuttle = makeClass()
const shuttle = new Shuttle("Mars");

console.log(shuttle);
console.log(shuttle.name);
shuttle.name = "Orion ";
console.log(shuttle.name);

// difference between import and require
/* import is newer*/

/*import {capitalizeStr} from "./capitalize";

const cap = capitalizeStr("Hello!");
console.log(cap);*/