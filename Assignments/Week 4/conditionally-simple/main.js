/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

function isItLong(){ 
  let 
}
var isItLong = ("That's a long string!"); 
console.log(isItLong.length)
if (isItLong >= 20) { 
  console.log(isItLong)
} else { 
  console.log("undefined")
}

var isItMedium= ("That's a regular sized string!"); 
console.log(isItMedium.length)
if (isItMedium <=10  ) { 
 console.log(isItMedium)
}

if (isItShort < 10 ) { 
console.log("That's a small string!");
} else if (isItShort >10 ) { 
console.log("That's not a small string!"); 
} else if  (isItShort = 10) { 
   console.log("That's not a small string!"); 
}

if (howLongIsMyString >= 20) {
console.log("That's a long string!"); 
} else if (howLongIsMyString <=20) { 
 console.log("That's a regular sized string!"); 
} else if (howLongIsMyString = 10-20) { 
  console.log("That's a regular sized string!"); 
} else if (howLongIsMyString=10){
  console.log("That's a regular sized string!"); 
 } else { 
   console.log("That's a regular sized string!"); 
 }

if (personsHeight = "Shaq") { 
  console.log ("85"); 
} else if (personsHeight = "Zooey") {  
  console.log ("65"); 
}else { 
  console.log ("I don't know everyone's height!"); 
}

/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof personsHeight === 'undefined') {
  personsHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  personsHeight,
}