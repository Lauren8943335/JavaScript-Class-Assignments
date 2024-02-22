//Functional Programming
//Instead of writing loops, the latest version of JS introduced lots of built in methods which
//can be used to solve complicated problems.  All builtin methods take callback functions, we will tKE
//a look at forEach, map, filter, reduce, find, every, some and sort.

//forEach
//forEach is used ato iterate an array of elements.  We use forEach with arrays. It takes a 
//callback function with elements, index paramters and array itself. The index and the array are

//examples of forEach

// Arr.forEach (function (element, index, arr){ 
//    console.log(index, element, arr) 
// })
//the adobe code can be written using the arrow function
// arr.forEach((elemrnt, index, arr) => { 
    // console.log(element, index, arr)
// })

//let sum  =  0 
//const numbers = [ 1, 2, 3, 4, 5]
//numbers.forEach(num => sum += num)
//console.log(sum)

//function (num) { 
//    sum += num 

//}

//let sum = 0 

//const numbers = [1, 2, 3, 4, 5]
//numbers.forEach(myNumbers); 

//function myNumbers(item) { 
//    sum += item
//}

const fruits = ["apples", "oranges", "cherries"]
fruits.forEach(myFruits); 

function myFruits(element) { 
    console.log(element)
}

const numbers = [2, 3, 4, 40, 50] //called elements, each element has a position called index, that starts with a 0
numbers.forEach(myNumbers)
//array.forEach(pass in callback function)

function myNumbers(num){
console.log(num)
//deine callback function, pass in a parameter of num
}

//optional
//map itierate of an array, modifies the array elements and returns a new array
//const numbers = [ 1, 2, 3, 4, 5]
//const numbersSquare = numbers .map((num) => num * num)
//console.log(numbersSquare)

//filter
//reduce
//find
//every
//some
//sort

//practice
// 1. define a call back function with the function, you will use forEach method and the map menthod
//const callback = (n) => { 
//  return n* 2 
//}

//function cube(callback, n) {
//  return callback(n) * n 
//}
//console.log(callback, 3)

//2. use the forEach method to console.log the numbers in an array

function logNumber(number){ 
    console.log(number); 
} 
let sum = 0 
//const numbers  = [ 1,2,3,4,5]
numbers.forEach(num => sum += num)
console.log(sum)

//const numbers  = [ 1,2,3,4,5]; 

const squareNumbers = numbers.map((number) => number * number); 

console.log(aquareNumbers); 

//numbersAdd = numbers.map((num) => num + num)
//console.log(numbersAdd)

//2. use the forEach method to console.log the numbers in an array
//console.log(sum)
//console.log(numbersAdd)

