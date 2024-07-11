// let userDetails = {
//     name:"tarun",
//     age:33,
//     isMale:true
// }

// let newobj = {...userDetails,color:"fair"}
// newobj.name="rahul"
// console.log(userDetails)//{ name: 'tarun', age: 33, isMale: true }
// console.log(newobj)//{ name: 'rahul', age: 33, isMale: true, color: 'fair' }

//shallow copy using Object.assign
// const cloneUser = Object.assign({},userDetails)
// console.log(`clone ${cloneUser.name}`)//tarun
// cloneUser.name = "rahul"
// console.log(cloneUser.name)//rahul
// console.log(userDetails.name)//tarun

//
// const cloneUser = JSON.parse(JSON.stringify(userDetails))
// console.log(cloneUser.name)//tarun
// cloneUser.name = "raj"
// console.log(cloneUser.name)//raj
// console.log(userDetails.name)//tarun

// let userDetails = {
//     name:"tarun",
//     age:33,
//     isMale:true,
//     verify:{
//         status:true,
//         skills:{
//             html:true,
//             css:true,
//             react:false
//         }
//     }
// }

// let cloneUser = Object.assign({},userDetails)
// cloneUser.name="rahul"
// cloneUser.verify.skills.react=true
// console.log(userDetails.name)
// console.log(userDetails.verify.skills.react)
// console.log(cloneUser.verify.skills.react)


//create a deep copy of an object of your choice
// let obj = {
//     name:"tarun",
//     age:33,
//     skills:{
//         js:'intermediate',
//         css:{
//             flex:true,
//             grid:true,
//             transition:false,
//         }
//     }
// }
// let cloneObj = JSON.parse(JSON.stringify(obj));
// console.log(cloneObj.skills.css.transition)
// cloneObj.skills.css.transition=true
// console.log(obj.skills.css.transition)
// console.log(cloneObj.skills.css.transition)

// clone an array of numbers of your choice
let arr = [3,1,6,"tarun",'c',]
let arrCopy = [...arr]
console.log(arrCopy)
console.log(arr)


