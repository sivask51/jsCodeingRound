const promiseVariable = new Promise((resolve, reject) => {
    setTimeout(() => { reject("failed") }, 3000)
    setTimeout(() => { let user = { name: "sk" };resolve("complete") }, 5000);

})

//  // 1
// then --> promise sucess fully complete mens then use
//  promiseVariable.then((result)=>{console.log("this result is resolve irukuratha kattum :",result)})

//  // 2
// catch --> promise not sucess fully complete mens  catch use pananum
promiseVariable.catch((failed)=>{console.log("reject vanthu faild nu vangigitom",failed)})

//  note 
// resolve correct use panaliana ,  uncaught  error varum
// promise resolve or reject ethavathu onna tha out put la kontu varum .

console.log("\n")

function getUser (){
  return  new Promise((resolve, reject) =>{
    let users = [];
        setTimeout(()=>{
           
               users = [{name:"sk",place:"erode"},{name:"rk",place:"salem"}];
                resolve(users)
         },3000)
         return users
    })

}

function findUser(name){
    getUser().then((users)=>{
        const user = users.find((user)=>user.name === name);
        console.log(user)
    })
}

console.log(findUser('sk'))


// setTimeout() vs setInterval()  what is the diff

// setTimeout() run only one time 
// setInterval() run again and again
// clearTimeout() in JavaScript is used to stop / cancel
setInterval(() => {
  console.log("Runs every 2 sec");
}, 2000);




// const numbers = [1,2,3,4];
// localStorage.setItem("nums", JSON.stringify(numbers));

// const nums = JSON.parse(localStorage.getItem("nums"));
// console.log(nums[2]); // 3
