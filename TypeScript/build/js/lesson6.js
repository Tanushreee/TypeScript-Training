"use strict";
// LESSON 6: Classes
class Coder {
    //  dummy: string - instance variable - IF NO visibility modifier, gives an error without a constructor 
    constructor(
    //      dummy: string = '',
    name, music, // if a variable has a visibility modifier, we don't need to declare it above
    age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        //      this.dummy = dummy // gives an error without the variable declaration
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age} years old`;
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave.getAge());
// Error: console.log(Dave.age) // not allowed b/c its private
// Error: console.log(Dave.lang) // not allowed b/c its protected
class WebDev extends Coder {
    constructor(computer, name, music, // if a variable has a visibility modifier, we don't need to declare it above
    age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`; // can only access protected inside the subclass
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
console.log(Sara.getLang()); // prints I write Typescript
class Guitarist1 {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist1('Jimmy', 'guitar');
console.log(Page.play('strums'));
class Peeps {
    static getCount() {
        return Peeps.count; // static variables are not assigned to instances of the class (objects), they are part of the whole class only
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count; // ++ in the beginning so our first id is 1 and not 0
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(John.id); // 1
console.log(Steve.id); // 2
console.log(Amy.id); // 3
console.log(Peeps.count); // 3
// Getters and Setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) // if value is an array
            && value.every(el => typeof el === 'string')) { // every element in value is a string
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep']; // setter
console.log(MyBands.data); // getter
MyBands.data = [...MyBands.data, 'ZZ Top']; // setter
console.log(MyBands.data); // getter
// Error: MyBands.data = ['Van Halen', 5150] // can't have non-string parameters
// Error: MyBands.data = 'Van Halen' // must be an array
