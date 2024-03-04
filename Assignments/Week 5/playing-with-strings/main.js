/******************
 * YOUR CODE HERE *
 ******************/
function xify(str){
  let newStr = ''

  for(let i = 0; i < str.length; i++){
   newStr += 'x'
  } 
return newStr
}

function yellingChars(str){
  let moon = ''

for(let i = 0; i < str.length; i++){
  moon += str[i] + '!'
} return moon
  }

  function indexedChars(str){
    let index = ""

    for(let i = 0; i < str.length; i++){
      index += i + str[i]
    } return index
}

function numberedChars(str){
  let number = ''
   
  for(let i = 0; i < str.length; i++){
    number += ('(' + (i + 1) + ')' + str[i])
  } return number
}

function exclaim(str){
  let newSt = ""
  
  for(let i = 0; i < str.length; i++){
    if(str[i] === '?' || str[i] === '.'){
      newSt += '!'
    }else{
      newSt += str[i]
    }
  } return newSt
}

function repeatIt(str, n){
  let repeat = ''

  for(let i = 0; i < n; i++){
    repeat += str
   } return repeat 
} 

function truncate(str){
  let finalTnc = ""

  if(str.length <= 18){
    return str
  }else{
  for(let char of str){
    if(finalTnc.length < 15){
      finalTnc = finalTnc + char
    }
  } return finalTnc + '...'
}
}

function ciEmailify(str){ 
  let fullName = str.toUpperCase()
    let newStr = fullName.indexOf(" ") + 1
    email= ""
    for (let i = newStr; i < fullName.length; i++){
      email= email+ fullName[i]
    }
    return fullName[0] + email + ".prsvr@gmail.com"
  }

  function reverse(str){
    let reversed = ''
  
    for(let i = str.length - 1; i >= 0; i--){
      reversed += str[i]
    }return reversed
  }

function onlyVowels(str) { 
    let vowels = ''
    
    for(let i = 0; i < str.length; i++){
      let letter = str[i]
      if('aeiouAEIOU'.includes(letter)){
        vowels += letter
      }
    } return vowels
    }

    function crazyCase(str) {
      let newStr = "";
      let sillyStr = false;
      for (let char of str){
        if (sillyStr) {
          char = char.toUpperCase();
        } else {
          char = char.toLowerCase();
        }
        newStr += char;
        sillyStr = !sillyStr;
      }
      return newStr;
    }

    function titleCase(str){
      
      let newStr = ''
      let capatilize = true
      
      
      for(let char of str){
        if(capatilize){
          char = char.toUpperCase()
        }
        else{
          char = char.toLowerCase()
        }
        newStr += char
        capatilize = (char === " ")
      }
        return newStr
      }

      function camelCase(str){
        let camelStr = ''
        
        for(let i = 0; i < str.length; i++){
          let char = str[i]
          if(char !== " "){
            if(i > 0 && str[i - 1] === " "){
              char = char.toUpperCase()
            }else{
              char = char.toLowerCase()
            } camelStr += char
          }
        } return camelStr
        }

        function crazyCase2ReturnOfCrazyCase(str){
          let newStr = ''
          let sillyCase = false
          
          for(let char of str){
            if(char !== " "){
              if(sillyCase){
                char = char.toUpperCase()
              }else{
                char = char.toLowerCase()
              }
              sillyCase = !sillyCase 
            }
             newStr += char
            
          }return newStr
          }
  
 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
