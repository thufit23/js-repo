// let myDate = new Date()
/*console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate); */

let myCreatedDate = new Date(2001,11,23);
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.toLocaleString('default',{weekday: 'long'}))