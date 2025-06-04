// Lesson 3: ARRAYS & OBJECTS

// Array
let stringArr = ['one', 'hey', 'Dave']
let guitars = ['Strat', 'Les Paul', 5150]
let mixedData = ['EVH', 1984, true]

// Error: stringArr[0] = 42 // stringArr is a string so it won't take a number
// Error: stringArr.push(42) // stringArr is a string so it won't take a number
stringArr.push('3') // acepts it

guitars[0] = 1984 // will take either a number or string
guitars.push('4') // adds element to end of array
guitars.unshift(4) // adds element to beginning of array

// Error: stringArr = guitars // won't accept bcz type string
guitars = stringArr //  works bcz its a mixed data array

let test = []
let bands: string[] = [] 
bands.push('a band')

// Tuple
let myTuple: [string, number, boolean] // assigns the type for each element and a specific length
myTuple = ['Dave', 50, false] // tuple 

let mixedArr = ['John', 1, true] // union type mixed array

mixedArr = myTuple // works bcz its mixed type
// Error: myTuple = mixedArr // not accepted because the target requires 3 elements but the mixed array may not have 3 elements
// Error: myTuple[3] = 5 // only 3 elements defined in tuple, can't add a fourth
myTuple[1] = 1 // works

// Object
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {} // a way to define object

const exampleObj = { // template for our object
    prop1: 'Dave',
    prop2: true,
}
exampleObj.prop2 = false // accepts it, won't accept a number, string, etc.

// Type 
type Guitarist = {
    name?: string,
    active?: boolean, // adding a question mark makes it optional (boolean or undefined)
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    name: 'Jimmy',
    active: true, // we don't NEED this property because it was defined as optional
    albums: ['I', 'II', 'IV']
}

evh = jp // no issue only because they have the same properties with the same type

// ERROR: evh.years = 40 // can't add property after its defined in the type 

const greetGuitarist = (guitarist: Guitarist) => { // passed in our pre-defined type as a parameter instead of guitarist: {definition}
    return `Hello ${guitarist.name}! ${guitarist.name?.toUpperCase()}!` 
    // NOTE: We cannot call a method on an optional variable without defining it as optional in the method call
        // Ex. Because name is optional we could say guitarist.name?.toUpperCase()

}

console.log(greetGuitarist(jp)) // prints Hello Jimmmy! JIMMY!

// Interface
interface Guitarist1 {
    name: string,
    active?: boolean, // adding a question mark makes it optional (boolean or undefined)
    albums: (string | number)[]
} 
// Use interfaces to define classes rather than types but it works the same way

// Enums 
enum Grade {
    U = 1, // When you define U = 1, it automatically makes D = 2, C = 3, B = 4, A = 5
    D,
    C,
    B,
    A,
}

console.log(Grade.U) // prints 0 as default if nothing is defined



