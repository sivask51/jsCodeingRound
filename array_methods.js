// syntax callback(acc,current,index)=> {},initital value(0)
let number = [1, 2, 3, 4]

const result = number.reduce((acc, currentValue,index) => {
    return acc + currentValue
}, 0)

console.log(result)

// note 
// () =>{ } this is a call back method   or () =>



// flat 
const arraysValue = [1, 2, 3, 4, [5], 6]
const singleFlat1 = arraysValue.flat()
console.log(singleFlat1)

// flat array depth ==> flat(2)
const flatArrayDepth = [1, 2, 3, [4, 5, [6, 7, 8]]]
const resultFlatArray = flatArrayDepth.flat(Infinity) 
console.log(resultFlatArray)

//flatmap


// includes 
// array or string kulla irukkutha ilaya pakka
const names = ["sk", "sd", "rk"]
const includesResult = names.includes("sssk")
console.log("includesResultincludesResult",includesResult)


// map 
const mapVariable = ["siva", "ravi", "raja"]
const mapresult = mapVariable.map((maplist, index) => {
    return maplist + 'eee'
})
console.log("eeeeeeeeeeee", mapresult)

const price = [10, 30, 44, 55, 34, 14]
const discount = 5

const resultprice = price.map((lis, index) => {
    return lis - discount
})
console.log("Asdfadsfadsfads", resultprice)


// filter 
var creatures = [
    { name: "shark", habitat: "Ocean" },
    { name: "whale", habitat: "Ocean" },
    { name: "Lion", habitat: "Savanna" }
]

// // filter         array ----> this array is total 3 item so loop the call back 3 times
// const numbers = [10, 20, 30];

// numbers.filter((item, index, array) => {
//   console.log("ITEM :", item);
//   console.log("INDEX:", index);
//   console.log("ARRAY:", array);
//   console.log("----------")
// });

const creaturesFilter = creatures.filter((listData, ind) => {
    return listData.habitat === "Ocean"
})
console.log("creaturesFilter", creaturesFilter)


// find
const numbers = [5, 12, 8, 130, 44];
const findresult = numbers.find(num => num > 10);
console.log("findresultfindresult", findresult);


//some
const fruits = ["apple", "banana", "mango"];
const hasMango = fruits.some(fruit => {
    return fruit === "mango"
});
console.log(hasMango);

//every
const customerNames = ["Siva", "Kumar", "Ram"];
const nameResult = customerNames.every((lis)=>{
    return lis.length>1 
})
console.log("all element match then only true",nameResult)


// redduce

let redduceNum = [10,20,30,50,20]
let resultReduce = redduceNum.reduce((acc,currentValue,index)=>{
  return  acc + currentValue
},0)
console.log("reducevalue",resultReduce)


// findindex
const Findindexnumbers = [5, 12, 8, 130, 44];
const Findindex = numbers.findIndex(num => num > 10);
console.log(Findindex);


// sort 
const sortnumber = [3,6,1,2,9,5]
const sortResult = sortnumber.sort((a,b)=>a-b)
console.log("sortResultsortResult",sortResult)
// a-b low to high reverst , b-a high to low 


// // for in ---> it is the loop the index value
// // for of ---> it is the loop the values 

// let number  = [1,2,3,4]

// for(let loopindex in number){
//     console.log( loopindex)
// }

// let number2 = [77,722,44,65]
// for(let valusLoop of number2 ){
//     console.log(valusLoop)
// }

//  //loop the string 

// function funName(names){
//     for(let loopname of names){
//         console.log(loopname)
//     }
// }
//  let name1="siva"
// funName(name1)

// note 
// {} => use panna return use pananum 


// | Method          | What It Returns                    | Simple Meaning                 |
// | --------------- | ---------------------------------- | ------------------------------ |
// | **push()**      | New array length (number)          | Adds item at end               |
// | **pop()**       | Removed element                    | Removes last item              |
// | **shift()**     | Removed element                    | Removes first item             |
// | **unshift()**   | New array length                   | Adds item at start             |
// | **includes()**  | true / false                       | Checks if value exists         |
// | **indexOf()**   | Index (number) or -1               | Finds position                 |
// | **some()**      | true / false                       | Checks if ANY passes condition |
// | **every()**     | true / false                       | Checks if ALL pass condition   |
// | **find()**      | First matching element / undefined | Finds first matching item      |
// | **findIndex()** | Index or -1                        | Finds index of first match     |
// | **filter()**    | New array                          | Returns all matched values     |
// | **map()**       | New array                          | Transforms values              |
// | **reduce()**    | Single value                       | Reduces array to one result    |
// | **slice()**     | New array                          | Copies part of array           |
// | **splice()**    | Removed elements array             | Removes/changes items          |
// | **concat()**    | New array                          | Joins arrays                   |
// | **join()**      | String                             | Converts array to string       |
// | **reverse()**   | Same array (reversed)              | Reverses array                 |
// | **sort()**      | Same array (sorted)                | Sorts array                    |
