console.log('hello');
//alert('this is jim');

var b = 'smoothie'
console.log(b);

//document.getElementById('text').innerHTML= age;

//prompt('age?')

var num = 5.3;
console.log(50 /5);

// to add ++ and remove --
//remainder %
// increment decement +=
// create a function and then call it 
function fun() {
    alert('this is a function');
}

//call
fun();

// create a func that takes a name and returns hello and the name
function greet(){
    var name  = prompt('whats your name');
    var result = 'Hello' +' '+ name;
    console.log(result);
}
//greet();
function sumnum(num1, num2) {
    var result = num1 + num2;
    console.log('result');

}
sumnum(10, 10);

//While loops

var num = 0;

while (num < 200) {
    num +=1;
    console.log(num);
}

//For Loop if i use var instead of let it will be the same if i am a beginner
for (let num = 0; num < 100; num++){
    console.log(num);
}

//Data types
var yourAge = 18; //number
let yourName = 'Bob' // string
let name = {first: 'Jane', last:'Doe'} //object
let groceries = ['apple', 'banana', 'oranges']; //array
let random; //undefined
let nothing = null; //value null
//Strings in javascript (common methods)
let fruit = 'banana';
let moreFruits = 'banana\napple';  //new line
console.log(fruit.length);
console.log(fruit.indexOf('a')); //search for key (word)
console.log(fruit.slice(2, 6)); // prints nana from banana
console.log(fruit.replace('ban', '123')); // 123ana
console.log(fruit.toLocaleLowerCase());
console.log(fruit.toLocaleUpperCase());
console.log(fruit.charAt(2)); // n
// or
console.log(fruit[2]);
console.log(fruit.split(',')); //split by a comma
console.log(fruit.split('')); //split by a character

//Array
let fruits = ['banana','apple','orange'];
 fruits = new Array('banana','apple', 'orange','pineapple');

 console.log(fruits[2]); //access value at index 2nd
fruits[0] = 'pear';
console.log(fruits); //it will remove banana and print pear at first

for (let i =0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//array commmon methods
console.log('to string', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits); //removes the last one
console.log(fruits.push('berries'), fruits); //add on top
fruits[4] = 'new fruit'; //adds fruit
fruits.shirt(); //remove element from list
fruits.unshift('kiwi'); //add first element to an array

let veggies = ['tomato', 'broccoli'];
let allgroceries = fruits.concat(veggies); //add everything to the list
console.log(allgroceries);
console.log(allgroceries.reverse); // reverse the list

let somenumbers = [4, 5, 34, 43, 13, 23, 45];
console.log(somenumbers.sort(function(a, b) {return a-b})); // sorted in ascending order
console.log(somenumbers.sort(function(a, b) {return b-a})); // sorted in descending order

let emptyArray = newArray();
for (let num=0; num<10; num++){
    emptyArray.push(num)

}
console.log(emptyArray);
// Objects
let student ={
    first: 'Dimitrs',
    last:'Thedoropoulos',
    age:'18',
    height:'1.85',
    studentInfo: function (){
        return this.first + '\n' + this.last + '\n' + this.age; // this = self in python
    }
    };
console.log(student.first);
student.first = "Jim" //change name 
//Conditionals Control Flows (if else)
//18-35 target
//&& and 
// || or
var age = prompt('whats your age?');
if ((age>= 18 ) && (age<= 35)) {
    status = 'target';
    console.log(status);
} else {
    status = 'noooo';
    console.log(status);
}

//Switch statements
// 0 = monday 
switch(6) {
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}
console.log(text); //answer is weekend cause of 6 

