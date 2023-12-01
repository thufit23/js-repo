const name = "Mayank"
const repoCount = 50
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('mayank2312')

console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,4);
console.log(newString);

const url = "https://www.arrakis.com/dune%20"

console.log(url.replace('%20','-'));
