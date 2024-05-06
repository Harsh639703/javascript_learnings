// const user ={
//     name: "Harsh",
//     price: 155,
    
//     welcommessage : function(){
//        console.log(`${this.name}, is the user and the price is ${this.price}`);
//     }
// }

// console.log();

// user.welcommessage()


//how to decalare a arrow function

const user = () =>{
    let username ="Harsh"
    console.log(this.username);
    console.log(this);
}
// user()

const add = (num1, num2) => {
     return num1+num2
}

const add1 = (num1, num2) => (  //here we use parenthesis so it is not required to write the return keyword
     num1+num2
)
const add2 = (num1, num2) => (  //here we use parenthesis so it is not required to write the return keyword
     {
        name:"Harsh"
     }
)


console.log(add(5,8))
console.log(add1(51,8))
console.log(add2(51,8))