// // ---------------------qustion 1 reverse string-----------------------
// function funName(str) {
//   let emptyString = ""

//   for (let val of str){
//       emptyString = val + emptyString
//   }
//   return emptyString
// }

// console.log(funName("siva")) // avis



// ===  or ====
// string reverse
// let names="siva"
// function fun(str){
//  let  emptyString= ''
//     for(i = str.length-1;i >=0; i--){
//      emptyString = emptyString + str[i]
//      //    //     reversedEmpty = reversedEmpty + str[i]
//     }
//     return emptyString
// }

// let result = fun(names)
// console.log(result)

// // --------------------------------------qustion 2 palinrom ---------------------------------
// function palinromString(str){
//     let emptyvalueStrore = ""
//     for(value of str){
//         emptyvalueStrore = value + emptyvalueStrore 
//     }
//     return emptyvalueStrore === str
// }

// console.log(palinromString("sis"))


////////////////////-----------------or-------- 

// palinrom 
// let lastname="nivine"

//  function palinrom(string){
//     let emptyString = ""
//      for(let i = string.length-1;i >=0 ; i--){
//        emptyString = emptyString + string[i]
//      }
//      return emptyString
//  }


//  let result = palinrom(lastname)
// console.log(result)

// if(result === lastname){
//     console.log("pass")
// }else{
//     console.log("fail")
// }

// -------------------or------------------------



//  function palinrom(string){
//     let emptyString = ""
//      for(let i = string.length-1;i >=0 ; i--){
//        emptyString = emptyString + string[i]
//      }
//      return emptyString === string
//  }

//  let lastname="nivin"
// if(palinrom(lastname)){
//     console.log("pass")
// }else{
//     console.log("fail")
// }


// // -------------------------------------- or ---------- 

// let palinromVariable = "nnn"

// function funName (string){
//   let emptyString = ''
//     for(let i = string.length-1;i>=0 ;i--){
//       emptyString = emptyString + string[i]
//     }
//     return emptyString === string
// }

// if(funName(palinromVariable)){
// console.log("is palinrom")
// }else{
//     console.log("not palinrom")
// }


// // -----------------------------------swap ---------------------
// let a= 10;
// let b=20;

// [a,b]= [b,a]
// console.log(a,b)
//  // note ; must give another wise not working 

// //  ----------------3-count the string-------------


// function funName(str){
//       countVariable = {}   //// Stores key:value pairs so we used object 
//     for( let newVariable of  str){
//         if(countVariable[newVariable]){   //// onject key values then use countVariable[newVariable]
//            countVariable[newVariable]++
//         }else{
//            countVariable[newVariable] = 1
//         }
//     }
//     retun countVariable
// }

// console.log(funName(names))



///  ///  -----------------4--find longest word -------------------
//  logst word vs sumall word find in string 
// function smallestWord(str) {
//     let splitWords = str.split(" ");
//      let smallest = splitWords[0];  // start with first word

//     for (let word of splitWords) {
//          if (word.length <  smallest.length ) {   // smaller → update
//           word = smallest ; 
////////////siva = ["kumasssr", "as" ,"big"] //// easy way to comper logst word vs sumall word 
//         }
//     }
//      return smallest;
// }
// console.log(smallestWord("siva kumasssr as big"));

/////////////----longest word 

// step:1 fist split space 
// if la ethu equal varutho atha return pananum

// function findLongWord(str){

//     let splitWords = str.split(" ")

//     let longestWord ="";

//     for (let splitWordsStore of splitWords){
//        if(splitWordsStore.length > longestWord.length){
//          longestWord = splitWordsStore
//        }
//     }
//     return longestWord
// }

// let names = "siva sivakumar"
// let result = findLongWord(names)
// console.log(result)


/// // ------------------------remove duplicate 

// method : reduce 

// function removeDuplicate(arr){

// return  arr.reduce((preValue,item,index)=>{
//    return preValue.includes(item) ?preValue : [...preValue,item]
//   },[])
// }

// let arrays = [1,2,3,4,4,2]
// let result = removeDuplicate(arrays)
// console.log(result)

// explaination :
// | Step | item | preValue | includes? | Result        |
// | ---- | ---- | -------- | --------- | ------------- |
// | 1    | 1    | []       | false     | [1]           |
// | 2    | 2    | [1]      | false     | [1, 2]        |
// | 3    | 2    | [1, 2]   | **true**  | [1, 2] (same) |
// | 4    | 3    | [1, 2]   | false     | [1, 2, 3]     |



/// method:2 use filter array 

// function filterArrayRemoveDuplicate(str){
// return  str.filter((item,index,arrays) => arrays.indexOf(item)==index)
// }

// let num = [1,1,2,3,4,4]
// console.log(filterArrayRemoveDuplicate(num))


////// // ---------string la "()" open close agirukka ilayanu pakkalam
// function stringInsideIsorNot(str){
//  let valSrote=[]
// for (let element of str) {
//   if(element == '('){
//       valSrote.push(element)
//   }else if(element == ')'){

//     if(valSrote.length == 0){
//      return false
//    }
//    valSrote.pop()
//   }
// }
// return valSrote.length === 0
// }

// console.log(stringInsideIsorNot(")()("))






// function funName(str){
//   let valSrote = []

//   for (const element of str) {
//     if(element == '('){
//        valSrote.push(element)
//     } else if(element == ')'){
//        if(valSrote === 0){
//         return true
//        }

//        valSrote.pop()


//     }

//   }
//    return valSrote.length == 0  
// }
// console.log(funName("()"))
// console.log(funName("()("))



////// ------------------------7777--avoid non repreting chater  ------


// function funName(str) {
//    let empty = {}
//    for (const element of str) {
//       if (empty[element]) {
//          empty[element] += 1
//       } else {
//          empty[element] = 1
//       }
//    }
//    console.log(empty)

//    for (let element of str) {
//       if (empty[element] == 1) {
//          return element
//       }
//    }
//    return null

// }

// console.log(funName("sivakumar"))

// // //// o/p   s 

//////////////////-------------------8----if two string are anagrams --------------------------
// ex hello --- leo

function twoStingAnagrams(str1, str2) {
   //  Space and lowercase change 
   let string1 = str1.replace(/\s+/g, '').toLowerCase()
   let string2 = str2.replace(/\s+/g, '').toLowerCase()

   if (string1.length !== string2.length) {
      return false
   }

   let emptyObject1 = {}
   let emptyObject2 = {}

   for (const element1 of str1) {
      emptyObject1[element1] = (emptyObject1[string1] || 0) + 1
      console.log(emptyObject1[element1] = (emptyObject1[string1] || 0) + 1)
   }

   for (const element2 of str2) {
      emptyObject2[element2] = (emptyObject2[string2] || 0) + 1
   }

   for (let element1 of emptyObject1) {

   }



}

console.log(twoStingAnagrams("sivqq", "siva"))




