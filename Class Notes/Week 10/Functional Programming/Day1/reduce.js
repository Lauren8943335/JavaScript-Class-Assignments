// reduce takes a callback function. The callback function takes accumulators, the current value snd optional initial value as a parameter and returns a single value
//basic Syntax
// arr.reduce((acc, curr) => ){ 
    //code goes here
 //return
//}, initial value) 

//example

const numbers = [1, 2, 3, 4, 5, 6]
const sum = numbers.reduce((acc,cur) => acc + cur, 0)
console.log(sum)