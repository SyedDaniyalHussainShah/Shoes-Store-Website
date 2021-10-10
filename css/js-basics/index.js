// Logical Operators
// let highIncome = false;
// let goodCreditStore = true;
// let eligible = highIncome && goodCreditStore;
// console.log('Is Eligible '+ eligible);
// let notApplicable = !eligible;
// console.log('\nNot Applicable ' + notApplicable);

// Logical Operators
// let userColor = undefined;
// let defaultColor = 'black';
// let currentColor = userColor || defaultColor;
// console.log(currentColor);

// Ternary Operator
// let points = 95;
// let type = points >= 100? 'gold' : 'silver';
// console.log(type);



//     for in loop to hold properties of obj or index of array

// const person = {
//     name : 'Shahzaib',
//     age : 20

// }

// for(let i in person)
// console.log(i + '  ' + person[i]);
// const colors = ['red', 'blue', 'green'];

// for(let i in colors)
// console.log(i + '  ' + colors[i]);




//                                for of loop for holding values of array and characters from string
//  Q1 array
// const person = {
//     name : 'Shahzaib',
//     age : 20

// }

// for(let i of person)
// console.log(i);

// Q
// const colors = ['red', 'blue', 'green'];

// for(let i of colors)
// console.log(i);

//       OR

// for(let i of ['red', 'blue', 'green'])
// console.log(i);


// Q2 String 

// let string = 'mystring dash';
// for(let myCharacter of string){
//     console.log(myCharacter);
// }

//    OR

// for(let myCharacter of 'mystring dash'){
//     console.log(myCharacter);
// }

// Practice

// function maxTwo(firstNumber , secondNumber){
//     return firstNumber > secondNumber? firstNumber : secondNumber;
// }

// console.log(maxTwo(450 , 550))

// console.log(isLansdcape(8,8))

// function isLansdcape(width , height){
//     let isLansdcape = true;
//     return width > height? isLansdcape : !isLansdcape;
// }

// same code modified
// console.log(isLansdcape(800,600))
// function isLansdcape(width , height){
//     return (width > height);
// }


//                       Exercise

// FIZZBUZZ
// let output = fizzBuzz(false);
// console.log(output);

// function fizzBuzz(input){

//     if( typeof input !== 'number' )
//     return 'Not a Number';

//    // or return NaN;

//     if(input == 0 )
//     console.log(input);

//     if((input % 3 === 0) && (input % 5 === 0) )
//     return 'FizzBuzz';

//     if(input % 3 === 0 )
//     return 'Fizz';

//     if(input % 5 === 0 )
//     return 'Buzz';

//     return input;

// }
//  let number = 5;
//  let number2 = '5';
//  let isEqual = number === number2;

//  console.log(isEqual);

//                       Exercise

// checkspeed demerit points

// avoid using magic numbers in code, convert the number to variable and then use them

// console.log(checkSpeed(59));

// function checkSpeed(speed){
//     let floorSpeed = Math.floor(speed);
//     let point = (floorSpeed - 70) / 5 ;
    
//     if(floorSpeed > 70 && floorSpeed % 5 === 0 && point <= 12)
//         return 'point ' + point;
        
//     if(point > 12)
//         return 'License suspended';

//     else
//         return 'OK';
//     }


//             checkspeed demerit points modified mosh sol

// (checkSpeed(80));

// function checkSpeed(speed){
//     const speedLimit = 70;
//     const kmPerPoint = 5;
    
//     if(speed < speedLimit + kmPerPoint){
//         console.log('Ok');
//         return;
//     }
//         const points = Math.floor((speed - speedLimit) / 5)        
//         if(points >= 12)
//             console.log('License suspended');
//         else
//             console.log('Points ' + points);
    
//     }

 
//                          Even odd
// showNumbers(10);
// function showNumbers(limit){
//     for(let i = 0; i <= limit; i++){
//         if(i%2 === 0) console.log(i + ' "Even"');            
//         else console.log(i + ' "Odd"');
            
//     }
// }


//                           Even Odd modified mosh
// showNumbers(10);
// function showNumbers(limit){
//     for(let i = 0; i <= limit; i++){
//         const message = (i%2 === 0)? 'Even': 'Odd';            
//         console.log(i, message);
            
//     }
// }


//                                          Falsy Values
// undefined, null, ''(Empty quotes), false, 0, NaN


//                    exercise count truthy
// My Code

// const array = [false, false , null, 1, 3, 5, 6,5,2,'', 0];


// console.log(countTruthy(array));

// function countTruthy(array){
//     let count = 0;
//     for (const i of array) {
//         count = i ? count + 1: count;
//     }
//     return count;
// }

//               countTruthy     Modified by mosh

// const array = [0, null, undefined, '', 2, 3];

// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0; 
//   for (let value of array) 
//     if (value)
//       count++;
//   return count; 
// }



//                          Exercise String Properties
// my code

// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);

// function showProperties(obj){
//     for (const key in obj) {
//         if (isNaN(obj[key])) {
//             console.log(key + ':' + obj[key]);            
//         }
//     }
// }


//       Mosh Code

// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);

// function showProperties(obj){
//     for (const key in obj)
//         if (typeof obj[key] === 'string')
//             console.log(key + ':' + obj[key]);            
        
// }



//                   Exercise Sum of Multiples of 3 and 5
// my code
// same by mosh

// console.log(sum(10));


// function sum(limit){
//     let sum = 0;    
//     for (let i = 0; i <= limit; i++)
//         if(i % 3 === 0 || i % 5 === 0)
//         sum += i;

//     return sum;
// }


//                   Exercise Grade
// my code

// const marks = [80, 80, 50];

// console.log(calculatorGrade(marks));

// function calculatorGrade(marks){
//     let sum = 0;

//     for (const mark of marks)
//         sum += mark;
//     const average = sum / marks.length;
    
//     if(average < 60) return 'F';
//     if(average < 70) return 'D';
//     if(average < 80) return 'C';   
//     if(average < 90) return 'B';   
//     return 'A';
// }



//     mosh code


// const marks = [80, 80, 50];

// console.log(calculatorGrade(marks));


// function calculatorGrade(marks){
//     const average = calculateAverage(marks);    
//     if(average < 60) return 'F';
//     if(average < 70) return 'D';
//     if(average < 80) return 'C';   
//     if(average < 90) return 'B';   
//     return 'A';
// }

// function calculateAverage(array){
//     let sum = 0;
//     for (let value of array)
//         sum += value;
//     return sum / array.length;
// }


//            Exercise Show Stars


// showStars(8);

// function showStars(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = '';
//     for (let i = 1; i <= row; i++)
//       pattern += '*'; 
//     console.log(pattern);
//   }
// } 


//        last exercise of control flow section
//                  prime numbers
// my code

// showPrimes(20);

// function showPrimes(limit){
//     for(let prime = 1; prime <= limit; prime++){
//         let count = 0;    
//         for(let i = 1; i <= prime; i++){
//                 if(prime % i === 0) count++;
//         }
//         if(count === 2) console.log(prime);
//     }
// }


// mosh code 1

// showPrimes(20);

// function showPrimes(limit){
//     for(let number = 2; number <= limit; number++){

//         let isPrime = true;    
//         for(let factor = 2; factor < number; factor++){
//                 if(number % factor === 0){
//                     isPrime = false;
//                     break;
//                 }
//         }
//         if(isPrime) console.log(number);
//     }
// }

// mosh code 2 for prime numbers

// showPrimes(20);

// function showPrimes(limit){
//     for(let number = 2; number <= limit; number++)
//         if(isPrime(number)) console.log(number);
// }

// function isPrime(number){
//         for(let factor = 2; factor < number; factor++)
//                 if(number % factor === 0)
//                     return false;                
        
//         return true;
// }




//                                                                      Objects

// Object-oriented Programming (OOP): a style of programming where
// we see a program as a collection of objects that talk to each other
// to perform some functionality.

// in object-oriented programming terms if a function is part of an 
// object, we call the function a method.


// examples

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y:1
//     },
//     isVisible: true,
//     draw: function() {
//         console.log('draw');
//     }
// };

// to say, calling draw function of the circle object is not accurate
// calling draw method of the circle object is accurate

// circle.draw(); // Method

//                  Factory Function

// function createCircle(radius){
//     return {
//         radius, // same as radius: radius, we write like if key and value are same
//         draw() {                      // shortcut for draw: function(){}
//             console.log('draws');
//         }
//     };
// }

// // call this function to create a circle object

// const circle1 = createCircle(1);
// console.log(circle1.draw());
// console.log(circle1);


//                  Constructor Functions

// its job is to construct or create an object
// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour
// when naming constructor function, we should use Pascal Notation by convention.


// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(1);


// we can use any of these two patterns to create an object



//                              Dynamic Nature of Objects

// const circle = {
//     radius: 1
// };
// // adding new property, new method to an object
// circle.color = 'yellow';
// circle.draw = function() {}

// // adding new property, new method to an object
// delete circle.color;
// delete circle.draw;

// console.log(circle);

//                 Note
// I have modified the circle object of either the property, and then remove that property.
// So what kind of constant is that? Well, when we use constant
// here, that means we cannot reassign this variable,
// so this variable is more accurately a constant. So we cannot
// reset circle to a new object. If we do that,
// we get this error. Assignment to constant variable.
// So we cannot reassign this constant, but we
// can always change the circle object by adding
// or removing properties.

// in javascript every object has a constructor property
// like this
// new String(); we use '', "", `` instead
// new Boolean(); true, false
// new Number(); 1, 2, 3, ...
// new Object(); we use {key: value};
// we use literals instead of using constructors, because this is easier and cleaner way of writing code.
//      conclusion:
//        circle.constructor;
// Every Object has a constructor property, and that refrences the function that was used to create that object.


// In javascript Functions are objects

// const Circle1 = new Function('radius',`
// this.radius = radius;
// this.draw = function() {
//     console.log('draw');
// }
// `);
// like this

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// // Circle.call({}, 1);
// // Circle.apply({}, [1, 2, 3]);
// const another = new Circle(1);

// const myCircle = new Circle(1);

// console.log(another);
// console.log(myCircle);

// another.radius = 6;

// console.log(another);
// console.log(myCircle);

//         Value Types
// Number
// String
// Boolean
// Symbol
// undefined
// null

//          Reference Types
// Object
// Function
// Array

// both function and array are objects so we have value types (primitives) and objects in javascript
// Primitives are copied by their value
// Objects are copied by their reference

// let obj = { value:10 };

// function increase(obj){
//     obj.value++;
// }

// increase(obj);
// console.log(obj);
// obj will be increased, because object is passed by its reference.


// let number = 10;

// function increase(number){
//     number++;
// }

// increase(number);
// console.log(number);
// in this case value of number will remain 10 because its value is copied to another variable. passed by value.



//                  Enumerating Properties of an Object

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// for (let  key in circle)
//     console.log(key, circle[key]);
    
// for (let  key of Object.keys(circle)) //get key of an object usin for..of loop
//     console.log(key);

// for (let  entry of Object.entries(circle)) // get value of an object usin for..of loop
//     console.log(entry);

// if ('radius' in circle) console.log('yes'); // search a property in an object





// // Cloning an Object

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// Method 1
// const another = {};
// for (let key in circle)
//     another[key] = circle[key];

// Method 2 simple
// const another = Object.assign({}, circle); // using this pattern we can also copy from more than 1 object into a target object, or combine multipe objects to a single object.
// Or add any extra property to it while cloning
// const another = Object.assign({
//     color: 'yellow'
// }, circle);

// Method 3 simplest
// const another = { ...circle}; // spread operator

// console.log(another);


//         No Worry about garbage collection, In JS there is built in a garbage collector.


//                                      NOTE
// Built in objects to look for

// Math
// String
        //          String Primitive (typeof string)
        // const message = 'hi';
        // when we use dot notation e.g (message.length) the js engine internally wraps it into string object
        //          String Object (typeof object)
        // const another = new String('hi');

        // const message = 'This is my first message';
        // console.log(message.length);
        // this string object method returns length of the string
        
       
//                                      Template literals


// String Primitive

// const message = 
// 'This is my\n' +
// '\'first\' message';

// There's a simple method than this.

// The literals we used
// Object{}
// Boolean true, false
// String '', ""

// From ES6 we have
// Template Literals ``
// `` back tick character
// Template literals help us write cleaner code
// we can make the text appear like we write them independently with this template literal
// here's an example

// const another = 
// `This is my
// 'first' message`;

// console.log(message);
// console.log(another);

// Or like mail someone
// const another =
// `Hi John,

// Thank you for jumping my mailing list.

// Regards,
// Shahzaib`;

// console.log(another);

//                      Make it dynamic

// lets try without template literal
// const name = 'John';
// const message = 'Hi ' + name + ',\n';        // looking ugly

// with template literal
// const name = 'John';
// const another =
// `Hi ${name} ${2 + 3},

// Thank you for jumping my mailing list.

// Regards,
// Shahzaib`;
// console.log(another);
// ${} is placeholder, we can add any variable or mathematical expression inside this.
// inside this placeholder we can also call a function that returns a value.


// Date Object in js

// const now = new Date();
// console.log(now.toISOString()); // Default time format used commonly by backend developers.



//              Exercise Objects
// Q1 Address

// const address = {
//         street: 'Jinnah Street',
//         city: 'Abbottabad',
//         zipCode: 23232
// };

// display(address);

// function display(address){
//         for (const key in address) {
//                 console.log(key, address[key]);
//         }

// }



// Q2 Factory and constructor function

// function address(){
//         return {
//                 street: 'Jinnah Street',
//                 city: 'Abbottabad',
//                 zipCode: 23232
//         };

// }


// //dynamic factory function
// function addressDynamic(city){
//         return {
//                 street: 'Jinnah Street',
//                 city,
//                 zipCode: 23232
//         };

// }


// function Address(){
        
//         this.street = 'Jinnah Street';
//         this.city = 'Abbottabad';
//         this.zipCode = 23232;
        
// }

// //dynamic constructor function
// function AddressDynamic(city){
        
//         this.street = 'Jinnah Street';
//         this.city = city;
//         this.zipCode = 23232;
        
// }

// const myAddress1a = address();
// const myAddress1b = addressDynamic('Quetta');
// const myAddress2a = new Address();
// const myAddress2b = new AddressDynamic('Lahore');

// display(myAddress1a);
// console.log('\n');
// display(myAddress1b);
// console.log('\n');
// display(myAddress2a);
// console.log('\n');
// display(myAddress2b);

// function display(address){
//         for (const key in address) {
//                 console.log(key, address[key]);
//         }

// }



// Q3 Object Equality

// function Address(street, city, zipCode){
        
//         this.street = street;
//         this.city = city;
//         this.zipCode = zipCode;
        
// }

// let address1 = new Address('a', 'b', 'c');
// let address2 = new Address('a', 'b', 'c');
// let address3 = address1;

// function areSame(address1, address2){
//         return address1 === address2;
// }

// function areEqual(address1, address2){
//         return address1.street === address2.street &&
//                 address1.city === address2.city &&
//                 address1.zipCode === address2.zipCode;
// }

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));
// console.log(areSame(address1, address3));


// Q4 Blog Post Object
// let blogPost = {
//         title: 'A',
//         body: 'B',
//         author: 'C',
//         views: 10,
//         comments: [
//                 {author: 'E', body: 'F'},
//                 {author: 'E', body: 'F'}
//         ],
//         isLive: true
// }

// for (const key in blogPost) {
//         console.log(key, blogPost[key]);
// }



// Q5 Constructor Functions

// let post = new Post('a', 'b', 'c');

// console.log(post);

// function Post(title, body, author){
//         this.title= title;
//         this.body= body;
//         this.author= author;
//         this.views= 0;
//         this.comments= [];
//         this.isLive= false;
// }



// Q6  Price Range Objects

// let priceRanges = [
//         {label: '$', tootip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
//         {label: '$$', tootip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
//         {label: '$$$', tootip: 'Expensive', minPerPerson: 21, maxPerPerson: 50}
// ];

// let restaurants = [
//         { averagePerPerson: 5}
// ];





//                                      Arrays


//              Notes
// Adding Elements

// const numbers = [3, 4];

//                 // adding at the End
// numbers.push(5, 6);

//                 // adding at the Beginning
// numbers.unshift(1, 2);                

//                 // adding at the Middle
// numbers.splice(2, 0, 'a', 'b');  //1st parameter is index, 2nd how many to remove, from 3rd and onward we can add elements to the array.



// Finding Elements(Primitives)

// const numbers = [1, 2, 3, 1, 4];

// console.log(numbers.indexOf('1'));
// console.log(numbers.indexOf(1, 2));  // 2nd parameter is for search from, with this the search for element will begin from the index 2.
// console.log(numbers.indexOf(1));
// console.log(numbers.lastIndexOf(1));

// console.log(numbers.indexOf(1) !== -1);  // Output = true
// console.log(numbers.includes(1)); // Output = true.  include() method returns boolean


// Finding Elements(Objects (Reference Types))

// const courses = [
//         { id: 1, name: 'a' },
//         { id: 2, name: 'b' }
// ];

// const course = courses.find(function(course){
//         return course.name === 'a';
// }); // returns the complete object in which name = 'a', if not found then course = undefined

// const course2 = courses.findIndex(function(course){
//         return course.name === 'a';
// }); // returns index number of the object in which name = 'a', if not found then it will return -1.


// console.log(course);

// console.log(course2);


// // Arrow Functions
//                 //above function modified, ES6 javascript
// const course = courses.find((course) => {
//         return course.name === 'a';
// })


// const courses = [
//         { id: 1, name: 'a' },
//         { id: 2, name: 'b' }
// ];

//                 // OR, if we don't any paramete we'll put empty brace () or if we have a single parameter then we'll write the parameter without braces.
//                 // => means goes to
//                 // if we have a single line of code inside the function and that returns a value, then we'll remove the curly braces and remove the return keyword as well, and write the code in a single line.
// const course = courses.find(course => course.name === 'a');
// console.log(course);


// Removing elements

// numbers.pop();    //pop() removes last element of an array.

// console.log(numbers);


// console.log(numbers.pop());          //displays and removes last element of this array.

// console.log(numbers);


// const numbers = [1, 2, 3, 4];

        // End
// const last = numbers.pop(); // it will store the last element of the array to this variable and removes that element form the array.
// console.log(numbers);
// console.log(last);

        // Beginning
// const first = numbers.shift();        // similar to pop but it will remove from begining.
// console.log(numbers);
// console.log(first);


        // Middle
// const middle = numbers.splice(2,2); // First parameter is for index number to start from, and 2nd is how many elements you want to delete.
// console.log(middle);
// console.log(numbers);


// Emtying an Array
// let numbers = [1, 2, 3, 4];

// Solution 1
// numbers = [];   //not possible with const. if another array is pointing to this array then that array will remain as it is, below is an example.
//                 // Example
//                 // let another = numbers;
//                 // assigning numbers = []; will make numbers empty but the another will keep its element that was assigned from numbers array.

// console.log(numbers);

// Solution 2
// let another = numbers;
// numbers.length = 0;  //in this case both numbers and another will be empty. also works with const.

// console.log(numbers);
// console.log(another);

// Solution 3
// let another = numbers;
// numbers.splice(0, numbers.length);   //in this case both numbers and another will be empty. also works with const.

// console.log(numbers);
// console.log(another);

// Solution 4
// let another = numbers;
// while (numbers.length > 0)         //in this case both numbers and another will be empty. also works with const.
//         numbers.pop();

// console.log(numbers);
// console.log(another);
//                 // Solution 1 is recommended but if this is not the case then solution 2 will be preferred, in terms of performance and clean coding.

// Combining and Slicing Arrays
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second); // combine both arrays and store to another variable

// const slice = combined.slice(2, 4); //slice the array, first parameter is from which index no. to start and second is till which index no. (excluding entered index in 2nd parameter).
//                                     // slice the array starting from index 2 to index 4 (excluding index no. 4).

// const slice2 = combined.slice(2); // copy all elements from index 2 to the last element.

// const slice3 = combined.slice(); // copy all elements from array.

// console.log(combined);
// console.log(slice);
// console.log(slice2);
// console.log(slice3);
//               // This method works properly with primitive types
//               // if we add an object to the array and combine or slice the array them it will point to that object.
//               // example
// const first = [{ id: 1 }];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// first[0].id = 10;  // the value of id inside combined variable array will also change from 1 to 10.

// console.log(combined);
//                 // same principle applies to slice method.
//                 // primitives will be copied by value.
//                 // reference types will be copied by their references.


// The Spread Operator
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = [...first, ...second];
// const combined2 = ['a', ...first, 'b', ...second, 'c']; // add any element to start, middle or end.


// const copy = [...combined];

// console.log(combined);
// console.log(combined2);
// console.log(copy);

// my practice
// const me = {name: 'shahzaib'};
// const another = Object.assign({}, me);
// const another2 = {...me};    // this spread and object.assign will make clone of object, if we use this with arrays, it will copy the reference of that array.

// me.name = 'junaid';

// console.log(me);
// console.log(another);
// console.log(another2);

// Iterating an Array
// const numbers = [1, 2, 3];
//         // For of loop
// for (let number of numbers)
//         console.log(number);
//         // For each loop
// numbers.forEach(function(number) {
//         console.log(number);
// });

//         // Lets modify the for each loop
// numbers.forEach(number => console.log(number));

//         // both for of and for each loop are same in functionality, we can use any of them
//         // in for each loop there is an option parameter for index which gives the index no. of the element
// numbers.forEach((number, index) => console.log(index, number));
//         // we can also display index with for in loop.


// Joinig Arrays
// const numbers = [1, 2, 3];
// const joined = numbers.join(); // returns a string containing all the elements of that array, separated by comma by dafault.
// console.log(joined);

// const message = 'This is my first message';
// const parts = message.split(' '); // returns an array containing all the words (separated by space) from that string. If we add something else instead of space then the string will be separated by that alphabet which we add.
// console.log(parts);

// const combined = parts.join('-'); // I've joined that array to string separated by hyphen(dash).
// console.log(combined);


// Sorting Arrays
// const numbers = [2, 3, 1];
// numbers.sort(); // sort in ascending order
// console.log(numbers);

// numbers.reverse(); // sort in descending order
// console.log(numbers);

//                 // this won't work with the array of objects
//                 // for array of objects we use a function call inside this sort() method
// const courses = [
//         { id: 1, name: 'Node.js'},
//         { id: 2, name: 'javascript'}
// ];

// courses.sort(function(a, b) {
//         const nameA = a.name.toUpperCase();
//         const nameB = b.name.toUpperCase();

//         if(nameA < nameB) return -1;
//         if(nameA > nameB) return 1;
//         return 0;
// });

// console.log(courses);

// my practice
// const courses = [
//         { id: 1, name: 'Node.js'},
//         { id: 2, name: 'javascript'},
//         { id: 3, name: 'Angular'},
//         { id: 4, name: 'redux'},
//         { id: 5, name: 'java'},
//         { id: 6, name: 'react'}

// ];

// courses.sort((a, b) => {
//         const nameA = a.name.toUpperCase();
//         const nameB = b.name.toUpperCase();

//         if(nameA < nameB) return -1;
//         if(nameA > nameB) return 1;
//         return 0;
// });

// console.log(courses);


// Testing the Elements of an Array
// const numbers = [1, -1, 2, 3];

// //                 // const allPositive = numbers.every(function(value){
// //                 //         return value >= 0;
// //                 // });

// const allPositive = numbers.every(value => value >= 0); //with this method we can check if all the numbers of are positive or not, also check for negative numbers (depends on condition we put).

// const atLeastOnePositive = numbers.some(value => value >= 0); //with this method we can check if at least one of the numbers is positive or not, also check for negative numbers (depends on condition we put).

// console.log(allPositive);
// console.log(atLeastOnePositive);


// Filtering an Array
// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(n => n >= 0); // add all positive numbers to this new filtered array.

// console.log(filtered);


// Mapping an Array
// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(n => n >= 0);

// console.log(filtered);

// const items = filtered.map(n => '<li>' + n + '</li>');

// const html = '<ul>' + items.join('') + '</ul>';

//                 // const items = filtered.map(n => {
//                 //         return { value: n};
//                 // });
// modifying this function
// const items = filtered.map(n => ({ value: n}) );        // map or filter won't modify the original array, they return a new array

//         //Lets make is easy.
//         //Chaining
// const items = numbers
//         .filter(n => n >= 0)
//         .map(n => ({ value: n}) )
//         .filter(obj => obj.value > 1)
//         .map(obj => obj.value);

// console.log(items);


// Reducing an Array

// const numbers = [1, -1, 2, 3];

// let sum = 0;
// for (let n of numbers)
//         sum += n;
//                 // There's another new and cleaner way of for this.
//      //how its working
//      // a = 0, c = 1 => a= 1
//      // a = 1, c = -1 => a= 0
//      // a = 0, c = 2 => a= 2
//      // a = 2, c = 3 => a= 5
// const sum = numbers.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue;
// }, 0);  //reduce method takes two parameters and two arguments, first parameter is accumulator which act like sum (stores value), and 2nd is the value array.
//         // 1st argument is call back function, and 2nd is for initialization of accumulator.

//                 // if we remove the 2nd argument
//                 // 1st step will be skipped
//                 // by default the first value will be added to accumulator and then begin adding from 2nd value
//                 // a = 1, c = -1 => a= 0
//                 // a = 0, c = 2 => a= 2
//                 // a = 2, c = 3 => a= 5
// const sum = numbers.reduce(
//         (accumulator, currentValue) => accumulator + currentValue
// );

// console.log(sum);


//              Exercise Arrays
// Q1 Array from Range
// my code
// const numbers = arrayFromRange(-10, -4);

// console.log(numbers);

// function arrayFromRange(min, max){
//         const numbers = [];
//         for (let i = min ; i <= max ; i++)
//                 numbers.push(i);
        
//         return numbers;
// }
// same as mosh's solution


// Q2 Includes
// my code
// const numbers = [1, 2, 3, 4];
// console.log(includes(numbers, 3));

// function includes(array, searchElement) {
//         for(let element of array)
//                 if(element === searchElement )
//                 return true;
//         return false; 
// }
// same as mosh's


// Q3 Except
// my code
// const numbers = [1, 2, 3, 4, 2, 1, 3, 1, 1, 1, 3, 3, 3, 2, 4, 5, 1, 2, 4, 3, 2, 2, 2, 1];

// const output = except(numbers, [1, 2]);

// console.log(output);

// function except(array, excluded) {
//         let count = array.length;
//         do {
//                 count = array.length;
//                 for (let key in array)
//                         for (let value in excluded)
//                                 if(array[key] === excluded[value])
//                                         array.splice(key, 1);
//         } while (count !== array.length);
        
//         return array;
// }

// mosh's code for Q3
// const numbers = [1, 2, 3, 4, 2, 1, 3, 1, 1, 1, 3, 3, 3, 2, 4, 5, 1, 2, 4, 3, 2, 2, 2, 1];

// const output = except(numbers, [1, 2]);

// console.log(output);

// function except(array, excluded) {
//         const output = [];
//         for (let element of array)
//                 if (!excluded.includes(element))
//                         output.push(element);
//         return output;
// }


// Q4 Moving an Element
// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 0, 1);

// console.log(output);

// function move(array, index, offset){
//         const position = index + offset;
//         if (position < array.length && position >= 0 ){
//                 const output = [...array];
//                                         // const number = parseInt(array.splice(index, 1));
//                 const number = output.splice(index, 1)[0];
//                 output.splice(position, 0, number);

//                 return output;
//         }
//         console.error('Invalid offset');
// }


// practice
// const info = [
//         {id: 2, value: 3},
//         {id: 6, value: 5},
//         {id: 21, value: 31},
//         {id: 22, value: 33},
// ];

// const clone = [...info];     // working
// info.pop();
// info.pop();

// console.log(info);
// console.log(clone);


// Q5 Count Occurrences
// my code
// const numbers = [1, 2, 3, 4, 1];

// const count = countOccurrences(numbers, 1);

// console.log(count);

// function countOccurrences(array, searchElement) {
//         let count = 0;
//         for(let element of array)
//                 if(element === searchElement)
//                         count++;
//         return count;
// }

// challenge, use reduce method
// my code
// const numbers = [1, 2, 3, 4, 1, 1, 1, 1, 2, 2, 3, 1, 4, 4];

// const count = countOccurrences(numbers, 4);

// console.log(count);

// function countOccurrences(array, searchElement) {
//         return array.reduce(
//                 (accumulator, currentValue) => {
//                         return (currentValue === searchElement) ? accumulator += 1 : accumulator;                        
//                 }, 0);
// }

//  mosh's code
// const numbers = [1, 2, 3, 4, 1, 1, 1, 1, 2, 2, 3, 1, 4, 4];

// const count = countOccurrences(numbers, 4);

// console.log(count);

// function countOccurrences(array, searchElement) {
//         return array.reduce(
//                 (accumulator, current) => {
//                         const occurence = (current === searchElement) ? 1 : 0;
//                         return accumulator + occurence;
//                 }, 0);
// }


// Q6 Get Max
// my code
// const numbers = [1, 2, 3, 4, 2, 7, 2, 5, 2];

// const max = getMax(numbers);

// console.log(max);

// function getMax(array) {
//         let max = array[0];
//         for (let element of array)
//                 max = (element > max) ? element : max;
//         return max;
// }

// challenge, use reduce method
// const numbers = [1, 2, 3, 4, 2, 7, 2, 5, 2];

// const max = getMax(numbers);

// console.log(max);

// function getMax(array) {
//         return array.reduce(
//                 (accumulator, currentValue) => {
//                         return (currentValue > accumulator) ? currentValue : accumulator;
//                 }, array[0]);
// }

// mosh's code
// const numbers = [1, 2, 3, 4, 2, 7, 2, 5, 2];

// const max = getMax(numbers);

// console.log(max);

// function getMax(array) {
//         if (array.length === 0) return undefined;

//         let max = array[0];
        
//         for (let i = 1; i < array.length ; i++)
//                 if (array[i] > max)
//                         max = array[i];

//         return max;
// }

// mosh's code for challenge solution reduce method
// const numbers = [1, 2, 3, 4, 2, 7, 2, 5, 2];

// const max = getMax(numbers);

// console.log(max);

// function getMax(array) {
//         if (array.length === 0) return undefined;

//         return array.reduce((a, b) => (a > b) ? a : b);
// }


// Q7 Movies
// const movies = [
//         { title: 'a', year: 2018, rating: 4.5 },
//         { title: 'b', year: 2018, rating: 4.7 },
//         { title: 'c', year: 2018, rating: 3 },
//         { title: 'd', year: 2017, rating: 4.5 },
// ];

// const filtered = movies
//                         .filter(n => n.year === 2018 && n.rating >= 4)
//                         .sort((a, b) => b.rating - a.rating);

// for (const key in filtered) {
//         console.log(filtered[key].title)
// }

// mosh's code
// const movies = [
//         { title: 'a', year: 2018, rating: 4.5 },
//         { title: 'b', year: 2018, rating: 4.7 },
//         { title: 'c', year: 2018, rating: 3 },
//         { title: 'd', year: 2017, rating: 4.5 },
// ];

// const titles = movies
//                         .filter(n => n.year === 2018 && n.rating >= 4)
//                         .sort((a, b) => a.rating - b.rating)
//                         .reverse()
//                         .map(m => m.title);

// console.log(titles);

//      Built in functions to look for: fill(), map().



//              Notes
// Functions
// Function Declarations vs Expressions
//                 // Function Declaration
// function walk() {
//         console.log('walk');
// }
//                 // Anonymous Function Expression
// let run = function() {
//         console.log('run');
// };
//                 // Calling anonymous function
// let move = run;
//                 // both move and run are referencing the same anonymous function
// run();
// move();
//                 // Named Function Expression
// let run = function walk() {
//         console.log('run');
// };


// Hoisting
// What is Hoisting in Javascript?
// Hoisting is the process of moving function declarations to the top of the file. And this is done automatically by the JavaScript engine that is excecuting this code.
                // We are calling this function before its defined, this is what we say Hoisting.
// walk();

// function walk() {
//         console.log('walk');
// }

//                 // This code will give error because we can not call function expression before its defined like can't use a variable before its defined.
// run();

// const run = function() {
//         console.log('run');
// };


// Arguments
        // arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function. The typeof operator returns 'object' when used with arguments.
// let x = 1; // As a dynamic language we can change type of a variable.
// x = 'a';

//         // But we have the same concept in the arguments of a function.
// function sum(a, b) {
//         console.log(arguments); // displays all the arguments passed to this function
//         return a + b; // 1 + undefined = NaN
// }
// console.log(sum(1)); // Output NaN
// console.log(sum(1, 2, 3, 4, 5)); // Also we can pass additional arguments but the answer will be 3 because only first two arguments are used.

                // Also we can set no parameters and pass arguments as mush as we want.
// function sum() {
//         let total = 0;
//         for (let value of arguments)
//                 total += value;
//         return total;
// }
// console.log(sum(1, 3, 4));


// The Rest Operator
// function sum(...args) {
//         console.log(args);      // displays all the arguments passed to this function. 
//                                 // args is an array of all the arguments. The rest operation (...args) stores all the arguments passed to this fuction and hold them in an array.

// }
// console.log(sum(1, 3, 4));

// function sum(...args) {
//        return args.reduce((a, b) => a + b);                               
// }
// console.log(sum(1, 3, 4));

// Calculate total costs of items in a shopping cart
// function sum(discount, ...prices) {
//         const total = prices.reduce((a, b) => a + b);
//         return total * (1 - discount);
//  }
//  console.log(sum(0.1, 20, 30));
 
//                 // We can not add any parameter after the rest operator, the rest operator must be the last parameter.
// function sum(discount, ...prices, someValue) {          // gives error, because of adding additional parameter after the rest operator
//         const total = prices.reduce((a, b) => a + b);
//         return total * (1 - discount);
//  }
//  console.log(sum(0.1, 20, 30, 1));
                 // we can add 0 or more parameters before the Rest Operator but we can't add any after the Rest Operator.


// Default Parameters
// function interest(principal, rate, years){                      // formula for interest rate
//         return principal * rate / 100 * years;
// }
// console.log(interest(1000, 3.5, 5));

// adding default rate and years.
// function interest(principal, rate, years){
//         rate = rate || 3.5;     // if we pass argument for rate that is truthy then that value will be used otherwise the default value will be used that we set for rate (3.5).
//         years = years || 5;     
//         return principal * rate / 100 * years;
// }
// console.log(interest(1000));

// Modifying above function
// function interest(principal, rate = 3.5, years = 5){ // same functionality as above
//         return principal * rate / 100 * years;
// }
// console.log(interest(1000));

// practice with this topic
// function interest(principal, rate = 3.5, years){
//         return principal * rate / 100 * years;
// }
// console.log(interest(1000, 5)); // output will be NaN, if we give default value to a parameter then we must give all the next parameters a default value.

// trick to escape this (not recommended)
// function interest(principal, rate = 3.5, years){
//         return principal * rate / 100 * years;
// }
// console.log(interest(10000, undefined, 5));


// Getters and Setters
// const person = {
//         firstName: 'Mosh',
//         lastName: 'Hamedani',
// };
// console.log(`${person.firstName} ${person.lastName}`);

// If we wanna display full name on multiple places we have to log that each time. To escape from this
// const person = {
//         firstName: 'Mosh',
//         lastName: 'Hamedani',
//         fullName() {
//                 return `${person.firstName} ${person.lastName}`;
//         },
// };
// console.log(person.fullName());

// But this is read only, in other words we can't change a person's full name from outside. With getter we can also treat full name as a property not a function.
// So we use getters and setters
// getters => access properties
// setters => change (mutate) them
// const person = {
//         firstName: 'Mosh',
//         lastName: 'Hamedani',
//         get fullName() {
//                 return `${person.firstName} ${person.lastName}`;
//         },
//         set fullName(value) {
//                 const parts = value.split(' ');
//                 this.firstName = parts[0];
//                 this.lastName = parts[1];
//         }
// };
// person.fullName = 'John Smith';
// console.log(person.fullName);   // accessing like a property, not like a method


// Try and Catch (Error Handling)
// const person = {
//         firstName: 'Mosh',
//         lastName: 'Hamedani',
//         set fullName(value) {
//                 if (typeof value !== 'string') return;

//                 const parts = value.split(' ');
//                 this.firstName = parts[0];
//                 this.lastName = parts[1];
//         }
// };

// person.fullName = null; // gives error because split method only support string, thats why we've added if statement inside setter, if the type is not string then the default name will be used.
// console.log(person);

// But sometines we want to report an error in our application. Thats where we need to throw an exception.
// Lets see how that works in javascript.
// const person = {
//         firstName: 'Mosh',
//         lastName: 'Hamedani',
//         set fullName(value) {
//                 if (typeof value !== 'string')
//                         throw new Error('Value is not a string.');

//                 const parts = value.split(' ');
//                 if (parts.length !== 2)
//                         throw new Error('Enter a first and last name.');

//                 this.firstName = parts[0];
//                 this.lastName = parts[1];
//         }
// };

// try {
//         //person.fullName = null;
//         person.fullName = '';   // if we pass empty string then the fullName can't splitted so throw another exception.
// }
// catch (e) {
//         alert(e);
// }
// console.log(person);
// this is the basic of error handling in javascript


// Local vs Global Scope
// const color = 'red';

// function start() {
//         const color = 'blue';
//         console.log(color);  // Dsiplay the value of color defined inside this function, because the precedence of local variable is above the global variable.     
// }

// start();


// Let vs Var
// var => function-scoped,  can be accessible from anywhere no matter where we declare or put that.
// ES6 (ES 2015): let, const => block-scoped
// Let vs var in global variables
// var color = 'red';  // it will be attached to the window object, and if we have another 3rd party library and that library contains same name variable then that variable can override this variable.
// let age = 30;
// function sayHi() {
//         console.log('hi');   // This function is also added to the window object and we can access this from window.sayHi().
// }    // So this is a global function, so that is a bad practice
//  we can prevent this, in the next topic about Modules we'll learn how to encapsulate these functions in separate modules so they are not added to the window object.
// take away from this topic is, we should avoid using var keyword because it creates variables that are function scoped not block scoped.


// The "this" keyword
// "this" references the object that is executing the current function
// if that function is part of an object, we call that function a method. So if that function is a method in an object, this references that object itself.
// OOthewise if that function is a regular function, which means it's part of an object, this means the global object, which is the window object in browsers and global in Node.
// method -> obj
// function -> global (window in browsers, global in node)
// const video = {
//         title: 'a',
//         play() {
//                 console.log(this);      // reference the video object
//         }
// };

// video.stop = function() {
//         console.log(this);
// }
// video.stop();   // reference the video object

// Now check "this" in regular function
// function playVideo() {
//         console.log(this);      // references the window object
// }

// playVideo();

// what if use a constructor function
// function Video(title) {
//         this.title = title;
//         console.log(this);
// }

// const v = new Video('a');        // references the video object, because new keyword creates an empty object and then the "this" keyword will point to the empty object and then the values from video object will be returned to the empty object.
// When dealing with the regular function, "this" by deafault references the global object, but if you call a function, using the new operator, which is the case for constructor functions, "this" will reference a new empty object.
// const video = {
//         title: 'a',
//         tags: ['a', 'b', 'c'],
//         showTags() {
//                 this.tags.forEach(function(tag) {
//                         console.log(this.title, tag);   // we get undefined for title, because this is a callback function not a method, "this" inside the callback function will reference to the window or global object.
//                 });
//         }
// };

// video.showTags();

// solution to above.
// const video = {
//         title: 'a',
//         tags: ['a', 'b', 'c'],
//         showTags() {
//                 this.tags.forEach(function(tag) {
//                         console.log(this, tag);
//                 }, { firstName: 'Mosh' });      // in this case "this" inside callback function will reference to the object firstname
//         }
// };

// video.showTags();

// another solution to above
// const video = {
//         title: 'a',
//         tags: ['a', 'b', 'c'],
//         showTags() {
//                 this.tags.forEach(function(tag) {
//                         console.log(this.title , tag);
//                 }, this);       // at this point we're inside the showTags method, so this references the current object.
//         }
// };

// video.showTags();
// not all methods in JavaScript give you the ability to pass the "this" argument.
// For that we have a differenct solution in the next topic.


// Changing "this"
// Lets imagine if the forEach method doesn't have the second parameter?
// const video = {
//         title: 'a',
//         tags: ['a', 'b', 'c'],
//         showTags() {
//                 const self = this;      // self containing this references towards the video object
//                 this.tags.forEach(function(tag) {
//                         console.log(self.title, tag);
//                 });
//         }
// };

// video.showTags();       // but this is not the preferred approach

// another approach
// function playVideo(a, b) {
//         console.log(this);
// }

// playVideo.call({ name: 'Mosh' }, 1, 2);         // with this approach "this" will reference to this object.
// playVideo.apply({ name: 'Mosh' }, [1, 2]);      // with this approach "this" will reference to this object.
// // const fn = playVideo.bind({ name: 'Mosh'});  // this approach won't return the function but it sets "this" to point the argument we pass to this function 
// // fn();
// playVideo.bind({ name: 'Mosh'})(); // or call directly after it returns the value
// with call, apply and bind we can set the "this" argument for a given function.
// back to previous example and use bind method

// const video = {
//         title: 'a',
//         tags: ['a', 'b', 'c'],
//         showTags() {
//                 this.tags.forEach(function(tag) {
//                         console.log(this.title, tag);
//                 }.bind(this));
//         }
// };

// video.showTags();

// here's the preffered method
// we are using arrow function
// arrow functions inherit "this" from the containing function. When we pass an arrow function here, the same "this" value, is used in this arrow funtion. In other words, this is not rebound to a new object.
// const video = {
//         title: 'a',
//         tags: ['a', 'b', 'c'],
//         showTags() {
//                 this.tags.forEach(tag => {
//                         console.log(this.title, tag);
//                 });
//         }
// };

// video.showTags();


// Exercise (Functions)
// Q1 Sum of Arguments
// my code
// 1st practice
// function sum(){
//         let total = 0;
//         for (let value of arguments)
//                 total += value;
//         return total;
// }
// console.log(sum(1, 2, 3));

// solution + challenge solution
// function sum(...items){
//         return (Array.isArray(items[0])) ? items[0].reduce((a, b) => a + b) : items.reduce((a, b) => a + b);
// }
// console.log(sum([1, 2, 3, 7]));

// mosh's code to challenge solution
// console.log(sum([1, 2, 3, 7]));
// function sum(...items){
//         if (items.length ===1 && Array.isArray(items[0]))
//                 items = [...items[0]];
                
//         return items.reduce((a, b) => a + b);
// }


// Q2 Area of Circle
// const circle = {
//         radius: 1,
//         get area(){
//                 return Math.PI * this.radius *this.radius;
//         }
// };

// circle.radius = 2;
// circle.area = 30;
// console.log(circle.radius);
// console.log(circle.area);


// Q3 Error Handling
// Error handling of a question we did earlier
// try {
//         const numbers = [1, 2, 3, 4, 1, 1, 1, 1, 2, 2, 3, 1, 4, 4];

//         const count = countOccurrences(null, 4);

//         console.log(count);

// }

// catch(e) {
//         console.log(e.message);
// }

// function countOccurrences(array, searchElement) {
//         if (!Array.isArray(array))
//                 throw new Error('The value is not an array.');
//         return array.reduce(
//                 (accumulator, currentValue) => {
//                         return (currentValue === searchElement) ? accumulator += 1 : accumulator;                        
//                 }, 0);
//  }



//                                              The End




//                                              JavaScript