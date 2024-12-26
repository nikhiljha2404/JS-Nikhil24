const name = "nikhil"
const repocount = 50

//console.log(name + repocount + "value");

//console.log(`hello my name is ${name} and my repo count is ${repocount}`); //this is called string intercolation

const gameName = new String("nikhil-kj")

/*console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('l')); */

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherstring = gameName.slice(-8, 4)
console.log(anotherstring);

const newstringone = "  nikhil  "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://nikhil.com/nikhil%24jha"
console.log(url.replace('%24', '-'));


