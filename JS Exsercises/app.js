console.log("It is working!");

/*
EXERCISE 1
Write a JavaScript function to get the difference between a given number and 13, if the number is greater than 13 double the difference as a result.
*/
/*function diference(oneNumber) {
  let result = oneNumber - 13;
  if (oneNumber > 13) {
    return `Number is greater than 13 and result is ${result * 2}`;
  } else {
    return `${result}`;
  }
}
let resultDiference = diference(15);
console.log(resultDiference);

/*
EXERCISE 2
Write a JavaScript function that will find out which of two inserted integers is closer to 100. Make sure to alert the user if a negative number is inserted!
*/

/*function closerTo(numberOne, numberTwo) {
  let resultOne = Math.abs(100 - numberOne);
  let resultTwo = Math.abs(100 - numberTwo);
  if (resultOne > resultTwo) {
    return `${numberTwo} is closer to 100`;
  } else if (resultOne < resultTwo) {
    return `${numberOne} is closer to 100`;
  } else {
    return `Invalid input!`;
  }
}
let numberCloser = closerTo(96, 107);
console.log(numberCloser);*/

/*
EXERCISE 3
Bob's salary is 1000 eur per month. He has expenses that has to cover during the month. He has to pay rent for his apartment 375 eur. He should pay 250 eur for his bills in total. Print on screen what is the amount left that Bob has for the rest of the month, and what is the total amount of his expenses.
*/
/*function amount(salary, rent, bills) {
  let amountLeft = salary - (rent + bills);
  return `Bob has left ${amountLeft}eur for the rest of the month.`;
}

let monneyLeft = amount(1000, 375, 250);
console.log(monneyLeft);*/

/*
EXERCISE 4
One student has 5 exams in the first semester. His/Her grades for all of the exams are 10, 6, 8, 9, 6 respectively. The professor told the students that for passing the first semester they must have average of 8. The student needs to know whether they have passed the semester or not. alert() or console.log() on screen if the student passes or not!

BONUS: Write a function that takes any array of numbers and returns the average
*/
/*let grades = [10, 6, 8, 9, 6];

function averageGrade(numArray) {
  sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum = sum + numArray[i];
  }

  let result = sum / numArray.length;

  if (result >= 8) {
    return ` Your average grade is ${result} and you pass the semester!`;
  } else {
    return ` Your average grade is ${result} and you not pass the semester!`;
  }
}
let passTheSemester = averageGrade(grades);
console.log(passTheSemester);*/

/*
EXERCISE 5
Make an array of ten elements. Make sure four of them to be: Null, undefined, NaN, “” and false (JavaScript falsy values). Create a function that will work with any array and it will remove all the falsy values from the array.
*/

/*let tenElementArray = [2, "BBB", 99, "", NaN, 0, 11, null, 100, "MMM"];

function filteredArray(someArray) {
  let elementArray = [];
  for (let item of someArray) {
    if (item) {
      elementArray.push(item);
    }
  }
  return elementArray;
}
let array = filteredArray(tenElementArray);
console.log(array);*/

/*
EXERCISE 6
Given an array of numbers: [3,5,2,10,4,3,10,1,19,23,3]

Write a function that will go through the array using a loop and return the smallest number
*/

/*let numberArray = [3, 5, 2, 10, 4, 3, 10, 1, 19, 23, 3];

function minNumber(numArray) {
  let min = numArray[0];
  for (let i = 0; i < numArray.length; i++) {
    let number = numArray[i];
    if (number < min) min = number;
    return `Smallest number for this array is ${min}`;
  }
}
let smallest = minNumber(numberArray);
console.log(smallest);*/

/*
EXERCISE 7
Create a function that will generate an array filled with numbers from 1-500

After creating the array multiply only the numbers that divide evenly with 5 by 10

Return the resulting array
*/

/*function generateNumArray(num) {
  let resultArr = [];

  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0) resultArr.push(i * 10);
  }
  return resultArr;
}
let array = generateNumArray(500);
console.log(array);*/

/*
EXERCISE 8
Write a JavaScript function called storyTeller(), that will take as an input parameters the input fields values from the html!


ex: storyTeller(who, what, when);

In the function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Example: Lancelot was a really strong knight in the middle age!")
*/
