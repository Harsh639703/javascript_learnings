const hero = ["superman","batman","kela"]

const hero1 =["thor","spiderman"]
// hero.push(hero1)
// console.log(hero);
// console.log(hero[3][0]);

//concat - it add the arr but return the new array
const all = hero.concat(hero1)
// console.log(hero);
// console.log(all);

const nwer = [...hero , ...hero1]//"..." has the same work like concat , it spread the arrays into one array
// console.log(nwer);

const another_array = [1,2,3,4,[1,2,3],5,8,[6,9,8,[9,10,11]]]
console.log(another_array.flat(Infinity));

console.log(Array.from("Vishnoi"));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));