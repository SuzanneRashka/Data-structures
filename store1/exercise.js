var store1 = require('./store1-data.js');

// *********** ACCESSING DATA *********** \\

// How would you access the value '4.63' from store1?
function store1_1() {
  console.log(store1['2015-01-08'][0][1]);
}
store1_1();
// How would you access how many 'Mint Wafers' were sold on January 6th?
function store1_2(){
  console.log(store1['2015-01-06'][1][0]);
}
store1_2();

// Produce an array of the date keys in store1's data.
function store1_3(){
  for(var key in store1){
    console.log(key);
    }
}
store1_3();
// *********** LOOPING OVER DATA *********** \\

// Create a loop to read which candies were sold by store1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.
function store1_4(){
  var sales = store1['2015-01-08'];
  var arrSales = [];
  for(var i = 0; i < sales.length; i++){
    //console.log(sales[i][0]);
    arrSales.push(sales[i][0]);
  }
  console.log(arrSales);
}
store1_4();

// Create a loop to count the total number of candies sold on Jan 10 at store1. Where do you have to initialize the counter variable? Why?
function store1_5(){
  var counter = 0;
  var sales = store1['2015-01-10'];
  var arrSales = [];
  for(var i = 0; i < sales.length; i++){
    //console.log(sales[i][2]);
    arrSales.push(sales[i][2]);
  }
  //console.log(arrSales);
  arrSales.reduce(function(a, b){
    return counter = a + b;
  });
  console.log(counter);
}
store1_5();

// Use `Object.keys()` to get an array of the dates that candies were sold at store1.
function store1_6(){
    console.log(Object.keys(store1));
}
store1_6();

// Iterate over the generated array of dates. Use each date to console.log the specific sale data for the day from store1.
///??? not sure what your asking here

// Use a loop to calculate the total number of candies sold at store1.   store1['2015-01-10'][0][2]

function store1_8(){
  var totalCandies = 0;
  //var sales = store1;/////// This is wrong!
  var arrSales = [];
  ////////////////// arraySales retains no value ??????????????
  for(var i = 0; i < store1.length; i++){
    //console.log(sales[i][2]);
    arrSales.push(store1[i][0][2]);
  }
  console.log(arrSales);
  arrSales.reduce(function(a, b){
    return totalCandies = a + b;
  });
  console.log(totalCandies);
}
store1_8();
/*
/////////////////////////////////////////////////////
 WORK
 ////////////////////////////////////////////////////
*/

// In the previous exercise, where did you have to initialize the counter variable? Why?


// *********** CHALLENGE *********** \\

// Create an array of the candies sold by store1 on January 10th.
