const num =  [1,2,3]

//this is using normal function

// const mytotal =  num.reduce( function(acc, currval){
//     console.log(`acc:- ${acc} , currval:-${currval}`);
//     return acc + currval
// },0)
// console.log(mytotal);

//this is using array function

// const mytotal = num.reduce((acc,currval)=>(
//     acc+currval
// ),0)

// console.log(mytotal);


const coursecart =[
    {
        coursename:"java",
        price:1000
    },
    {
        coursename:"machine learning",
        price:990
    },
    {
        coursename:"DevOps",
        price:1000
    },
]

//now i want the total of the courses that i have take

const mytotal = coursecart.reduce((acc,item) =>{
    console.log(`the price of the ${item.coursename} course is :  Rs ${item.price}/-`);      
    return acc+item.price
},0)
console.log("********************************************************");
console.log(`the total price of all the courses is : Rs ${mytotal}/-`);
