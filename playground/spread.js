// function add(a, b) {
//     return a + b;
// }
//
// console.log(add(3,1));
//
//
// var toAdd = [9, 3];
//
// console.log(add(...toAdd));

// ------------------

var person1 = ['Mike', 25];
var person2 = ['John', 26];

function greet(name, age) {
    console.log('Hi ' + name + ', you are ' + age);
}

greet(...person1);
greet(...person2);

// ------------------

var names = ['Mike', 'John'];
var filan = ['Oli', ...names];

final.forEach(function (name) {
    console.log('Hi ' + name);
});
