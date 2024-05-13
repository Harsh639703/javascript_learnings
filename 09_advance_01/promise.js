// const promiseOne  = new Promise(function(resolve,reject){
//        setTimeout(function(){
//            console.log("asyn task has been completed");
//            resolve()
//        },3000)
// })

// //here using 'then' we are consuming the promis
// promiseOne.then(function(){
//     console.log("Promised Consumed");
// })


// //another way of doin the above task

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve()
//     },5000)
// }).then(function () {
//     console.log("task 2 has been consumed");
// })



// const promiseThird = new Promise(function(resolve,reject){
//       setTimeout(function(){
//            resolve({username:"Harsh Vishnoi",email:"harsh639703@gmail.com"})
//       },3000)
// })


// promiseThird.then(function(user){
//       console.log(user);
// })


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "HARSH", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 2000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

