// Question No-1 : Declare and initialize an empty multidimensional array . (array of arrays )

// Declaring a multiDimensional Array . 

/*
const myMultiDimensArray = 
                  [
                    [ ],
                    [ ],
                  ]
*/

//_______________________________________________________________________________________________________________________________________

// Question No-2 : Declare and initialize an empty multidimensional array representing the following matrix . 
   /* 0123
      1012
      2101   */

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

//_______________________________________________________________________________________________________________________________________

// Question No-3 :Write a program to print numeric count from 1 to 10.

// Printing Numeric counting from 1 to 10 . 

/*

for (let i=1 ; i <=10 ; i++) {       
  console.log(i)                     
  document.write(i + "<br>")
}

*/
//_______________________________________________________________________________________________________________________________________

// Question No-4 : Write a program to print multiplication table of any number using for loop. Table number and length should be taken as an inout from user . 

//Multiplication table of any number using for loop . 

/*

let tableNo = parseFloat(prompt('Enter a number to show its  multiplication number !'));

document.write("<h3> Multiplication Table of " + tableNo + " is " + "     .</h3>");

  let lengthOfTable = parseFloat(prompt('Please specify the length of the table'))

  for (let i = 1; i <= lengthOfTable; i++) {


  document.write(tableNo + ' X ' + i + ' = ' + (tableNo * i) + '</br>')

}
*/
//_______________________________________________________________________________________________________________________________________
/*
Question No-5 : Write a program to print items of the following array using for loops:
fruits = ['apple','banana','mango','orange','strawberry']
*/

/*
let fruits = [' apple ',' banana ',' mango ',' orange ',' strawberry '];
for (let i = 0 ; i < fruits.length ; i++){
   let namesOfFruits =  fruits[i]
  document.write(namesOfFruits + '<br>')      // with br everyitem will starts with a new line .
}
*/
//_______________________________________________________________________________________________________________________________________

/*
Question No-6 : Generate the following series in your browser .Seeexample output . 
*/
// document.write('Counting : ' );
// let counting = [] ; 
// for (i=1 ; i<= 15 ; i++){
//   numberCounting = [i];
//   document.write(numberCounting + ' , '  ) ; 
// }

// document.write('<br>')


// document.write('Reverse Counting : ' );
// let reverseCounting = [] ; 
// for (i=10 ; i>= 1 ; i--){
//   convertedCounting = [i];
//   document.write(convertedCounting + ' , ') ; 
// }

// document.write('<br>')


document.write('Even Counting : ' );
let evenCounting = [] ; 
for (i=0 ; i<= 20 ; i++){
    if ( i % 2 === 0 ){
      evenCounting.push( i )
    document.write(evenCounting);
}
  // convertedCounting = [i];
  //   evenCounting.push(convertedCounting)
  // document.write(evenCounting + ' , ') ; 
}