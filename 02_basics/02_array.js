const mh= ["thor", "ironman", "hulk"]

const dch=["superman", "flash", "batman"]

//mh.push(dch)

//const newheros = mh.concat(dch)
//console.log(newheros);

const allnewheros = [...mh, ...dch]
//console.log(allnewheros);

const anotherarray = [1, 2, 3, [4, 5 ,6], 7, [6, 7 ,[4, 5]]]

const realanotherarray = anotherarray.flat(Infinity)
console.log(realanotherarray);

console.log(Array.isArray("nikhil"));
console.log(Array.from("nikhil"));

//array.of