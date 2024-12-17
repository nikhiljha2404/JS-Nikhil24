//  1.primitive

//7 types: string, number, boolean, null ,undefined,symbol,bigInt


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123');

const bigNumber = 3456898252938352893n



//2. Refrence(Non primitive)
 // arrays,objects,functions

 //const heros = ["ironman" "captain" "thor"]; //array

 let myObj= {
    name: "nikhil",
    age: 20,
 } // object


  const myfunction= function(){
    console.log("hello world")

 }
 
/*Return type of variables in JavaScript
1) Primitive Datatypes
Number => number
String  => string
Boolean  => boolean
null  => object
undefined  =>  undefined
Symbol  =>  symbol
BigInt  =>  bigint

2) Non-primitive Datatypes
Arrays  =>  object
Function  =>  function
Object  =>  object */