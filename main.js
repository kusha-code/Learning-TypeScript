"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Hi Dexter Welcome to TypeScript';
console.log(message);
// Variable Declaration
var x = 10;
var y = 20;
// let x = 30;  //Cannot redeclare block-scoped variable 'x'
var sum;
var title = 'TypeScript'; //when value do not change eg title
// Variable Types
var isBeginner = true; //isBeginner of type boolean
var total = 0; // total of type number
var name = 'Kushagra';
//name = true;  // error TS2322: Type 'boolean' is not assignable to type 'string'
var sentence = "My name is ".concat(name, " I am a beginner in TypeScript."); // using Template string to input multi line string with embedded expression.
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5]; // Arrays
// tuples
var person1 = ['Chris', 700]; // follows the order in which it is defined
console.log(person1);
//enum types -Enums allows to define a set of named constants.
var Color;
(function (Color) {
    Color[Color["red"] = 9] = "red";
    Color[Color["green"] = 10] = "green";
    Color[Color["blue"] = 11] = "blue";
})(Color || (Color = {}));
; // red =0; green =1; blue =2
var c = Color.green;
var d = Color.red;
var e = Color.blue;
console.log(c, d, e); // Output = 1 0 2 -- when red = 9; O/P = 10 9 11
// 'any' type
var randomValue = 10;
randomValue = true;
randomValue = 'Kushagra'; // no error here coz of 'any' type
console.log(randomValue);
// let myVariable: any = 10;
// //console.log(myVariable.name); // accessing properties of 'any' type
// myVariable();
// myVariable.toUpperCase();  // no error
// unknown type
var myVariable2 = 10;
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
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else
        return num1;
}
add(5, 10);
add(5);
//add(5, '10')  // Argument of type 'string' is not assignable to parameter of type 'number'
console.log(add(5));
console.log(add(5, 10));
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Bruce',
    lastName: "Wayne"
};
fullName(p);
// Classses and access modifiers
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Kushagra');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks ".concat(this.employeeName));
    };
    return Manager;
}(Employee));
var m1 = new Manager('Batman');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
