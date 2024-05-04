const dte = new Date()
// console.log(dte);
// console.log(dte.toString());
// console.log(dte.toDateString());
// console.log(dte.toDateString());
// console.log(dte.toLocaleString());


// console.log(typeof dte); // date is an object type

const create = new Date(2001,8,26)
// console.log(create.toDateString());
let ndte = new Date()

ndte.toLocaleString('dafault',{
    weekday:"long"
})
console.log(ndte);



