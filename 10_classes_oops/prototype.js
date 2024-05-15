// let myheros = ["krish","shaktiman"]

// let heropower ={
//     krish:"fly",
//     shaktiman:"rotate"
// }

// Object.prototype.Harsh=function(){
//     console.log(`krish has harsh power`);
// }
// Array.prototype.Vishnoi=function(){
//     console.log("every array has vishnoi power");
// }

// // heropower.Harsh()
// // myheros.Harsh()
// myheros.Vishnoi()
// // heropower.Vishnoi()


//inheritance()

const teacher ={
    makingvideo:true
}

const supportTeacher ={
    isavailable:true
}

const TAsupport={
    makeassignment:"Js assignment",
    fulltime:true,
    __proto__: supportTeacher
}
const user={
    name:"harsh",
    email:"email@gmail.com"
}

teacher.__proto__=user

//modern syntax
Object.setPrototypeOf(supportTeacher,teacher)

let anothername="Harsh     "

String.prototype.totalength = function(){
    console.log(`${this}`);
    console.log(`the total length is : ${this.trim().length}`);

}

anothername.totalength()

"vishnoi   ".totalength()
"vissdfgsdfghnoi           ".totalength()
