
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


function userlogin(username){

    if(username === undefined){
        console.log("please enter username");
    }
      return `${username} just loggedin`
}

console.log( userlogin("Harsh Vishnoi"));