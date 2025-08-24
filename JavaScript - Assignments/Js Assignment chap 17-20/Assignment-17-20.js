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
/*
document.write('Simple Counting : ');
let counting = [];
for (i = 1; i <= 15; i++) {
  numberCounting = [i];
  document.write(numberCounting + ' , ');
}

document.write('<br>')


document.write('Reverse Counting : ');
let reverseCounting = [];
for (i = 10; i >= 1; i--) {
  convertedCounting = [i];
  document.write(convertedCounting + ' , ');
}

document.write('<br>')

// Even No Counting  ... ------------------------------


document.write('Even Counting : ');
let evenCounting = [' '];
for (i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    finalEvenCounting = (i);
    evenCounting.push(finalEvenCounting)
  }
}
document.write(evenCounting + ' , ' + '</br>');


// ODD No Counting  ... ------------------------------


document.write('ODD No Counting : ')
let oddNoCounting = [];
for (i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    finaloddCounting = (i);
    console.log(i)
    oddNoCounting.push(finaloddCounting)
  }
}
document.write(oddNoCounting.join(' , ') + '</br>');


// Series Counting  ... ------------------------------

document.write(' Series Counting : ')
let seriesCounting = [];
for (i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    finalSeriesCounting = i + 'K';
    console.log(finalSeriesCounting)
    seriesCounting.push(finalSeriesCounting);
  }
}
document.write(seriesCounting)


*/

//_______________________________________________________________________________________________________________________________________

/* Question No - 7 : You have an Array */

/*
let AvailableBakeryItems = ['cake', 'applepie', ' cookies', 'chips', 'patties'];

UserInput = prompt("Welcome to 'Delight Bakery' , What do you want to order Sir/Ma'am ?" + "[Cake , Applepie Cookies , Chips , Patties]");

//arranging user input to avoid spaces and upper or lower characters .
 UserInput = UserInput.toLowerCase().trim();

// using index form to specify the index of an array while comparing .

  let itemindex = AvailableBakeryItems.indexOf(UserInput)
  if (itemindex !== -1 )
  alert(`${UserInput} is Available at Index  ${itemindex} in our Bakery !`)
  else alert(`${UserInput} is not available in our bakery ! `)


 //  using .includes forms 

   if (AvailableBakeryItems.includes(UserInput)){
   alert(`${UserInput} is available in our bakery !`) 
   } else{ alert(`we are sorry ${UserInput} is not availbale in our bakery.`)}

*/

//_______________________________________________________________________________________________________________________________________

/*
Question No-8 : Write a program to identify the largest number in the given array. 
  A = ['24' , '53' , '78' , '91' , '12']
*/

/*
const givenArray = ['24', '53', '78', '91', '12'];
let largestNo = givenArray[0];
for (i = 1; i < givenArray.length; i++)
  if (givenArray[i] > largestNo)
    largestNo = givenArray[i];
console.log(largestNo)
document.write(`The given numbers are : ${givenArray}.` + "<br>");
document.write(`The largest number is ${largestNo}.`);
*/
//_______________________________________________________________________________________________________________________________________

/*
Question No-9 : Write a program to identify the smallest number in the given array. 
  A = ['24' , '53' , '78' , '91' , '12']
*/

/*
const givenArray = ['24', '53', '78', '91', '12'];
let smallestNo = givenArray[0];
for (i = 1; i < givenArray.length; i++)
  if (givenArray[i] < smallestNo)
    smallestNo = givenArray[i];
console.log(smallestNo)
document.write(`The given numbers are : ${givenArray}.` + "<br>");
document.write(`The largest number is ${smallestNo}.`);
*/

//_______________________________________________________________________________________________________________________________________

/*
Question No-10 : Write a program to print multiples of 5 ranging from 1 to 100. 
*/

/*
// using i++ method 
let noOfMultiple = 5 ; 
  for ( i = 1 ; i <=20 ; i++){
    multipleNo = noOfMultiple*i
    console.log(multipleNo)
    document.write(multipleNo + (" , ") ) 

  }
      document.write('<br>')
 
// using simple method with iteration of 5 !

for ( i = 5 ; i <=100 ; i+=5){
 
  document.write(i + " , " )
}
*/


// X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-



