"use strict";
// Lesson 2: BASIC TYPES
let myName = 'Dave'; // implicitly infers it's a string
let myName1 = 'Dave'; // explictly declared it's a string
// Error: myName = 42 // gives error bcz its supposed to be a string
let meaningOfLife;
let isLoading;
meaningOfLife = 42;
isLoading = true;
let album; // allows any type of value
album = 'Van Halen';
album = 52;
album = false;
// function - we can't just say (a, b), it implicitly gives a and b the any typec
// ts can't assume the data type of a and b bcz + can be concatenation or sum
const sum = (a, b) => {
    return a + b;
};
let album1; // union type, can be either a string OR a number
album1 = 'Van Halen';
album1 = 52;
// Error: album1 = false // can't be a boolean, only string or number
let postId;
let isActive; // useful when true = 1 or true and false = 0 or false 
let re = /\w+/g; // regular expression
