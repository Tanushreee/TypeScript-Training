// Lesson 5: TYPE ASSERTION OR CASTING

type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific
let a2: One = 'hello'
let b2 = a2 as Two // assigned a type that was less specific to b 
let c2 = a2 as Three // more specific because a2 = hello

let d = <One>'world' // casting
let e = <string | number>'world' // casting

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c == 'add') return a + b // add
    return '' + a + b // concat
}

let myVal: string = addOrConcat(2,2,'concat') as string // as string is us asserting that the output wil be a string, ignore the warning
// addOrConcat is a union type and myVal is a string so it won't accept it without us specifically telling it that we know the result will be a string
let nextVal: number = addOrConcat(2,2,'concat') as number // we know it will be a string but we are overriding the error and we could be wrong

// Error: 10 as string // can't convert number to string directly

// The Unkown Type - Forced Casting
(10 as unknown) as string // this forces the cast by first casting the 10 as unkown and then making unknown a string

// DOM - Document Object Model
const img = document.querySelector('img')! // infers as HTML Element, ! is a non null assertion
const img1 = document.getElementById('#myID') as HTMLImageElement // cast to image element
const img2 = <HTMLImageElement>document.getElementById('#img')

img.src
img1.src