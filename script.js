'use strict'; //деректива показывающия что мы работаем в стандарте es6

var a = 5;
console.log(a);

var number = 2;
var string = 'hello';
var string_1 = "hello 1";
var sym = Symbol();
var bool = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log(string / 2);
console.log(string + " " + string_1);
console.log(sym);



let person = {
    name : "john",
    age: 25,
    isMarried: false
}


console.log(person.name);
console.log(person["name"]);

let arr = [ 'fa ' , 'da ' , 'sa'];

console.log(arr[0]);

//alert('hello');
// var answer = confirm('are you here?');

// console.log(answer);

var answer = prompt('are you here?', 'Yes');

console.log(typeof(arr));

