// Lesson 4: FUNCTIONS

// Type Aliases
type stringOrNumber = string | number // defining a union type
type strinOrNumberArray = (string | number)[] // can use these types in other variables
type Guitarist2 = {
    name: string,
    active?: boolean, // adding a question mark makes it optional (boolean or undefined)
    albums: strinOrNumberArray
} 
type UserID = stringOrNumber

// ERROR: interface PostId = stringOrNumber // we can't do this with interfaces, they are more for classes and objects

// Literal Types 
let myName2: 'Tanu'
let userName: 'Dave' | 'John' | 'Amy'
userName = 'Amy'
// ERROR: myName2 = 'John' // can only be Tanu

// Functions
const add = (a: number, b: number): number => { // how to explicity define parameter and return types
    return a + b
}

const logMsg = (message: any): void => { // void = no return type
    console.log(message)
}

logMsg('Hello!')
logMsg(add(2,3))
// ERROR: logMsg(add('a', 3)) // 'a' is not a number

let subtract = function(c: number, d: number): number { // another way to define a function
    return c - d
}

type mathFunction = (a: number, b: number) => number // type alias
/* interface mathFunction1 {
    (a: number, b: number): number // type alias
} */
let multiply: mathFunction = function(c, d) {
    return c * d
}

logMsg(multiply(2,2))

// Optional and Default Parameters
const addAll = (a: number, b: number, c?: number): number => { // c is an optional parameter
    if (typeof c != 'undefined') // type guard 
        return a + b + c
    return a + b
}

const sumAll = (a: number = 10, b: number, c: number = 2): number => { // a and c have a default values
        return a + b + c // good because if c isn't provided, it defaults to 2
}

logMsg(addAll(2,3,2)) // 7
logMsg(addAll(2,3)) // 5
logMsg(sumAll(2,3,2)) // 7
logMsg(sumAll(2,3)) // 7 (c omitted)
logMsg(sumAll(undefined,3)) // 15 
logMsg(sumAll(undefined,3, undefined)) // 15
// ERROR: logMsg(sumAll(3)) // if we don't say undefined, 3 would be assigned to a and b doesn't have a default value

// Rest Parameters
const total = (...nums: number[]): number => { //... lets the function accept any number of arguments and packs them into an array called nums
    return nums.reduce((prev, curr) => prev + curr) //.reduce() is an array method that reduces an array to a single value
}
logMsg(total(1,2,3,4)) // 10

const total1 = (a: number, ...nums: number[]): number => { //... lets the function accept any number of arguments and packs them into an array called nums
    return a + nums.reduce((prev, curr) => prev + curr) //.reduce() is an array method that reduces an array to a single value
}
logMsg(total(10,2,3)) // 15

// Never Type
const createError = (errMsg: string): never => {
    throw new Error(errMsg) 
    // returns the never type, for funtions that explicitly throw erorrs
}

const infinite = (): never => {
    let i: number = 1
    while(true){
        i++
    }
    // returns the never type, for funtions have infinite loops, need to throw an error
}

const infinite1 = (): void => { // now its void instead of never
    let i: number = 1
    while(true){
        i++
        if (i > 100) 
            break
    }
}

// Custom Type Guard
const isNumber = (value: any): boolean => { 
    return typeof value === 'number' ? true: false 
}

// Using the Never Type
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number' // used custom type guard
    return createError('This should never happen!') // returns a never type, so ts is happy
    // need to account for the undefined case, can solve by creating an error
}

// Quick Summary of 3 Ways to Declare a Functionn
{
    // Function Declaration
    function greet() {
      console.log("Hello from function declaration!");
    }
  
    greet(); 
}
  
{
    // Function Expression with const
    const greet = () => {
      console.log("Hello from const function expression!");
    };
  
    greet(); 
}
  
{
    // Function Expression with let (and reassignment)
    let greet = () => {
      console.log("Hello from let function (original)!");
    };
  
    greet(); 
  
    greet = () => {
      console.log("Hello from let function (reassigned)!");
    };
  
    greet(); 
}
  