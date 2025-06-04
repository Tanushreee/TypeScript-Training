// Lesson 2: BASIC TYPES

let myName = 'Dave' // implicitly infers it's a string
let myName1: string = 'Dave' // explictly declared it's a string
// Error: myName = 42 // gives error bcz its supposed to be a string

let meaningOfLife: number;
let isLoading: boolean;
meaningOfLife = 42
isLoading = true

let album: any; // allows any type of value
album = 'Van Halen'
album = 52
album = false

// function - we can't just say (a, b), it implicitly gives a and b the any typec
    // ts can't assume the data type of a and b bcz + can be concatenation or sum
const sum = (a: number, b: string) => {
    return a + b
}

let album1: string | number; // union type, can be either a string OR a number
album1 = 'Van Halen'
album1 = 52
// Error: album1 = false // can't be a boolean, only string or number

let postId: string | number
let isActive: number | boolean // useful when true = 1 or true and false = 0 or false 
let re: RegExp = /\w+/g // regular expression

