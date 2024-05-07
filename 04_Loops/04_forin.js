const myobject={
    'js':"javascript",
    'py':"Python",
    'cpp':"c++"
}

for( const key in myobject){
    // console.log(`${key} is shortcut for ${myobject[key]}`);
}

const program =["cpp","py","ruby","swift"]

for(const num in program){
    // console.log(`${program[num]}`);
}


const  map  = new Map()


map.set('js',"javascript")
map.set('cpp',"c++")
map.set('py',"pyhton")

for(const key in map){
    console.log(`${map[key]}`);
}
