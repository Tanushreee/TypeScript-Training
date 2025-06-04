"use strict";
// LESSON 7: Index Signatures & keyof Assertions
const todaysTranscations = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTranscations.Pizza); // -10
console.log(todaysTranscations['Pizza']); // -10
let prop = 'Pizza';
// Error: console.log(todaysTranscations[prop]) // there is no index signature to let us DYNAMICALLY access this value
const todaysNet = (transcations) => {
    let total = 0;
    for (const transcation in transcations) {
        // ERROR: total += transcations[transcation] // same thing, cannot dynamically access
    }
    return total;
};
const student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
};
for (const key in student) {
    console.log(`${key}: ${student[key]}`); // keyof fixes it
}
Object.keys(student).map(key => {
    console.log(student[key]); // keyof and typeof 
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
const todaysTranscations1 = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTranscations1.Pizza); // -10
console.log(todaysTranscations1['Pizza']); // -10
let prop1 = 'Pizza';
console.log(todaysTranscations1[prop]); // NO ERROR = -10
const todaysNet1 = (transcations) => {
    let total = 0;
    for (const transcation in transcations) {
        total += transcations[transcation]; // NO ERROR
    }
    return total;
};
console.log(todaysNet1(todaysTranscations1)); // NO ERROR = 35
// ERROR: todaysTranscations1.Pizza = 40 // readonly can't assign
console.log(todaysTranscations1['Dave']); // returns undefined because it doesn't exist
const student1 = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
};
console.log(student1.test);
for (const key in student1) {
    console.log(`${key}: ${student1[key]}`); // no keyof needed
}
// lets us provide a literal type with the utility type Record
// we can't explicity define datatype for each record
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehusutle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]); // need to use keyof assertion with Record utility type
}
