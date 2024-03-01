// Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number

var countdown = function(num) {
   for (var i = num; i > 0; i--){
      console.log(i)
   }
   
};

var countdown = function(num) {
if (num <= 0) { 
   return; { 
      console.log(num); countdown(num -1); 
   }
}
}; 

var countdown = function(num) {
   //create an array from num down to 1
   Array.from ({length: num}, (_, index) => num- index)
   .forEach(number => { 
      //print each number
      console.log(number); 
   }); 
}; 
console.log(8)
[8,7,6,5.4,3,2,1]