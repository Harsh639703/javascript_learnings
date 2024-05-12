const randomcolor= function(){
    const hex="0123456789ABCDEF"
    let color = "#"

    for(i =0;i<6;i++){
        color+=hex[Math.floor(Math.random() * 16)]
    }
    return color
}
//Method 1 
// let interval
// const func1=function(){
//     document.body.style.backgroundColor=randomcolor()
// }

// document.querySelector("#start").addEventListener('click',function(){
//     interval=  setInterval(func1,2000)
// })
// document.querySelector("#stop").addEventListener('click',function(){
//     clearInterval(interval)
// })

//Method 2

let interval

const startchange =  function(){
   const func1= function(){
   document.body.style.backgroundColor=randomcolor()
    }
    if(!interval){
        interval = setInterval(func1, 2000)
    }

    
}

const stopchange = function(){
    clearInterval(interval)
    interval=null
}
document.querySelector("#start").addEventListener('click',startchange)
document.querySelector("#stop").addEventListener('click',stopchange)


