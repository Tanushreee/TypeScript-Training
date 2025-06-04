"use strict";
// Lesson 5: TYPE ASSERTION OR CASTING
// convert to more or less specific
let a2 = 'hello';
let b2 = a2; // assigned a type that was less specific to b 
let c2 = a2; // more specific because a2 = hello
let d = 'world'; // casting
let e = 'world'; // casting
const addOrConcat = (a, b, c) => {
    if (c == 'add')
        return a + b; // add
    return '' + a + b; // concat
};
let myVal = addOrConcat(2, 2, 'concat'); // as string is us asserting that the output wil be a string, ignore the warning
// addOrConcat is a union type and myVal is a string so it won't accept it without us specifically telling it that we know the result will be a string
let nextVal = addOrConcat(2, 2, 'concat'); // we know it will be a string but we are overriding the error and we could be wrong
// Error: 10 as string // can't convert number to string directly
// The Unkown Type - Forced Casting
10; // this forces the cast by first casting the 10 as unkown and then making unknown a string
// DOM - Document Object Model
const img = document.querySelector('img'); // infers as HTML Element, ! is a non null assertion
const img1 = document.getElementById('#myID'); // cast to image element
const img2 = document.getElementById('#img');
img.src;
img1.src;
