//const nums = [ 1,2,3,4,5,6,7,8,9,10]
//let [ num1, num2, num3, ...rest] = nums

//console.log(num1, num2, num3)
//console.log(rest)

//use a comma to omit the value you do not displayed
const countries = [ 
    'Germany', 
    'France', 
    'Belgium', 
    'Finland', 
    'Sweden', 
    'Norway', 
    'Denmark', 
    'Iceland'
]

let [gem, fra, , ...nordicCountries]= countries

console.log(gem)
console.log(countries[0], countries[1], countries[2])
console.log(fra)
console.log(nordicCountries)
