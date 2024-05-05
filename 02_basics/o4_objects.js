const tinduser = new Object()


tinduser.name="Harsh"
tinduser.age=25
tinduser.email="harhh588@gmail.com"
// console.log(tinduser);

//we can make the nested objects as well

// const ond={
//     name:"Harsh",
//     age:55,
//     fullname:{
//         userfullname:{
//             firstname:"Harsh",
//             lastname:"Vishnoi"

//         }
//     }

// }

// console.log(ond.fullname);
// console.log(ond.fullname.userfullname);


const obj2 = {1:"a",2:"b"}
const obj3 = {3:"c",4:"d"}

// const obj4 = Object.assign({},obj2,obj3) //this will merge the objects into one object

const obj4 = {...obj2,...obj3}
// console.log(obj4);

//arrya object

const arre =[
    {
        id : 1,
        name : "Harsh"

    },
    {
        id : 1,
        name : "Harsh"

    },
    {
        id : 1,
        name : "Harsh"

    },
    {
        id : 1,
        name : "Harsh"

    },

]

//access the eleements  of the array objects

// console.log(arre[0].name); 

// console.log(tinduser);

// console.log(Object.keys(tinduser)); //the return the array type value or basically it is returning the array consisting of values
// console.log(Object.values(tinduser)); //the return the array type value or basically it is returning the array consisting of values
// console.log(Object.entries(tinduser));

const course ={
    coursename:"js",
    courseinstructor:"Harsh"
}


// console.log(course.courseinstructor);// this is one way to access


const {courseinstructor:inst} = course // it is not required to write the elembent name again again , you make this short by using this method 





