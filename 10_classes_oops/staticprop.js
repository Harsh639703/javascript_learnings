class user{
    constructor(username){
        this.username=username
    }

    printme(){
        console.log(`${this.username}`);
    }

   static createid(){ //this will give the acces of this method to everyone
    return   `123`
   }

}

// const vish = new user("jay")
// console.log(user.createid());


class teacher extends user{
    constructor(username,email){
       super(username)
       this.email=email
    }
}


const year = new teacher("Harsh","email@gmail.com")
// console.log(year.createid());//here as we can see that we cant access the createid method due static property of that method
console.log(year.printme());