const numbers = [1,2,3,4,5,6,7,8,9,10]

// const newnum = numbers.map((num)=>{
//     return  num +10
// })

const newnum = numbers.map((num)=> num*10).map((num)=>num+1)//nested map
const newnum1 = numbers.map((num)=> num*10).filter((num)=> num>51)//nested map

// console.log(newnum);
console.log(newnum1);

