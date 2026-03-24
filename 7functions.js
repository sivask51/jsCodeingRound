const person1 = {
    name:"siva",
    age:44
}
const person2 = {
    name:"raja",
    age:22
}


// 1.function calling in js 
function funName(){
    console.log(person1.age)
}

funName() // function calling in js 

 
// what is parameter and argument 
function funparameter (name) {  // parameter 
console.log(name)
}
funparameter(person1.name) // arguments
funparameter(person2.name)