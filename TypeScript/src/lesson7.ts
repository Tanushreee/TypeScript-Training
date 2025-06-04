// LESSON 7: Index Signatures & keyof Assertions

// WITHOUT INDEX SIGNATURE
interface TransactionObj {
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTranscations: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todaysTranscations.Pizza) // -10
console.log(todaysTranscations['Pizza']) // -10

let prop: string = 'Pizza'
// Error: console.log(todaysTranscations[prop]) // there is no index signature to let us DYNAMICALLY access this value

const todaysNet = (transcations: TransactionObj): number => {
    let total = 0
    for (const transcation in transcations) {
    // ERROR: total += transcations[transcation] // same thing, cannot dynamically access
    }
    return total
}

interface Student {
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
}

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`) // keyof fixes it
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student]) // keyof and typeof 
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`) 
}

logStudentKey(student, 'name')


// WITH INDEX SIGNATURE
interface TransactionObj1 {
    readonly [index: string]: number // with index signature
}

const todaysTranscations1: TransactionObj1 = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todaysTranscations1.Pizza) // -10
console.log(todaysTranscations1['Pizza']) // -10

let prop1: string = 'Pizza'
console.log(todaysTranscations1[prop]) // NO ERROR = -10

const todaysNet1 = (transcations: TransactionObj1): number => {
    let total = 0
    for (const transcation in transcations) {
        total += transcations[transcation] // NO ERROR
    }
    return total
}

console.log(todaysNet1(todaysTranscations1)) // NO ERROR = 35

// ERROR: todaysTranscations1.Pizza = 40 // readonly can't assign

console.log(todaysTranscations1['Dave']) // returns undefined because it doesn't exist

interface Student1 {
    [key: string] : string | number | number[] | undefined // index singature
    name: string,
    GPA: number,
    classes?: number[]
}

const student1: Student1 = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
}

console.log(student1.test)

for (const key in student1) {
    console.log(`${key}: ${student1[key]}`) // no keyof needed
}

// Index Signature using a Type

interface Incomes { // OPTION 1 - index signature in interface
    [key: string]: number // allows us to explicity define the datatype 
}

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes1 = Record<Streams, number | string> // OPTION 2 
// lets us provide a literal type with the utility type Record
// we can't explicity define datatype for each record

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehusutle: 250
}

for(const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes]) // need to use keyof assertion with Record utility type
}