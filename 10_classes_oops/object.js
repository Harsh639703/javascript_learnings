function multply5(num){
    return num*5
}

multply5.power=5

console.log(multply5(5));
console.log(multply5.power);
console.log(multply5.prototype);


function createuser(username,score){
     this.username= username;
     this.score= score   
}

createuser.prototype.increasement=function(){
    this.score++
}
createuser.prototype.printme=function(){
    console.log(`the value is : ${this.score}`);
}


const apple= new createuser("red",60)
const watermelon=new createuser("gree",50)

apple.printme()
watermelon.printme()
