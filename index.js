// Code your solution in this file!
function returnFirstTwoDrivers (arr = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
   return [arr[0], arr[1]]
}

function returnLastTwoDrivers (arr = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    return arr.slice(arr.length - 2, arr.length)
 }
 
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare, x) {
    return function(x) {
      return x * fare;
    };
  }

function fareDoubler (fare) {
    return fare * 2
}

function fareTripler (fare) {
    return fare * 3
}

function selectDifferentDrivers(arrayOfDrivers, callback) {
    return callback(arrayOfDrivers);
  }