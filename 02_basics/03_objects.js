//singleton
const sym1 =  Symbol("key1")

const obj1 = {
  name: "Harsh",
  age : 22,
  [sym1]: "keyq1",//that is how we add the symbol in the objects
  email: "harsh654@gmail.com",

}

// console.log(obj1[sym1]);
// console.log(obj1["name"]);//we can access the elemnets of objects like this
// console.log(obj1.name);//we can access the elemnets of objects like this using the full stop
// console.log(obj1["age"]);

// Object.freeze(obj1)//like we freeze the object , not a single person can change the value of elements in the object
// console.log(obj1);

obj1.greetings= function(){
    console.log("hello harsh bhai kia haal hai");
}

obj1.greet= function(){
    console.log(`my name is ${this.name},i am ${this.age}`);
}

console.log(obj1.greetings());
console.log(obj1.greet());
