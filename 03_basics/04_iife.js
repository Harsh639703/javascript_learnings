//Immediately invoked function expression (IIFE)


(function code(){
    console.log(`db connected`); //this is called name iife
})();//it is required to apply semicolon if we are executing the two IIFE


((name)=>{
    console.log(`DB connected ${name}`);
})('Harsh')

