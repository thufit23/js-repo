const real_madrid = ['Cristiano Ronaldo','Karim Benzema','Marcelo','Luka Modric']
const fc_barcelona = ['Lionel Messi','Luis Suarez','Dani Alves','Andres Iniesta']
const legends = real_madrid.concat(fc_barcelona)
//console.log(legends);
const all_new_legends = [...real_madrid,...fc_barcelona]
console.log(all_new_legends);

console.log(Array.from("Mayank"))
let score1 = 10129
let score2 = 10130
let score3 = 10131

console.log(Array.of(score1,score2,score3))