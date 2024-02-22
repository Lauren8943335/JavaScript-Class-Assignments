/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function fizzy(i) {  
  if (i % 3 === 0 && i % 5 === 0) { 
 return "FizzBuzz" 
} else if (i % 3 === 0) {  
  return "Fizz" 
} else if (i % 5 === 0) { 
  return "Buzz" 
} else { 
 return i; 
}
}



/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
}
