function user(email,pass){

        this._email=email
        this._pass=pass
    

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set :function(value){
            this._email = value
        }
    }),
    Object.defineProperty(this,'pass',{
        get:function(){
            return this._pass.toUpperCase()
        },
        set :function(value){
            this._pass = value
        }
    })
}


const user1 = new user("Harsh@gmail.com","avss")
console.log(user1.email);
console.log(user1.pass);