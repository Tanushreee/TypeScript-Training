"use strict";
// Lesson 1: INTRO TO TS
let username = 'Tanushree';
console.log(username);
let a = 12;
let b = '6';
let c = 2;
// Error: console.log(a/b) // prints 2 even if b is a string b/c of dynamic types
// Error: console.log(c*b) // prints 12
let a1 = 12; // can spcify the variable type
let b1 = 6;
console.log(a1 / b1); // prints 2 but no error
console.log(c * b1); // prints 12 but no errror
