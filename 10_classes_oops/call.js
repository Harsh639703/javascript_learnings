function setuser(username){
   this.username= username
}



function createuser(username,email,pass){

    setuser.call(this,username)

    this.email= email
    this.pass=pass

}

const user = new createuser("Harsh","email@gmail.com",2548)
console.log(user);