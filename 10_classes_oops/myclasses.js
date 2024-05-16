


class user{
    constructor(username,email,pass){
        this.username=username
        this.email=email
        this.pass=pass
    }

    encryptPassword(){
        return `${this.pass}abc`
    }

     changeusername(){
        return `${this.username.toUpperCase()}`
     }
}


const  harry = new user("Vishnoi","ehasd@gmail.com",1547)
console.log(harry.encryptPassword());
console.log(harry.changeusername());