const coding =["python","javascript","ruby","c++","aws"]
//this using normal function
coding.forEach(function (item){
    // console.log(`${item}`);
})


//now using foreach using the arrow function

coding.forEach((item)=>{{
    // console.log(`${item}`);
}})
// coding.forEach((item,index,arr)=>{{
//     console.log(item, index,arr);
// }})




const mycoding= [
    {
        language:"python",
        extension:"py"
    },
    {
        language:"javascript",
        extension:"js"
    },
    {
        language:"C++",
        extension:"cpp"
    },

]


mycoding.forEach((item)=>{
console.log(`${item.extension} is the extension for the  ${item.language}`);
})