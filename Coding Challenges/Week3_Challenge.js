// First Reverse
// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
// Examples
// Input: "coderbyte"
// Output: etybredoc
// Input: "I Love Code"
// Output: edoC evoL I

//Starter Code
function FirstReverse(str) { 

  str = str.split('').reverse().join('');

    return str; 
  
  }
     
  // keep this function call here 
  //console.log(FirstReverse(readline()));
  console.log(FirstReverse("thisIsALongWord"));