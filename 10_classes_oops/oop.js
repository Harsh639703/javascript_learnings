// const user ={
//     username:"harsh",
//     email:"harsh639@gmail.com",

//     getalluser: function(){
//            console.log("get the value of all the data of the user")
//            console.log(`${this.username}`)
//     }

// }

// console.log(user.username);
// console.log(user.getalluser());




// function user(username,login,count){
//         this.username=username
//         this.login=login
//         this.count=count

//         return this
// }
function user(username,login,count){
        this.username=username
        this.login=login
        this.count=count
               this.greeting = function(){
                console.log(`welcome ${this.username}`);
               }
        return this
}



const userone = new  user("Harsh",true,3)
const usertwo = new  user("tushar",false,8)


console.log(userone);
console.log(usertwo);
console.log(userone.contructor)