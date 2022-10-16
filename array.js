// let name1 = "ICT";
// let name2 = "KUMON";
// let name3 = "THE BRAIN";

// console.log("name1", name1);
// console.log("name2", name2);
// console.log("name3", name3);

// let name = ["ICT", "KUMON", "THE BRAIN"];
// console.log("nameArray", name);
// console.log("[0]", name[0]);
// console.log("[1]", name[1]);
// console.log("[2]", name[2]);

// console.log("array length", name.length);

// for (let i = 0; i < name.length; i++) {
//   console.log(name[i]);
// }

// let arrayNumber = [];
// for (let i = 0; i <= 10; i++) {
//   arrayNumber.push(i);
//   console.log(arrayNumber);
// }

// delete first value of array
// arrayNumber.shift();
// console.log("after shift", arrayNumber);

// delete last value of array
// arrayNumber.pop();
// console.log("after pop ", arrayNumber);

// [1,2,3,4,5,6,7,8,9,10,...., 20] number
// [1,3,5,7,9,...] odd array
// [2,4,6,8,10,...] even array

let number = [];

for (let i = 1; i <= 20; i++) {
  number.push(i);
}

let oddArray = [];
let evenArray = [];
for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 == 0) {
    evenArray.push(number[i]);
  } else {
    oddArray.push(number[i]);
  }
}

console.log("number", number);
console.log("evenArray", evenArray);
console.log("oddArray", oddArray);
