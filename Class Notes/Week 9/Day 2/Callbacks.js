//A callback is a function which can be passed as a parameter to other function.  See the
//example 
//a callback function, the name of the function could be any name
//const callback = (n) => {
 //   return n * 2
//}

//function that takes other function as a callback
//function cube(callback, n) {
//    return callbaqck(n) * n
//}
//console.log(cube(callback, 3))


///Practice --Setting Intervals
//function sayHello() { 
  //  console.log("hello World")
    //}
    //setInterval(sayHello, 1000)

// Setting a set timeout (duration is milliseconds)
//function work() { 
//}
//setTimeout(work, duration)

//function myName() { 
//console.log("Lauren")
//}
//setTimeout(myName, 2000)

//For Each method (only used with arrays, contains the elemnt, index and arrays 

//let fruits = ["apple", "orange", "banana", "coconut"]; 

//fruits.forEach(upperCase); 
//fruits.forEach(display);

//function upperCase(element, index, array){ 
//    array[index] = element.toUpperCase(); 
//}

//function lowerCase(element, index, array){ 
//    array[index] = element.toLowerCase(); 
//}

//function capitalize (element, index, array){ 
//    array[index] = element.charAt(0).toUpperCase()+ element.slice(1)
//}

//function display(element){ 
//console.log(element)
//}

const names =[ "corey", "john", "tim", "marc", "keith"]
names.forEach((element) => console.log(element.toUpperCase()))

//const callback = (n) => { 
//  return n* 2 
//}

//function cube(callback, n) {
//  return callback(n) *n 
//}
//console.log(callback, 3)

//let sum = 0 
//const numbers  = [ 1,2,3,4,5]
//numbers.forEach(num => sum += num)
//console.log(sum)

//numbersAdd = numbers.map((num) => num + num)
//console.log(numbersAdd)

