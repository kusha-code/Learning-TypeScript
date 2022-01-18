export{}
var message = 'Hi Dexter Welcome to TypeScript';
console.log(message);

// Variable Declaration

let x = 10
const y = 20; 

// let x = 30;  //Cannot redeclare block-scoped variable 'x'
let sum;
const title = 'TypeScript';  //when value do not change eg title


// Variable Types

let isBeginner: boolean = true; //isBeginner of type boolean
let total: number = 0;  // total of type number
let name: string = 'Kushagra';

//name = true;  // error TS2322: Type 'boolean' is not assignable to type 'string'

let sentence: string = `My name is ${name} I am a beginner in TypeScript.`;  // using Template string to input multi line string with embedded expression.

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3,4,5];
let list2: Array<number> = [1,2,3,4,5];  // Arrays

// tuples
let person1: [string, number] = ['Chris',700];  // follows the order in which it is defined
console.log(person1);


//enum types -Enums allows to define a set of named constants.

enum Color {red = 9, green, blue};   // red =0; green =1; blue =2

let c: Color = Color.green;
let d: Color = Color.red;
let e: Color =  Color.blue;
console.log(c,d,e);  // Output = 1 0 2 -- when red = 9; O/P = 10 9 11


// 'any' type

let randomValue: any = 10;
randomValue = true;
randomValue = 'Kushagra'; // no error here coz of 'any' type
console.log(randomValue);

// let myVariable: any = 10;
// //console.log(myVariable.name); // accessing properties of 'any' type
// myVariable();
// myVariable.toUpperCase();  // no error


// unknown type

let myVariable2: unknown = 10;

// function hasName(obj: any): obj is { name: string}{  // return name property as string
//     return !!obj &&
//      typeof obj === "object" &&  // type of object is object
//      "name" in obj   // name property exists in object
// }

// if (hasName(myVariable2)){
// console.log(myVariable2.name);
// } // accessing properties of 'unknown' type
//                 // does not allow type properties
// //myVariable2.toUpperCase();  // errors

// // to solve this we use Type Assertion

// (myVariable2 as string).toUpperCase();  


// // type inference - no need to define type to variable
//     // static type checking

// let a;
// a = 10;
// a = true;

// let b = 20;
// b = true;  // Type 'boolean' is not assignable to type 'number'


// let multiType: number | boolean;    //Union of types
// multiType = 20;
// multiType = true;

// let anyType: any;
// anyType = 20;  // no intelliSense support
// anyType = true;   // not preferred coz union types restrict to specified types but 'any' do not



// Types with Functions

function add(num1: number, num2?: number) {  // '?' defines optional parameter
    if(num2){
        return num1 + num2
    }
    else
        return num1
}
add(5,10);
add(5)
//add(5, '10')  // Argument of type 'string' is not assignable to parameter of type 'number'

console.log(add(5));
console.log(add(5,10));



// Interface


// function fullName(person: {firstName: string, lastName:string}){
//     console.log(`${person.firstName} ${person.lastName}`);
// }

// let p = {
//     firstName: "Bruce",
//     lastName: "Wayne"
// };

// fullName(p);

// what if we have multiple parameters in a function?

interface Person{
    firstName: string
    lastName: string
}
function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
    firstName: 'Bruce',
    lastName: "Wayne"
};
fullName(p);



// Classses and access modifiers


class Employee {
    employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }
    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Kushagra')
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {                  // class level inheritence
    constructor(managerName: string) {
        super(managerName);  // to call base class constructor
    }
    delegateWork(){
        console.log(`Manager delegating tasks ${this.employeeName}`);        
    }
}
let m1 = new Manager('Batman');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);




