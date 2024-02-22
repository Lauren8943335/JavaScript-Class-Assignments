
// ///////////////////////////////for Loop///////////////////////////////////////////////
// // For loop structure
// for(initialization, condition, increment/decrement){
//     // code goes here
//   }


for(let i=0; i<=5; i++ ){
    //task code
}

for(let i=5; i>=0; i-- ){
    console.log(i)
}

// 0*0=0
// 1*1=1
// 2*2=4
// 3*3=9
// 4*4=16
// 5*5=25

/////////////////////////////////////////while loop///////////////////////////////////////
// while(condition){
//     //task code 
// }
// let i=0;

// while(i<=5){
//     console.log(i)
//     i++
// }




//////////////////////////////////////// do while loop////////////////////////////////////

// let i=8;
// // do{
// //     //task code 
// // } while(condition)
// do{
//     console.log(i)
//     i++
// } while(i<=5)

// ///////////////////////////// for of loop//////////////////////////////////////////////
// for (const element of arr) {
//     // code goes here
//   }

const listofNumbers=[1,2,3,4,5,6,7]
for(const numberinTheList of listofNumbers){
    console.log(numberinTheList)
}

const country=["US","Thiland","Canada"]
for(const names of country){
    console.log(names)
}

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
// ///////////////////////////////////////////break/////////////////////////////////////
//Break is used to interrupt a loop.




/////////////////////////////////////// continue///////////////////////////////////////
//We use the keyword continue to skip a certain iterations.








//..........................................To do .......................................
// Use for loop to iterate from 0 to 100 and print only even numbers

// Use for loop to iterate from 0 to 100 and print only odd numbers

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.



///////////////////////////////////////////Challenge///////////////////////////////////////
let countries=["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
//Using the above countries array, create an array for countries length'.
//Expected outcome is [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]



//Practice 

//for loop repeats some code a limited number of times 
//syntax: for(intialize; counter; increment/decrement) each time you go though a loop is called an iteration
for(let i = 0; i <= 2; i++) {
  console.log ('Hello'); 
 }

 for(let i = 0; i <= 100; i++){ 
    console.log("lauren")
}

 //count down --decrement
 for(let i = 10; i > 0; i--) {
    console.log (i); 
 }

 //continue and break

 for(let i = 1; i <=20; i++){ 
     if (i == 13){ 
    continue; 
     }
     else { 
        console.log(i); 
     }
 }

 for (let i = 0; i < 5; i++) { 
    if (i === 2) { 
    continue; 
   } 
    console.log(i); 
  }
    //0134

 //continue will skip the number; "jumps over" one iteration in the loop.
 //break will take you out of the loop and the loop stops; "jumps out" of a loop.

//A while loop repeats some code an infinate number of time "do this while this"

let count = 0; 
while (count < 3) { 
  console.log("Hello"); 
 count++; 
}
//012345

//a do while loop does the opposite of while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested

let i=0
do { 
console.log(i)
i++
} while (i <=5)
//012345

let x = 5; 
do { 
  console.log("Hello"); 
 x--; 
} while (!x > 0);

//A for of loop is used to iterate through an array 
//syntax: 
for (const element of array){ 
    console.log(num)
}

//1. define the array 
const numbers = [1, 2, 3, 4, 5]
for (const num of numbers){ 
    console.log(num)
}

const webClasses = [HTML, CSS, JS, REACT]
for(const classes of webClasses){ 
    console.log(classes.toupperCase())
}