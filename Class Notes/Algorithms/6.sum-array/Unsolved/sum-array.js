// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
   var total = 0; 
   for (var i=0; i < arr.length; i++) { 
    total += arr[i]; 
   } return total; 
}; 

var sumArray = function(arr) {
return arr.reduce(function(total, currentValue){ 
    return total + currentValue; 
}, 0 )
};

var sumArray = function(arr) {
if (arr.length === 0){ 
    return 0; 
} else {
    // recursive case: returns the first element plus the sum of the rest of the array. 
    return arr[0] + sumArray(arr.slice(1));
}
};
