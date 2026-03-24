////   1
// object  create 1
let obj = {
    name:"sk",
    age:99,
    place:"erode",

}
// object  create 2
let newObjCreate = Object.create({})
newObjCreate.name = "ravi"
newObjCreate.age=24
console.log(newObjCreate)

console.log("\n")


////   2
// onbject access 1
console.log("onbject access 1",newObjCreate.name)

// onbject access 2 ----> 
// note : dynamic values aceess in object 
console.log("onbject access 2",obj["place"]);



console.log("\n")


////   3
// proporty value change 
obj.name = "name change to siva"
console.log("property_nmae _change",obj)
// proporty value change dynamic 
obj["place"] = "Erode change the name to Chennai"
console.log("proporty value change dynamic",obj)

////   4
// delete obj 
delete obj.age
console.log("delete age ",obj)


////   5
// value irukka ilaya "in" object
console.log("name" in obj) // true name object la key irukku 



////   6
//  object keys
// //   returns an array of keys inside the object
let objectKeys = Object.keys(obj)
console.log("objectkeysobject Keys",objectKeys)


////   7
//  object values
// //   returns an array of values inside the object
let objectValues = Object.values(obj)
console.log("objectkeysobject values",objectValues)


// // 8
// object entrys 
// return a array keys,value and key are assenting order 
let objectEnterys = Object.entries(obj)
console.log("objectEnterysobjectEnterys",objectEnterys)


// // 9
// Object.freeze() returns the same object, but makes it immutable (you cannot change, delete, or add properties).
let onbjectFreeze = Object.freeze(obj)
console.log("add,delete,and immutable object",onbjectFreeze)

// // 10
// object.seal()  --> only allow change property value not allow delete 
let objectSeal = Object.seal(obj)
console.log("onject not delete only read",objectSeal)


// // 11
const {name,place}=obj;
console.log("object destaruring:---->>>", name , place )
// note in pritically react js state , props({name,place})


//  // 12
//  spred opreator
let spreadOpreator = {
    name:"ravi",
    age:30
}

let result = [{...spreadOpreator}]
console.log(result)


// // 13 
// //rest oprator 
let [first,second,...rest] = [11,22,53,14,25,996]
console.log("first",first)
console.log("second",second)
console.log("rest",...rest)


// // 14
// // option chaining --> it is use to avoid Type Errors
const student = {
  name: "Siva",
  address: {
    city: "Chennai",
    pin: 600001
  }
};

console.log(student.address.city);  // Chennai
// console.log(student.contact.phone); // undefined (no error)



// // 15
// try catch

