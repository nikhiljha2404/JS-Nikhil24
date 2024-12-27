// ARRAY

const myArr= [0, 1, 2, 3 ,4 ,5]
const myheroes = ["hulk", "ironman"]


const myArr2 = new Array(1,2,3,4)

//console.log(myArr[0]);
 

//ARRAY METHODS


/*myArr.push(6)
myArr.push(7)
myArr.pop()*/

//myArr.unshift(4)
//myArr.shift()

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(4));

//const newarr = myArr.join()
//console.log(myArr);
//console.log(newarr);



// slice, spice

console.log(" A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("b", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("c", myArr);

//in slice it starts from the given range and end before the last value
//in spice it includes the whole range

///////but main differce between slice and spice is  is that slice does not manipuate the original array whereas spice manipulate sthe original array by removing the splicedd ranged from it.....

