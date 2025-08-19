// Question No-1 

// Declaring a multiDimensional Array . 

/*
const myMultiDimensArray = 
                  [
                    [],
                    [],
                  ]
*/

// --------------------------------------------------------------------------------------------------

// Question No-2 

// Declaring a multiDimensional Array with values . 

/*
let myMultiDimensArrays =
  [
    ['0', '1', '2', '3'],
    ['1', '0', '1', '2'],
    ['2', '1', '0', '1']
  ];
console.log(myMultiDimensArrays[0])  
console.log(myMultiDimensArrays[1])  
console.log(myMultiDimensArrays[2])  */

// Question No-3 

// Printing Numeric counting from 1 to 10 . 

/*

for (let i=1 ; i <=10 ; i++) {       
  console.log(i)                     
  document.write(i + "<br>")
}

*/
//---------------------------------------------------------------------------------------------------

// Question No-3

//Multiplication table of any number using for loop . 


let tableNo = parseFloat(prompt('Enter a number to show its  multiplication number !'));

document.write("<h3> Multiplication Table of " + tableNo + " is " + "     .</h3>");

  let lengthOfTable = parseFloat(prompt('Please specify the length of the table'))

  for (let i = 1; i <= lengthOfTable; i++) {


  document.write(tableNo + ' X ' + i + ' = ' + (tableNo * i) + '</br>')


}
