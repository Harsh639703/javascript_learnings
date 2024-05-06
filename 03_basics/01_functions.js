
//this is how we define the function in the js
// function number(num1,num2){
//     console.log(num1 + num2); 
// }



// function number(num1,num2){
//     let result = num1 + num2
//     return result
// }
// const ert = number(5,7)
// console.log(ert);


// function userlogin(username){

//     if(username === undefined){
//         console.log("please enter username");
//     }
//       return `${username} just loggedin`
// }

// console.log( userlogin("Harsh Vishnoi"));


// function cartpayment(...num1){//"..." these 3 dots called the rest or spread operators  
//     return num1
// }
// function cartpayment(val1,val2,...num1){//"..." these 3 dots called the rest or spread operators  
//     return num1
// }

// console.log(cartpayment(122,200,300,4000));



const user={
    name: "polo-tshirt",
    price :1558
}
function myobject(anyobj){
      console.log(`the name is ${anyobj.name} and the price is ${anyobj.price}`);
}

myobject(user)//in this we first create the object then we pass that into the function

//we can pass the object directly  to the funtion 

myobject({//in this we are passing the object directly into the function
    name:"Rice",
    price:26
})

const mynewarr = [100,200,300]

function  findvalatindex(newar){
    return newar[0]
}
console.log(findvalatindex(mynewarr))