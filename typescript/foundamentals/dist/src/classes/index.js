"use strict";
console.log('Hi typescript');
let age = 20;
if (age < 15)
    age += 10;
let number = [5, 6, 7];
number.forEach(n => n.toExponential(2));
let user = [1, 'Cimi']; //tuples
//Pascal Case
var Size;
(function (Size) {
    Size[Size["Small"] = 32] = "Small";
    Size[Size["Medium"] = 39] = "Medium";
    Size[Size["Large"] = 45] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
//Function
//We give the taskYear a default value
function calculateTask(income, taskYear = 2022) {
    if (taskYear < 2022)
        return income * 0.4;
    return income * 0.2;
}
calculateTask(20000, 2021);
let student = {
    id: 1,
    name: '',
    finished: (year) => {
        console.log(year);
    }
};
//Union Types
function milesToKm(miles) {
    //Narrowing
    if (typeof miles === 'number')
        return miles * 1.6;
    else
        return parseInt(miles) * 1.6;
}
//We can call in 2 ways
milesToKm(50);
milesToKm('60miles');
let ourtext = {
    select: () => { },
    drag: () => { }
};
let q = 100;
//null or undefined
function sayHi(greet) {
    console.log(greet.toLocaleLowerCase());
}
sayHi('null');
//# sourceMappingURL=index.js.map