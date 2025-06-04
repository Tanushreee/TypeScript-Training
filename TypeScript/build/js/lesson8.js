"use strict";
// LESSON 8: Generics
// Generics are type placeholders that allow you to write code once and use it with various data types, avoiding code duplication
const stringEcho = (arg) => arg; // for strings only
const echo = (arg) => arg; // Generic, for all datatypes
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null); // array and null are objects
};
console.log(isObj(true)); // false
console.log(isObj('John')); // false
console.log(isObj([1, 2, 3])); // false
console.log(isObj({ name: 'John' })); // true - object
console.log(isObj(null)); // false
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) { // if empty object (such as string)
        return { arg, is: false };
    }
    return { arg, is: !!arg }; // !! makes a 0 or 1 true or false 
};
console.log(isTrue(false)); // false
console.log(isTrue(0)); // false
console.log(isTrue(true)); // true
console.log(isTrue(1)); // true
console.log(isTrue('Dave')); // true
console.log(isTrue('')); // false
console.log(isTrue(null)); // false
console.log(isTrue({})); // false
console.log(isTrue({ name: 'Dave' })); // true
console.log(isTrue([])); // false
console.log(isTrue([1, 2, 3])); // true
console.log(isTrue(NaN)); // false
console.log(isTrue(-0)); // false
const isTrue1 = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false }; // need to use value type as defined in interface
    }
    if (isObj(arg) && !Object.keys(arg).length) { // if empty object (such as string)
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg }; // !! makes a 0 or 1 true or false 
};
const processUser = (user) => {
    return user; // process the user with logic here
};
console.log(processUser({ id: 1, name: 'Dave' }));
// ERROR: console.log(processUser({name: 'Dave'})) // must have a id type
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]); // array of user objects (T), K is the key
};
const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
];
console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
//store.state = 12
const myState = new StateObject([15]);
myState.state = ['Dave', 42, true];
console.log(myState.state);
