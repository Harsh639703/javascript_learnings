class user{
    constructor(username){
        this.username=username 
    }

    printme(){
        console.log(`USERNAME is : ${this.username}`);
    }
}

class teacher extends user{
    constructor(username,email,pass){
        super(username)
        this.email= email
        this.pass= pass
    }

     username1(){
        console.log(`Username is : ${this.username}`);
     }


}


const harry = new teacher("Harsh","email@gmail.com",11345)

harry.username1()//this call techer method
harry.printme()//this is calling user method

console.log(harry instanceof teacher);
