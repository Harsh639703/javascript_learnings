// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);

//here we can not change the value of the Math.PI as we cant change the writable code of that because hard checks.

const chai={
    name:"harsh",
    email:"eamil@gm.com",
    isavailable:true
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));


Object.defineProperty(chai,'name',{
    enumerable:true,//if enumerable is false then we cant iterate that in object but it is true then we can easly iterate that object
    writable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));




for(let [key,value] of Object.entries(chai)){//object.entries is used to iterate on the object

    if(typeof value!=="function"){
        console.log(`${key}:-${value}`);
    }
   
}

