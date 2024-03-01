//Destructuring is a way to unpack arrays, and objects and assigning //
//to a distinct variable.

//Destructuring Arrays
//const numbers = [1, 2, 3]
//let [numOne, numTwo, numThree] = numbers

//console.log(numOne, numTwo, numThree)

//Destructuring an array of names
const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson = 'Asabeneh', 
secondPerson = 'Brook', 
thirdPerson = 'David', 
fourthPerson = 'John'
] = names

console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)

//node Destructing an array that contains two other arrays
//const fullStack = [
    //['HTML', 'CSS', 'JS', 'React'],
   // ['Node', 'Express', 'MongoDB']
  //]
  //const [frontEnd, backEnd] = fullStack
  
  //console.log(frontEnd)
  //console.log(backEnd)


  //If we like to skip on of the values in the array we use additional comma. 
  //The comma helps to omit the value at that specific index

  //const numbers = [1, 2, 3]
  //let [numOne, , numThree] = numbers //2 is omitted

  //console.log(numOne, numThree)

  //'Descructuring an object 
  //const rectangle = { 
    //width: 20, 
    //height: 10, 
    //area: 200, 
  //}
  //let {width, height, area, perimeter} = rectangle
  //console.log(width, height, area, perimeter)

  //renaming during destructuring 
  //const rectangle = { 
    //width: 20, 
    //height: 10, 
    //area: 200, 
  //}
  //let {width: w, height: h , area: a, perimeter: p} = rectangle
//console.log(w,h,a,p)

// let us modify the object: width to 30 and perimeter to 80

const rectangle = { 
    width: 20, 
    height: 10, 
    area: 200, 
  }
  let {width, height, area, perimeter = 60} = rectangle

//object parameters 

const calculatePerimeter = (width, height) => { 
    return 2 * (width + height)
}
console.log(calculatePerimeter(rect)) //60

//create a function which gives infomation about the person object with destructon 
const getPersonInfo = ({
    firstName, 
    lastName, 
    age, 
    country, 
    job, 
    skills, 
    languages
    
}) => { 
    const formattedSkills = skills.slice(0, -1).join(',')
    const formattedLanguages = languages.slice(0, 1).join(',')

    personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old.`
    skills = [skills.length -1]
    He speaks = [languages.length]
}