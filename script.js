// let userDetails = {
//     name:"tarun",
//     age:33,
//     isMale:true
// }
//shallow copy using spread operator
// let newobj = {...userDetails,color:"fair"}
// newobj.name="rahul"
// console.log(userDetails)//{ name: 'tarun', age: 33, isMale: true }
// console.log(newobj)//{ name: 'rahul', age: 33, isMale: true, color: 'fair' }

//shallow copy using Object.assign
// let userDetails = {
//     name:"tarun",
//     age:33,
//     isMale:true
// }
// const cloneUser = Object.assign({},userDetails)
// console.log(`clone ${cloneUser.name}`)//tarun
// cloneUser.name = "rahul"
// console.log(cloneUser.name)//rahul
// console.log(userDetails.name)//tarun

//Deep copy using JSON.parse(JSON.stringify())
// let userDetails = {
//     name:"tarun",
//     age:33,
//     isMale:true
// }
// const cloneUser = JSON.parse(JSON.stringify(userDetails))
// console.log(cloneUser.name)//tarun
// cloneUser.name = "raj"
// console.log(cloneUser.name)//raj
// console.log(userDetails.name)//tarun
////practice
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
////practice
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

// // clone an array of numbers,character,string of your choice
// let arr = [3,1,6,"tarun",'c',]
// let arrCopy = [...arr]
// console.log(arrCopy)
// console.log(arr)

// let arr = [1,2,3,4,]
// let arr1 = ["a","batman",...arr]
// console.log(arr1)

//practicing shallow copy of object of 3 levels
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
// let cloneObj = Object.assign({},obj)
////        or
// cloneObj = {...obj}
// obj.skills.css.transition=true
// obj.skills.css.transform=true
// console.log(cloneObj.skills.css.transition)//true
// console.log(obj.skills.css.transform)//true
// console.log(cloneObj.skills.css.transition)//true
// console.log(obj.skills.css.transition)//true

//practicing deep copy of object of 3 levels
// let obj = {
//     name:"tarun",
//     age:33,
//     skills:{
//         js:'intermediate',
//         css:{
//             flex:true,
//             grid:true,
//             transition:false,
//             transform:false,
//         }
//     }
// }
// cloneObj = JSON.parse(JSON.stringify(obj))
// obj.skills.css.transition=true
// obj.skills.css.transform=true
// console.log(cloneObj.skills.css.transform)
// console.log(cloneObj.skills.css.transition)
// console.log(obj.skills.css.transform)
// console.log(obj.skills.css.transition)
////practice
////clone an array using spread operater
// let arr = [1,"tarun","c"]
// let clone = [...arr]
// console.log(arr)
// console.log(clone)
//extract elements from the array from index 0 to index 5
// let arr = [5,2,7,2,9,3,6,8,9,0]
// let newarr=arr.slice(0,6)
// console.log(newarr)

////concat method on arrays
// let arr=[2,3,5,4]
// let arr1=[40,50]
// let newarr1 = arr.concat(8,9)
// let newarr2 = arr.concat([10,20])
// let newarr3 = arr1.concat(arr)
// console.log(newarr1)//[ 2, 3, 5, 4, 8, 9 ]
// console.log(newarr2)//[ 2, 3, 5, 4, 10, 20 ]
// console.log(newarr3)//[ 40, 50, 2, 3, 5, 4 ]

// // .call method
// let obj={
//     name:"tarun",
//     lastname:"bavra",
//     age:33,
//     isMale:true,
// }
// let fun = function(){
//     let fname= this.name+" "+this.lastname
//     console.log(fname)
// }
// fun.call(obj)

// //call method
// let obj={
//     name:"tarun",
//     lastname:"bavra",
//     age:33,
//     isMale:true,
// }
// let fun = function(a,b){
//     let fname= this.name + " " + this.lastname+" "+a+" "+b
//     console.log(fname)
// }
// let x="web"
// fun.call(obj,x,"developer")

// //apply method //only difference between call and apply is that
// //we pass arguments in an array
// let obj = {
//   name: "tarun",
//   lastname: "bavra",
//   age: 33,
//   isMale: true,
// };
// let fun = function (place1, place2) {
//   let fname = this.name + " " + this.lastname + " " + place1 + " " + place2;
//   console.log(fname);
// };
// fun.apply(obj, ["putthi", "naval"]);//tarun bavra putthi naval

// //apply method
// let obj = {
//     name: "tarun",
//     lastname: "bavra",
//     age: 33,
//     isMale: true,
//   };
//   let fun = function (place1, place2) {
//     let fname = this.name + " " + this.lastname + " " + place1 + " " + place2
//     console.log(fname);
//   };
//   fun.apply(obj);//tarun bavra undefined undefined

// // Demonstrate .apply method by passing whole array and print everything using loop
// let obj = {
//   name: "tarun",
//   lastname: "bavra",
//   age: 33,
//   isMale: true,
// };
// let fun = function (...array) {
//     for (const iterator of array) {
//         let fname = this.name + " " + this.lastname + " " + iterator;
//         console.log(fname);
//     }
// };
// fun.apply(obj, ["putthi", "naval","mawana"]);
// //ouput will be:
// //tarun bavra putthi
// // tarun bavra naval
// // tarun bavra mawana

//calll method revision
// let obj = {
//   name: "tarun",
//   lastname: "bavra",
//   age: 33,
//   isMale: true,
// }
// let printfullname = function(car){
//     console.log(this.name+" "+this.lastname+" has "+car)
// }
// printfullname.call(obj,"BMW")

// // .bind method
// let obj = {
//   name: "tarun",
//   lastname: "bavra",
//   age: 33,
//   isMale: true,
// }
// let printfullname = function(p1,p2){
//     console.log(this.name + " " + this.lastname + " likes "+ p1 +" and "+p2)
// }
// let fun = printfullname.bind(obj,"javascript","java")//bind method will return
// //a function which can be called whenever we want later
// console.log(fun,typeof fun)//[Function: bound printfullname] function
// fun()//tarun bavra likes javascript and java

// // make a polyfills of bind method having functionality of passing atleast two arguments
// let obj = {
//   firstname: "Paul",
//   lastname: "phoenix",
// };
// let printfullname = function (name1,name2,name3,name4) {
//   console.log(this.firstname + " " + this.lastname + " " + name1+" "+ name2+" "+ name3+" "+ name4);
// };
// Function.prototype.mybind = function (...args) {
//   // console.log(args,typeof args)//args is an array
//   let printfullnameFunction = this; //this == printfullname
//   let params = args.slice(1);
//   return function () {
//     printfullnameFunction.apply(args[0], params); //args[0] == obj(this keyword to object)
//   };
// };
// let fun2 = printfullname.mybind(obj, "Tokyo", "Hindi", "English", "HESOYAM");
// fun2();
// ////// practice yourself
// let obj = {
//   firstname: "Paul",
//   lastname: "phoenix",
// };
// let printfullname = function(arr){
//     console.log(this.firstname+" "+this.lastname+" "+arr)
// }
// Function.prototype.mybind= function(...args){
// let params = args.slice(1)
// let printfullnameFunction = this
// return function(){
//     printfullnameFunction.apply(args[0],params)
// }

// }
// let fun2 = printfullname.mybind(obj,"Hebrew","Hindi","English","HESOYAM");
// fun2()

// ////Given an array [66,77,11,44,99,55]
// //you have to minus 11 from each element and then add its index to it.Make a new array out
// // of it, try to use fat arrow function inside .map method
// let arr = [66,77,11,44,99,55]
// let newarr = arr.map((value,index)=>{
// return value-11+index;
// })
// console.log(newarr)

// ////make a polyfill for .map method
// let arr = [66,77,11,44,99,55]
// Array.prototype.mymap = function(funny){
// const resultArray = []
// for(i=0;i<this.length;i++){
//   resultArray.push(funny(this[i],i))
// }
//   return resultArray;
// }
// const result = arr.mymap((item,index)=>item*index)
// console.log(result)

// ////make a polyfill for .map method on array consisting of 7 elements
// ////containing numbers. Multiply each number by 23 and add its index to it
// ////and divide it by 3.
// let arr = [1,2,3,4,5,6,7]
// Array.prototype.mymap = function(funny){
// const resultArray = []
// for(i=0;i<this.length;i++){
//   resultArray.push(funny(this[i],i))
// }
//   return resultArray;
// }
// const result = arr.mymap((item,index)=>(item*23+index)/3)
// console.log(result)

// ////make an array of 7 elements .Just find average of them
// let arr = [4,2,5,7,3,5,3]
// let avg = arr.reduce((accumulator,currentValue)=>{
//    return (accumulator + currentValue)/arr.length;

// })
// console.log(avg)//29/7=4.1428

// ////reduce method without initial value , iteration starts from second index(1)
// let arr = [1,2,3,4,5]
// const sum = arr.reduce((accumulator,currentValue,index,array)=>{
//   console.log(accumulator,currentValue,index,array)
// return accumulator+currentValue;
// })
// console.log(sum)//15

// ////reduce method with initial value,iteration starts from first index(0)
// let arr = [1,2,3,4,5]
// const sum = arr.reduce((accumulator,currentValue,index,array)=>{
//   console.log(accumulator,currentValue,index,array)
// return accumulator+currentValue;
// },0)
// console.log(sum)//15

////Make a polyfill of .reduce method on an array
// const arr = [1,2,3,4,5,6,7]
// let ans = arr.myreduce(()=>{})

////Make a polyfill of .reduce method on an array containing 8 elements.Find the average
//// of all numbers in array

// ////Make a polyfill of .reduce method.Apply it on an array consisting of 7 elements
// // (integers).Give cumulative sum of all the elements in the array. Add an initial value
// // of 83.After that multiply the resultant with 2 and then print it.
// let arr = [1,2,3,4,5,6,7]
// Array.prototype.myreduce = function(callback,initialValue){
//  let answer = initialValue
// for(let i=0;i<this.length;i++){
//   answer = callback.call(this,answer,this[i])
// }
// return answer*2;
// }
// let result = arr.myreduce((sum,element)=>{return sum+element},83)
// console.log(result)

// //// filter method
// const words = ["spray","elite","exuberant","destruction","present"]
// const result = words.filter((word)=>word.length>6)
// console.log(result)//[ 'exuberant', 'destruction', 'present' ]

// ////Make polyfil of filter method on an array to get all even numbers
// Array.prototype.myfilter = function(callback){
//   var arr = []
//   for(let i=0;i<this.length;i++){
//     if(callback.call(this,this[i])){
//       arr.push(this[i])
//     }
//   }
//   return arr
// }
// const arrData = [0,1,2,3,4,5,6,7,8,9]
// const filteredData = arrData.myfilter((element)=>{
//   return (element%2==0)
// })
// console.log(filteredData)//[0,2,4,6,8]

// ////  Make polyfil for filter on an array consisting of integers
// ////  i.e., [77,66,89,93,32,33,13,61,15,3].Filter out all the numbes from it whose
// ////  last digit is 3, then print it.
// const arr = [77, 66, 89, 93, 32, 33, 13, 61, 15, 3];
// Array.prototype.myfilter = function (callback) {
//   var arr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback.call(this, this[i])) {
//       arr.push(this[i]);
//     }
//   }
//   return arr
// };
// let result = arr.myfilter((element) => {
//   return element % 10 == 3;
// });
// console.log(result);

// //// OOP:
// class houseBlueprint{

//   constructor(amtOfCement,noOfBricks,amtOfPOP){
//     this.bricks = noOfBricks
//     this.cement = amtOfCement
//     this.POP = amtOfPOP
//     this.roof = true
//     this.tiles = "white"
//   }

//  housebrickInfo = ()=>{
//     console.log(this.bricks)
//   }

//   totalbrickAndPOP = ()=>{
//     console.log(this.bricks + " bricks and " + this.POP +" POP")
//   }

// }
// const house1 = new houseBlueprint("120kg",8000,"100kg")
// const house2 = new houseBlueprint("100kg",7000,"110kg")
// // console.log(house1.bricks)
// // console.log(house2.roof)
// house1.housebrickInfo()
// house2.totalbrickAndPOP()

//// Make a Blueprint named "Superhero". In blueprint add properties of Superhero: name,
//// strength(0-500),health(0-100),canFly,canTeleport,stardom, 3 more properties
//// of your choice. Add a custom function to print all properties of a Superhero
//// in blueprint. Make atleast 5 superheros fromm this blueprint.Also add a custom function
//// to print the sum of strength,health and all other integer properties.

// class Superhero {
//   constructor(
//     nameOfHero,
//     strengthScore,
//     healthScore,
//     canFlyAbility,
//     canTeleportAbility,
//     stardomAbility,
//     becomeInvisibleAbility,
//     takeRebirthAbility,
//     rememberPastlifeAbility
//   ) {
//     this.name = nameOfHero;
//     this.strength = strengthScore;
//     this.health = healthScore;
//     this.canFly = canFlyAbility;
//     this.canTeleport = canTeleportAbility;
//     this.stardom = stardomAbility;
//     this.becomeInvisible = becomeInvisibleAbility;
//     this.takeRebirth = takeRebirthAbility;
//     this.rememberPastlife = rememberPastlifeAbility;
//   }

//   printProperties = () => {
//     console.log(
//       this.name +
//         " " +
//         this.strength +
//         " " +
//         this.health +
//         " " +
//         this.canFly +
//         " " +
//         this.canTeleport +
//         " " +
//         this.stardom +
//         " " +
//         this.becomeInvisible +
//         " " +
//         this.takeRebirth +
//         " " +
//         this.rememberPastlife
//     );
//   };

//   sumofProperties = ()=>{
//     console.log(this.strength+this.health)
//   }
// }
// const superhero1 = new Superhero("tarun",480,90,true,true,true,false,false,true)
// const superhero2 = new Superhero("tarun",470,80,true,true,false,false,false,true)
// const superhero3 = new Superhero("tarun",450,50,true,false,true,false,false,true)
// const superhero4 = new Superhero("tarun",440,40,true,true,true,false,false,true)
// const superhero5 = new Superhero("tarun",430,60,true,true,true,true,false,true)
// superhero1.printProperties()
// superhero1.sumofProperties()

//// Make a blueprint named "Mobile Phone"
//// have properties like screenSize(integer 0-15), cameraMegapixel,chargingPort,
//// color,waterResistant,operatingSystem,storage, +1 more property of your choice
//// make a custom function in that blueprint to print all the properties of that object
//// Make atleast 4 mobilePhones from the blueprint

// class MobilePhone {
//   constructor(
//     screenSize,
//     cameraMegaPixel,
//     chargingPort,
//     color,
//     waterResistant,
//     operaingSystem,
//     storage,
//     amoledDisplay
//   ) {
//     this.screenSize = "12 inch";
//     this.cameraMegaPixel = cameraMegaPixel;
//     this.chargingPort = chargingPort;
//     this.color = color;
//     this.waterResistant = waterResistant;
//     this.operaingSystem = operaingSystem;
//     this.storage = storage;
//     this.amoledDisplay = true;
//   }
//   showSpecifications () {
//     console.log("Specifications:");
//     console.log("screensize:" + this.screenSize);
//     console.log("cameraMegaPixel:" + this.cameraMegaPixel);
//     console.log("chargingPort:" + this.chargingPort);
//     console.log("colour:" + this.color);
//     console.log("waterResistant:" + this.waterResistant);
//     console.log("operaingSystem:" + this.operaingSystem);
//     console.log("storage in GB:" + this.storage);
//     console.log("amoledDisplay:" + this.amoledDisplay);
//     console.log("-------------------------------------");
//   };
// }

// const mobilephones = [
//   new MobilePhone("14 inch", 48, true, "white", true, "android", 128, true),
//   new MobilePhone("14 inch", 58, true, "white", true, "android", 256, true),
//   new MobilePhone("14 inch", 100, true, "white", true, "iOS", 64, true),
//   new MobilePhone("14 inch", 120, true, "white", true, "android", 256, false),
// ];
// mobilephones.forEach((mobile,index)=>{
//   console.log(`Mobile ${index+1}:`)
//   mobile.showSpecifications()
// })

// //// Design a blueprint named "Classroom".
// //// Add these properties -noOfStudentsInClass,sectionName,studentName,noOfsubjects,
// //// studentAge,uniformColor,schoolName,CGPA(of a student),Gender.
// //// out of this classroom make 5 students out of it.
// //// Add a custom function to print all the common properties.Make that function common too.

// class Classroom {
//   //common properties
//   static noOfstudents = 50;
//   static noOfsubjects = 6;
//   static uniformColor = "white";
//   static schoolName = "Translam Academy";
//   static sectionName = "C";
//   //additional properties
//   constructor(studentName, studentAge, cgpa, gender) {
//     this.studentName = studentName;
//     this.studentAge = studentAge;
//     this.cgpa = cgpa;
//     this.gender = gender;
//   }
//   //to print common properties
//   static commonDetails() {
//     console.log(
//       "SchoolName: " +
//         Classroom.schoolName +
//         ", UniformColor: " +
//         Classroom.uniformColor +
//         ", noOfstudentsInclass: " +
//         Classroom.noOfstudents +
//         ", noOf subjects: " +
//         Classroom.noOfsubjects
//     );
//   }
// }
// const student1 = new Classroom("Tarun", 20, 6.3, "male");
// const student2 = new Classroom("Akshay", 19, 6.5, "male");
// const student3 = new Classroom("Saurabh", 18, 7.5, "male");
// const student4 = new Classroom("Nitin", 19, 6, "male");
// const student5 = new Classroom("Vaishali", 18, 8.3, "female");
// Classroom.commonDetails();

// //// Design a hospital.
// //// Include properties of noOfPatients, patientName, PatientWardno,
// //// patientAge, totalDoctors, totalStaff, totalbeds, pharmacyAvailability, surgeriesPending,
// //// OPDtiming, patientWeightAge, hospitalMoble.
// //// Admit atleast 4 patients in hospital.
// //// Make a custom function to print all the details of a patient inside blueprint.
// //// Add a static function to print all the details of a patient inside blueprint.

// class Hospital {
//   static totalDoctors = 10;
//   static totalStaff = 20;
//   static totalBeds = 30;
//   static hospitalMobile = "+919412106566";
//   static pharmacyAvailability = true;
//   constructor(
//     noOfPatients,
//     patientName,
//     patientWardno,
//     patientAge,
//     surgeriesPending,
//     OPDtimings,
//     patientWeight_Age
//   ) {
//     this.noOfPatients = noOfPatients;
//     this.patientName = patientName;
//     this.patientWardno = patientWardno;
//     this.patientAge = patientAge;
//     this.surgeriesPending = surgeriesPending;
//     this.OPDtimings = OPDtimings;
//     this.patientWeight_Age = patientWeight_Age;
//   }
//   patientDetails() {
//     console.log(
//       "noOfPatients: " +
//         this.noOfPatients +
//         ", patientName: " +
//         this.patientName +
//         ", patientWardno: " +
//         this.patientWardno +
//         ", patientAge: " +
//         this.patientAge +
//         ", surgeriesPending: " +
//         this.surgeriesPending +
//         ", OPDtiming: " +
//         this.OPDtimings +
//         ", patientWeight_Age: " +
//         this.patientWeight_Age
//     );
//   }
//   static hospitalDetails(){
//     console.log(
//       "TotalDoctors: "+
//       this.totalDoctors +
//       ", TotalStaff: " +
//       this.totalStaff +
//       ", TotalBeds: " +
//       this.totalBeds +
//       ", Hospital Mobile: " +
//       this.hospitalMobile +
//       ", PharmacyAvailability: " +
//       this.pharmacyAvailability
//     )
//   }
// }

// const patient1 = new Hospital(
//   24,
//   "Imran",
//   5,
//   68,
//   2,
//   "10am to 5pm",
//  "66kg"
// );
// const patient2 = new Hospital(
//   24,
//   "Aman",
//   4,
//   58,
//   3,
//   "10am to 5pm",
//   "58kg"
// );
// const patient3 = new Hospital(
//   24,
//   "Rajkumar",
//   2,
//   70,
//   1,
//   "10am to 5pm",
//   "74kg"
// );
// const patient4 = new Hospital(
//   24,
//   "Dharamveer",
//   1,
//   80,
//   4,
//   "10am to 5pm",
//   "67kg"
// );

// Hospital.hospitalDetails()

// const patients = [patient1,patient2,patient3,patient4]
// patients.forEach((patient)=>{
// patient.patientDetails()
// })

// //// Inheritance
// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return "I have a " + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);//calls the constructor of parent class(car)
//     this.model = mod;
//   }
//   show(){
//     return this.present() + ', it is a ' + this.model;
//   }
// }
// const mycar = new Model("Ford","Mustang");
// console.log(mycar.show())//I have a Ford, it is a Mustang
// console.log(mycar.present())//I have a Ford

// //// There is a parent Vehical having properties:
// //// tyreType, noOfAirbags, noOfSeats, enginehorsePower,
// //// lightType, +1 property of your choice
// //// There is a child called Car with properties: brand, typeOfCar(SUV,hatchpack,sedan),
// ///// diselOrPetrol, automatic, sunRoof, color.
// //// make a method to print everything of a car(parent & child both).
// //// you have to design 4 cars- Hondacity, BMW, Scorpio, TATA out of Car blueprint.
// //// make desired blueprint to design this problem

// class Vehical {
//   constructor(tyreType, noOfAirbags, noOfSeats, enginehorsePower, lightType) {
//     this.tyreType = tyreType;
//     this.noOfAirbags = noOfAirbags;
//     this.noOfSeats = noOfSeats;
//     this.enginehorsePower = enginehorsePower;
//     this.lightType = lightType;
//   }
//   printVehicalDetails() {
//     console.log(
//       "tyreType: " +
//         this.tyreType +
//         ", noOfAirbags: " +
//         this.noOfAirbags +
//         ", noOfSeats: " +
//         this.noOfSeats +
//         ", enginehorsePower: " +
//         this.enginehorsePower +
//         ", lightType: " +
//         this.lightType
//     );
//   }
// }

// class Car extends Vehical {
//   constructor(
//     tyreType1,
//     noOfAirbags,
//     noOfSeats,
//     enginehorsePower,
//     lightType,
//     brand,
//     typeOfcar,
//     diselOrPetrol,
//     automatic,
//     sunroof,
//     color
//   ) {
//     super(tyreType1, noOfAirbags, noOfSeats, enginehorsePower, lightType);
//     this.brand = brand;
//     this.typeOfcar = typeOfcar;
//     this.diselOrPetrol = diselOrPetrol;
//     this.automatic = automatic;
//     this.sunroof = sunroof;
//     this.color = color;
//   }
//   ////why can I use tyreType1 instead of tyreType. And does not get an error?
//   printcarDetails() {
//     this.printVehicalDetails();
//     console.log(
//       "carBrand: " +
//         this.brand +
//         ", typeOfCar: " +
//         this.typeOfcar +
//         ", dieselOrPetrol: " +
//         this.diselOrPetrol +
//         ", automatic: " +
//         this.automatic +
//         ", haveSunroof: " +
//         this.sunroof +
//         ", color: " +
//         this.color
//     );
//   }
// }

// const car1 = new Car(
//   "tube",
//   4,
//   5,
//   119,
//   "LED",
//   "Hundai",
//   "sedan",
//   "petrol",
//   false,
//   false,
//   "white"
// );

// const car2 = new Car(
//   "tubeless",
//   8,
//   5,
//   129,
//   "LED",
//   "BMW",
//   "sedan",
//   "diesel",
//   true,
//   true,
//   "red"
// );
// const car3 = new Car(
//   "tube",
//   6,
//   7,
//   120,
//   "filament",
//   "Mahendra",
//   "suv",
//   "diesel",
//   false,
//   false,
//   "black"
// );
// const car4 = new Car(
//   "tubeless",
//   6,
//   7,
//   122,
//   "LED",
//   "TATA",
//   "suv",
//   "diesel",
//   false,
//   true,
//   "grey"
// );
// const cars = [car1, car2, car3, car4];
// cars.forEach((car) => {
//   car.printcarDetails();
//   console.log("----------------------------------------------------")
// });

// //// Classical Inheritance + static members usage in question:
// //// Movie:
// //// -type
// //// -noOfSongs(put 0 if no song is present)
// //// -totalnoOfCast(no of actors)
// //// -mainProtagonist(main hero)
// //// -languagesDubbed
// //// -climaxScenes
// //// specificMovie blueprint:
// //// -movieName
// //// -releaseDate
// //// -duration
// //// -ratings
// //// -hollywood/bollywood
// //// you have to make 5 movies out of specificMovie.
// //// And don't forget to use "static" keyword for common
// //// properties.(atleast 1 static property).
// //// Make a static fn in specificMovie to access all the properties of a movie.

// class Movie {
//   static languagesDubbed = ["english","hindi","tamil"];
//   constructor(type, noOfSongs, totalnoOfcasts, mainProtagonist, climaxScenes) {
//     this.type = type;
//     this.noOfSongs = noOfSongs;
//     this.totalnoOfcasts = totalnoOfcasts;
//     this.mainProtagonist = mainProtagonist;
//     this.climaxScenes = climaxScenes;
//   }
// }

// class MyMovie extends Movie {
//   constructor(
//     type,
//     noOfSongs,
//     totalnoOfcasts,
//     mainProtagonist,
//     climaxScenes,
//     movieName,
//     releaseDate,
//     duration,
//     ratings,
//     hollywoodOrBollywood
//   ) {
//     super(type, noOfSongs, totalnoOfcasts, mainProtagonist, climaxScenes);
//     this.movieName = movieName;
//     this.releaseDate = releaseDate;
//     this.duration = duration;
//     this.ratings = ratings;
//     this.hollywoodOrBollywood = hollywoodOrBollywood;
//   }
//   static printAllpropertiesOfMovie(movie) {
//     console.log(
//       "type: " +
//         movie.type +
//         ", noOfSongs: " +
//         movie.noOfSongs +
//         ", totalnoOfCasts: " +
//         movie.totalnoOfcasts +
//         ", mainProtagonist: " +
//         movie.mainProtagonist +
//         ", climaxScenes: " +
//         movie.climaxScenes +
//         ", movieName: " +
//         movie.movieName +
//         ", releaseDate: " +
//         movie.releaseDate +
//         ", duration: " +
//         movie.duration +
//         ", ratings: " +
//         movie.ratings +
//         ", hollywoodOrBollywood: " +
//         movie.hollywoodOrBollywood +
//         ", languagesDubbed: " +
//         this.languagesDubbed +
//         "-----------------------------------------------------------------------"
//     );
//   }
// }

// const movies = [
//   new MyMovie(
//     "horror",
//     2,
//     5,
//     "Akshay Kumar",
//     "exorcism",
//     "Bhoolbhulaiya",
//     "12/06/2020",
//     "2:50:30",
//     4.8,
//     "Bollywood"
//   ),
//   new MyMovie(
//     "thriller",
//     3,
//     8,
//     "Leonardo Dicaprio",
//     "iceberg collision",
//     "Titanic",
//     "12/06/2005",
//     "3:10:30",
//     5.0,
//     "Hollywood"
//   ),
//   new MyMovie(
//     "horror",
//     2,
//     6,
//     "Abhay",
//     "exorcism",
//     "Raj",
//     "12/06/2002",
//     "2:50:30",
//     4.7,
//     "Bollywood"
//   ),
//   new MyMovie(
//     "lovestory",
//     4,
//     9,
//     "Salman Khan",
//     "proposal",
//     "Hum Dil De Chuke Sanam",
//     "12/06/2010",
//     "2:50:30",
//     4.9,
//     "Bollywood"
//   ),
//   new MyMovie(
//     "comedy",
//     5,
//     9,
//     "Govinda",
//     "cheating",
//     "Heraferi",
//     "12/06/2018",
//     "3:00:20",
//     4.8,
//     "Bollywood"
//   ),
// ];
// movies.forEach((movie) => {
//   MyMovie.printAllpropertiesOfMovie(movie);
// });
// ////    OR
// ////Alternatively it can also be done as follows:
// class Movie {
//   static languagesDubbed = ["english", "hindi", "tamil"];
//   constructor(type, noOfSongs, totalnoOfcasts, mainProtagonist, climaxScenes) {
//     this.type = type;
//     this.noOfSongs = noOfSongs;
//     this.totalnoOfcasts = totalnoOfcasts;
//     this.mainProtagonist = mainProtagonist;
//     this.climaxScenes = climaxScenes;
//   }
//   printCommonDetailsofMovie() {
//     console.log(
//       "type: " +
//         this.type +
//         ", noOfSongs: " +
//         this.noOfSongs +
//         ", totalnoOfCasts: " +
//         this.totalnoOfcasts +
//         ", mainProtagonist: " +
//         this.mainProtagonist +
//         ", climaxScenes: " +
//         this.climaxScenes
//     );
//   }
// }

// class MyMovie extends Movie {
//   constructor(
//     type,
//     noOfSongs,
//     totalnoOfcasts,
//     mainProtagonist,
//     climaxScenes,
//     movieName,
//     releaseDate,
//     duration,
//     ratings,
//     hollywoodOrBollywood
//   ) {
//     super(type, noOfSongs, totalnoOfcasts, mainProtagonist, climaxScenes);
//     this.movieName = movieName;
//     this.releaseDate = releaseDate;
//     this.duration = duration;
//     this.ratings = ratings;
//     this.hollywoodOrBollywood = hollywoodOrBollywood;
//   }
//   printAllpropertiesOfMovie() {
//     this.printCommonDetailsofMovie();
//     console.log(
//       "movieName: " +
//         this.movieName +
//         ", releaseDate: " +
//         this.releaseDate +
//         ", duration: " +
//         this.duration +
//         ", ratings: " +
//         this.ratings +
//         ", hollywoodOrBollywood: " +
//         this.hollywoodOrBollywood +
//         ", languagesDubbed: " +
//         Movie.languagesDubbed
//     );
//   }
// }

// const movies = [
//   new MyMovie(
//     "horror",
//     2,
//     5,
//     "Akshay Kumar",
//     "exorcism",
//     "Bhoolbhulaiya",
//     "12/06/2020",
//     "2:50:30",
//     4.8,
//     "Bollywood"
//   ),
//   new MyMovie(
//     "thriller",
//     3,
//     8,
//     "Leonardo Dicaprio",
//     "iceberg collision",
//     "Titanic",
//     "12/06/2005",
//     "3:10:30",
//     5.0,
//     "Hollywood"
//   ),
//   new MyMovie(
//     "horror",
//     2,
//     6,
//     "Abhay",
//     "exorcism",
//     "Raj",
//     "12/06/2002",
//     "2:50:30",
//     4.7,
//     "Bollywood"
//   ),
//   new MyMovie(
//     "lovestory",
//     4,
//     9,
//     "Salman Khan",
//     "proposal",
//     "Hum Dil De Chuke Sanam",
//     "12/06/2010",
//     "2:50:30",
//     4.9,
//     "Bollywood"
//   ),
//   new MyMovie(
//     "comedy",
//     5,
//     9,
//     "Govinda",
//     "cheating",
//     "Heraferi",
//     "12/06/2018",
//     "3:00:20",
//     4.8,
//     "Bollywood"
//   ),
// ];
// movies.forEach((movie) => {
//   movie.printAllpropertiesOfMovie();
// });

// ///// Getters and Setters
// const person = {
//   firstname:"John",
//   lastname:"Doe",
//    get fullname(){
//     return `${this.firstname} ${this.lastname}`
//   }
// }
// console.log(person.fullname)

// //// Make an object having two key-value pairs. Make values as numbers. Make a getter fn.
// //// Do multiply these numbers return it and print it outside object.
// const obj = {
//   num1: 10,
//   num2: 20,
//   get product() {
//     return this.num1 * this.num2;
//   },
// };
// console.log(obj.product);

// //// practice
// const obj = {
//   log:['a','b','c'],
//   get latest(){
//     return this.log[this.log.length-1]
//   }
// }
// console.log(obj.latest)

// //// Make an object having 1 key value pair. Vlaue should be an array of strings.
// //// Make a getter function to make a cumulative string of all the strings in array.
// //// Print that outside the object
// const obj = {
//   strArr: ["tarun", "bavra", "frontend", "developer"],
//   get cumulativeString() {
//     ans = ""
//     for(let element of this.strArr){
//       ans = ans + element +" "
//     }
//     return ans
//   },
// };
// console.log(obj.cumulativeString)

// //// Demonstrate the same thing (as in above example) using a class.And call the getter
// //// by making an object of class
// class Human {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   get fullName(){
//     return this.firstName+" "+this.lastName
//   }
// }
// const person = new Human("tarun","bavra")
// console.log(person.fullName)

// ////setter:
// const person = {
//   firstname:"Tarun",
//   lastname:"Bavra",
//   get fullname(){
//     return `${this.firstname} ${this.lastname}`
//   },
//   set fullname(name){
//     const parts = name.split(" ");
//     this.firstname = parts[0]
//     this.lastname = parts[1]
//   },
// }
// console.log(person.fullname)//Tarun Bavra
// person.fullname = "Rahul Bavra"////this is how setter function is called,and remember
//// that in setter fn parameter is passed on the right side of "=" sign
// console.log(person.fullname)////Rahul Bavra
// console.log(person.firstname)////Rahul
// console.log(person.lastname)////Bavra

// ////Demonstrate the same thing with this sentence:"I am a Batman".Dont't forget to
// /// to use split method.Print all the words before and after change.
//  const person = {
//   firstname:"Tarun",
//   lastname:"Bavra",
//   company:"Acciojob",
//   profile:"developer",
//   get fullname(){
//     return `${this.firstname} ${this.lastname} ${this.company} ${this.profile}`
//   },
//   set fullname(name){
//     const parts = name.split(" ");
//     this.firstname = parts[0]
//     this.lastname = parts[1]
//     this.company = parts[2]
//     this.profile = parts[3]
//   },
// }
// console.log(person.fullname)//Tarun Bavra Acciojob developer
// person.fullname = "I am a Batman"////this is how setter function is called,and remember
// // that in setter fn parameter is passed on the right side of "=" sign
// console.log(person.fullname)////I am a Batman
// console.log(person.firstname)//// I
// console.log(person.lastname)//// am
// console.log(person.company)//// a
// console.log(person.profile)//// Batman

// ////example:
// const languages = {
//   log: [],
//   set current(name) {
//     this.log.push(name);
//   },
// };
// languages.current = "EN";
// languages.current = "FA";
// languages.current = 32;
// console.log(languages.log); //["EN","FA",32]

// //// Demonstrate the same(as in above example) thing in a class by making
// //// an object and call getter function through it
// class Languages {
//   constructor(){
//     this.log = []
//   }
//   set current(name){
//    this.log.push(name)
//   }
//   }
//  const language1 = new Languages()
//  language1.current=32
//  language1.current="EN"
//  language1.current=22
//  console.log(language1.log)

// //// Let's say you have an object with a single key value pair. And value would be an
// //// array consisting of 7 elements of your choice. Make a getter fn inside object.
// //// Extract(return) a subarray from index 4 to lastIndex.
// //// Call the getter fn outside object.
// const obj = {
//   arr:[2,4,6,8,1,3,5],
//   get extract(){
//   subarray = this.arr.slice(4)
//   return subarray
//   }
// }
// console.log(obj.extract)

// //// Demonstrate the same(as in above example) thing in a class while
// //// making an object. Make that setter fn inside class and access it
// //// through object.
// class Array {
//   constructor(arr) {
//     this.array = arr;
//   }
//   get getSubarray() {
//     return this.array.slice(4);
//   }
// }
// const obj = new Array([1, 2, 3, 4, 5, 6, 7]);
// console.log(obj.getSubarray);//this code is written by me
// //and below it I am writing the code given by instructor

// ///////////////////////////Just ask in doubt which code is better
// class Myclass{
//   constructor(){
//     this.myArray = [10,20,30,40,50,60,70]
//   }
//   get subArray(){
//     return this.myArray.slice(4)
//   }
// }
// const myObj = new Myclass()
// const subArray = myObj.subArray
// console.log(subArray)

//// Make an object. You have to use getter to log the array, and initialise
//// a key value pair, and the value would be an array consisting of
//// 7 elements. Push them using setter fn and log the last 3 elements
//// (subarray) of the array.
//// HINT: -make object
////       -make a key value pair, value as array (empty array)
////       -make a setter fn in which we are pushing elements in the empty array
////       -make a getter fn in which we returning the subarray consisting last 3 elements
////       -outside the object fill the empty array using setter
////       -print the ans using getter

// const obj = {
//   array: [],
//   set pushArray(arr) {
//     this.array.push(arr[arr.length-3])
//     this.array.push(arr[arr.length-2])
//     this.array.push(arr[arr.length-1])
//   },
//   get findSubarray() {
//     return this.array
//   },
// };
// obj.pushArray = [1,2,3,4,5,6,7]//setter
// console.log(obj.findSubarray)//////this is code written by me which is incorrect ,I think
////below is the code by instructor

// //////
// const obj = {
//   arr: [],
//   get printArr() {
//     return this.arr.slice(this.arr.length - 3); ////slice last 3 elements
//   },
//   set setData(data) {
//     this.arr.push(data);
//   },
// };
// function pushData(n) {
//   for (let i = 0; i < n; i++) {
//     obj.setData = i;//[0,1,2,3,4,5,6]
//   }
// }
// pushData(7);
// console.log(obj.printArr);//[4,5,6]

// //// Demonstrate the above example using classes and objects.
// class MyArray {
//   array = [1,2,3,4,5,6,7]
//   constructor() {

//   }
// }

// ////// Method chaining
// function Land(){
//   this.area = ''
//   this.status = 'for sale'
// }
// Land.prototype.open = function(){
//   this.status = 'Open for sale'
//   return this
// }
// Land.prototype.close = function(){
//   this.status = 'Not for sale'
//   return this
// }
// Land.prototype.setParams = function(area){
// this.area = area
// return this
// }
// Land.prototype.doorStatus = function(){
//   console.log("The", this.area, "Land is", this.status)
//   return this
// }
// let land = new Land()
// land.setParams("500 sq ft").doorStatus().close().open().doorStatus().close().doorStatus()

// //// Make method chaining of 5 functions. In each function print something
// //// call them in sesquencial manner. This question was asked in product based
// //// companies like OLA,Skype and Dropbox interview.
// function AcciojobCourses() {
//   this.edTech = "Acciojob";
// }
// AcciojobCourses.prototype.signup = function () {
//   console.log("You have signed up, please Login");
//   return this;
// };
// AcciojobCourses.prototype.selectCourse = function (courseName) {
//   console.log("You have selected", courseName);
//   return this;
// };
// AcciojobCourses.prototype.features = function () {
//   console.log(
//     "Features:live classes,doubt resolution,guaranteed placement,real life projects"
//   );
//   return this;
// };
// AcciojobCourses.prototype.startCourse = function () {
//   console.log("You are ready to start the course now.");
//   return this;
// };
// AcciojobCourses.prototype.getPlaced = function () {
//   console.log(
//     "You will be get placed once you clear Placement Readiness Module"
//   );
//   console.log("--------------------------------------------------------------");
//   return this;
// };
// let course = new AcciojobCourses();
// course.signup().selectCourse("MERN").features().startCourse().getPlaced();
// course.signup().selectCourse("Java").features().startCourse().getPlaced();

// //// Demonstrate function chaining with 5 functions. Initial value named number
// //// in initial fn from which you make object.
// //// In first fn calling, make the number tripled.
// //// In second fn calling, minus the number by 2.
// //// In third fn calling, divide the number by 5.
// //// In fourth fn calling, add 56 to the number.
// //// In fifth fn calling take the square root of the number.
// //// Print the number in every fn. Let Number = 122;

// function Number(n) {
//   this.value = n;
// }
// Number.prototype.triple = function () {
//   this.value= this.value* 3;
//   console.log(this.value);
//   return this;
// };
// Number.prototype.subtract2 = function () {
//   this.value= this.value- 2;
//   console.log(this.value);
//   return this;
// };
// Number.prototype.divideBy5 = function () {
//   this.value= this.value/ 5;
//   console.log(this.value);
//   return this;
// };
// Number.prototype.add56 = function () {
//   this.value= this.value+ 56;
//   console.log(this.value);
//   return this;
// };
// Number.prototype.sqRoot = function () {
//  this.value = Math.sqrt(this.value);
//   console.log(this.value);
//   return this;
// };

// let num = new Number(122);
// num.triple().subtract2().divideBy5().add56().sqRoot();

//// DO you know everything in javascript is an Object. Can you prove it?This was asked
//// by facebook london, CTC:70 Lakh

// //// Make a function and make a callback fn. In the main function pass
// //// 2 numbers, multiply them and print them in callback

// function just(a, b, callback) {
//   ans = a * b;
//   callback();
// }
// function print() {
//   console.log(ans);
// }
// just(2, 3, print);

//// Make a main fn, pass two numbers in it with a callback fn.
//// In that callback fn add the numbers and pass result to another callback fn.
/// In that callback fn double the result and pass it to another callback fn.
//// In that callback fn divide it by 3 and pass it to another callback fn.
//// In that callback fn take sqrt of that number and pass it to another callback fn
//// and print it.

// function main(a, b, callbackAdd) {
//   callbackAdd(a, b);
// }

// function callbackAdd(x, y) {
//   sum = x + y;
//   console.log("sum", sum);
//   callbackDouble(sum);
// }
// function callbackDouble(s) {
//   d = s * 2;
//   console.log("double", d);
//   callbackDivide(d);
// }
// function callbackDivide(d) {
//   divide = d / 3;
//   console.log("division", divide);
//   callbackSqrt(divide);
// }
// function callbackSqrt(sq) {
//   sqrt = Math.sqrt(sq);
//   print(sqrt);
// }
// function print(sq) {
//   console.log("sqrt", sq);
// }
// main(2, 3, callbackAdd); ////this code was written by me which is not correct I think ,
// //// below is the correct code given by instructor from one of the student

//////////
// function fun(num1, num2, callback) {
//   let sum = num1 + num2;
//   callback(sum, divide);//double(divide)
// }
// function double(res, callback) {
//   let ans = res * 2;
//   callback(ans, squareRoot);//divide(squareRoot)
// }
// function divide(res, callback) {
//   let ans = res / 3;
//   callback(ans, print);//squareRoot(print)
// }
// function squareRoot(res, callback) {
//   let ans = Math.sqrt(res);
//   callback(ans);//print()
// }
// function print(res) {
//   console.log(res);
// }
// fun(5, 5, double);

// /////// experiment with the following changes
// function fun(num1, num2, double) {
//   let sum = num1 + num2;
//   double(sum, divide);//double(divide)
// }
// function double(res, callback) {
//   let ans = res * 2;
//   divide(ans, squareRoot);//divide(squareRoot)
// }
// function divide(res, callback) {
//   let ans = res / 3;
//   squareRoot(ans, print);//squareRoot(print)
// }
// function squareRoot(res, callback) {
//   let ans = Math.sqrt(res);
//   print(ans);//print()
// }
// function print(res) {
//   console.log(res);
// }
// fun(5, 5, double);///And yes it is working fine. Think why?I think it is directly
// ////calling by function name .No use of callback parameter in this case.

// ////experiment by changing the word callback by same fn name.see what happens
// function fun(num1, num2, double) {
//   let sum = num1 + num2;
//   double(sum, divide);//double(divide)
// }
// function double(res, divide) {
//   console.log(divide)
//   let ans = res * 2;
//   divide(ans, squareRoot);//divide(squareRoot)
// }
// function divide(res,squareRoot) {
//   let ans = res / 3;
//   squareRoot(ans, print);//squareRoot(print)
// }
// function squareRoot(res, print) {
//   let ans = Math.sqrt(res);
//   print(ans);//print()
// }
// function print(res) {
//   console.log(res);
// }
// fun(5, 5, double);
// //////this is also working fine . Think why?

// //// Write a function named fetchData that simulates using setTimeout and calls
// //// a callback function with printing "Data received" after two seconds.

// function fetchData(fun) {
//   setTimeout(() => {
//     fun("Data received");
//   }, 2000);
// }
// fetchData((data) => {
//   console.log(data);
// });

//// Create a function named processArray that takes an array and a callback
//// function as parameters.The callback function should be called to sum each
//// element in a result in the array.Then print that result after two seconds.
// function processArray(arr, callback) {
//   setTimeout(() => {
//     callback(arr);
//   }, 2000);
// }
// const parameters = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   console.log(sum);
// };

// // processArray([1, 5, 8, 3, 9], parameters);////this is the code written by me
// ////// below is the code by instructor written by one of the student
// function processArray(arr, callback) {
//   setTimeout(function () {
//     const sum = arr.reduce(function (acc, currentValue) {
//       return acc + currentValue;
//     }, 0);
//     callback(sum);
//   }, 2000);
// }
// processArray([1, 2, 3, 4, 5], function (res) {
//   console.log(res);
// });

// //// Promises
// let promise = new Promise(function (resolve, reject) {
//   resolve("batman");

// });

// promise.then(
//   function (successMessage) {
//     console.log(successMessage);
//   },
//   function (errorMessage) {
//     console.log(errorMessage);
//   }
// );

// ////Make a promise. Resolve it and print the resolved status after 3 seconds
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("promise resolved");
//   }, 3000);
// });
// promise.then(
//   function (successMessage) {
//     console.log(successMessage);
//   },
//   function (errorMessage) {
//     console.log(errorMessage);
//   }
// );

// //// Change all normal functions in above code to fat arrow functions

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise resolved");
//   }, 3000);
// });
// promise.then(
//   (successMessage) => {
//     console.log(successMessage);
//   },
//   (errorMessage) => {
//     console.log(errorMessage);
//   }
// );

// //// Make a promise.Do some mathematical comparision  in it using if-else like
// //// if the number%2==0 ,it is even else odd. And
// //// resolve the promise.And then print "promise resolved".
// let promise = new Promise((resolve, reject) => {
//   resolve(22);
// });
// promise.then(
//   (num) => {
//     if (num % 2 == 0) {
//       console.log("promise resolved and number is even");
//     } else {
//       console.log("promise is resolved and number is odd");
//     }
//   },
//   (errorMessage) => {
//     console.log(errorMessage);
//   }
// );

// ////Microsoft interview question asked to my mentor in frontend interview
// //// Make a promise such a way that it sometimes resolves and sometimes
// //// rejected. If resolved print "resolved",if rejected print "rejected".
// //// Use fat arrow functions.
// let promise = new Promise((resolve, reject) => {
//   //sometimes resolve,sometimes reject
//   let num = Math.floor(Math.random() * 100);
//   if (num % 2 == 0) {
//     resolve("resolved");
//   } else {
//     reject("rejected");
//   }
// });

// promise.then(
//   (successMessage) => {
//     console.log(successMessage);
//   },
//   (errorMessage) => {
//     console.log(errorMessage);
//   }
// );

// //// .catch() method

// let promise = new Promise((resolve, reject) => {
//   //sometimes resolve,sometimes reject
//   let num = Math.floor(Math.random() * 100);
//   if (num % 2 == 0) {
//     resolve("resolved");
//   } else {
//     reject("rejected");
//   }
// });

// promise.then(
//   (successMessage) => {
//     console.log(successMessage);
//   }
// )
// .catch((errorMessage)=>{
// console.log(errorMessage)
// })

// // //// Convert the below code into a code which is using fat arrow function and
// // //// .catch() method.
// // ////The code starts here:
// // function myDisplay(some) {
// //   console.log(some);
// // }
// // let myPromise = new Promise(function (resolve, reject) {
// //   let x = 0;
// //   if (x == 0) {
// //     resolve("OK");
// //   } else {
// //     reject("Error");
// //   }
// // });

// // myPromise.then(
// //   function (value) {
// //     myDisplay(value);
// //   },
// //   function (error) {
// //     myDisplay(error);
// //   }
// // );
// // ////the code ends here.Convert it.
// /////solution:
// let promise = new Promise((resolve,reject)=>{
// let x=0;
// if(x==0){
//   resolve("Ok")
// }
// else{
//   reject("error")
// }
// })
// promise.then((successMessage)=>{
// console.log(successMessage)
// })
// .catch((errorMessage)=>{
//   console.log(errorMessage)
// })

////Make a promise such that it sometimes resolves and sometimes it rejects.
////It should take 3 seconds delay to resolve and it should take 4 seconds delay
//// to reject.On resolve print "resolved" 3 times using a loop.On reject print
//// "reject" 4 times.Use fat arrow functions with .cath() implementation.

// let promise = new Promise((resolve, reject) => {
//   let num = Math.floor(Math.random() * 100);
//   if (num % 2 == 0) {
//     setTimeout(() => {
//       resolve("Resolved");
//     }, 3000);
//   } else {
//     setTimeout(() => {
//       reject("Reject");
//     }, 4000);
//   }
// });
// promise
//   .then((successMessage) => {
//     for (let i = 0; i < 3; i++) {
//       console.log(successMessage);
//     }
//   })
//   .catch((errorMessage) => {
//     for (let i = 0; i < 4; i++) {
//       console.log(errorMessage);
//     }
//   });

// ////Promise Chaining
// let promise = new Promise((resolve, reject) => {
//   resolve("Hello Javascript");
// });
// promise
//   .then(function (result1) {
//     console.log(result1);
//     return new Promise((resolve, reject) => {
//       reject("Goku is awesome");
//     });
//   })
//   .then((result2) => {
//     console.log(result2);
//     return "Hey!";
//   })
//   .then((result3) => {
//     console.log(result3);
//     return "Yupp";
//   })
//   .then((result4) => {
//     console.log(result4);
//     return "Hi";
//   })
//   .catch((error) => {
//     console.log("some error")
//   });

// //// Make a fn , pass a number in it.Then make a promise considering that number
// //// inside that fn.
// //// Then increment the number in the first .then by 2
// //// Then increment the number in the fist .then by 3
// //// Then increment the number in the fist .then by 4
// //// Then increment the number in the fist .then by 5
// //// Then increment the number in the fist .then by 6
// //// And finally attach .catch

// function favouriteNumber(num) {
//   return new Promise((resolve, reject) => {
//     if (typeof num === "number") {
//       resolve(num);
//     } else {
//       reject("Input is not a number");
//     }
//   });
// }
// favouriteNumber(5)
//   .then((result1) => {
//     result1 = result1 + 2;
//     console.log(result1);
//     return result1;
//   })
//   .then((result2) => {
//     result2 = result2 + 3;
//     console.log(result2);
//     return result2;
//   })
//   .then((result3) => {
//     result3 = result3 + 4;
//     console.log(result3);
//     return result3;
//   })
//   .then((result4) => {
//     result4 = result4 + 5;
//     console.log(result4);
//     return result4;
//   })
//   .then((result5) => {
//     result5 = result5 + 6;
//     console.log(result5);
//     return result5;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//////why above code and below code are working the same?However first code is better
///// to write .It is good practice.

// function favouriteNumber(num) {
//   return new Promise((resolve, reject) => {
//     if(typeof num==='number'){
//       resolve(num)
//     }
//     else{
//       reject("Input is not a number")
//     }
//   })
//     .then((result1) => {
//       result1 = result1 + 2;
//       console.log(result1);
//       return result1;
//     })
//     .then((result2) => {
//       result2 = result2 + 3;
//       console.log(result2);
//       return result2;
//     })
//     .then((result3) => {
//       result3 = result3 + 4;
//       console.log(result3);
//       return result3;
//     })
//     .then((result4) => {
//       result4 = result4 + 5;
//       console.log(result4);
//       return result4;
//     })
//     .then((result5) => {
//       result5 = result5 + 6;
//       console.log(result5);
//       return result5;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
// favouriteNumber(5);
// // favouriteNumber("hi");

// // //// Make a similar promise chain in which you are passing a number in a fn.
// // //// In that fn you are making promise and its chaining. Do increment that number
// // //// by 2 in every make aleast 5 .thens in the chain.Attach .catch() block too.
// let fn = (num) => {
//   return new Promise((resolve, reject) => {
//     if (typeof num === "number") {
//       resolve(num);
//     } else {
//       reject("some error");
//     }
//   });
// };
// fn(5)
//   .then((result1) => {
//     console.log(result1);
//     return result1+2;
//   })
//   .then((result2) => {
//     console.log(result2);
//     result2 = result2 + 2;
//     return result2;
//   })
//   .then((result3) => {
//     console.log(result3);
//     result3 = result3 + 2;
//     return result3;
//   })
//   .then((result4) => {
//     console.log(result4);
//     result4 = result4 + 2;
//     return result4;
//   })
//   .then((result5) => {
//     console.log(result5);
//     result5 = result5 + 2;
//     return result5;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// //// Make a promise chaining by making a function passing a number to it and make
// //// atleast 6 .then.And then throw an error at 4th .then and catch the error in
// //// the catch block.

// let fn = (num) => {
//   return new Promise((resolve, reject) => {
//     if (typeof num === "number") {
//       resolve(num);
//     } else {
//       reject("some error");
//     }
//   });
// };
// fn(5)
//   .then((result1) => {
//     console.log(result1);
//     return result1 + 2;
//   })
//   .then((result2) => {
//     console.log(result2);
//     result2 = result2 + 2;
//     return result2;
//   })
//   .then((result3) => {
//     console.log(result3);
//     result3 = result3 + 2;
//     return result3;
//   })
//   .then((result4) => {
//     console.log(result4);
//     result4 = result4 + 2;
//     throw "something went wrong";
//     return result4;
//   })
//   .then((result5) => {
//     console.log(result5);
//     result5 = result5 + 2;
//     return result5;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// //// async await

///// async
// const getData = async () => {
//   let data = "Hello World";
//   return data;
// };
// getData().then((data) => console.log(data));

// //// Make an asynchronous function returning a number.Collect it in 5 different
// //// .then() and increment it by 3 everytime and print it too.But in 3rd .then()
// //// throw an error and collect it in catch block.
// let printNumber = async () => {
//   let num = 5;
//   return 5;
// };
// printNumber()
//   .then((num) => {
//     num = num + 3;
//     console.log(num);
//     return num;
//   })
//   .then((num) => {
//     num = num + 3;
//     console.log(num);
//     return num;
//   })
//   .then((num) => {
//     num = num + 3;
//     console.log(num);
//     throw "Something went wrong!";
//   })
//   .then((num) => {
//     num = num + 3;
//     console.log(num);
//     return num;
//   })
//   .then((num) => {
//     num = num + 3;
//     console.log(num);
//     return num;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// //// Await
// const getData = async () => {
//   let y = await "Hello World";
//   console.log(y);
// };
// console.log(1);
// getData();
// console.log(2);

// //// Demonstrate async and await in a simple fn print things and prove await functionality.
// const fun = async () => {
//   let num = 50;
//   await ((num) => {
//     return num * num * num;
//   })(num);
//   console.log(num);////third printed
// };
// console.log("Hello World");////first printed
// fun();
// console.log(1);////second printed

////// await
// async function a(){
// const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
// const response = await data.json();
// console.log(response)
// }
// a();

// ////Promise.all
// ////In the following code which line will run first, mentor told that line number
// //// 2092 will run first,i.e., display() will run first, but why?

// function asynchronous_operational_mehtod() {
//   let first_promise = new Promise((resolve, reject) => resolve("Hello"));
//   let second_promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(" yo ");
//     }, 1000);
//   });
//   let combined_promise = Promise.all([first_promise, second_promise]);
//   return combined_promise;
// }
// async function display() {
//   let data = await asynchronous_operational_mehtod();
//   console.log(data);
// }
// display();

// //// Make a async function and call a function inside it which returns a single promise
// //// made up of 4 promises.
// //// -simple resolved promise value - "Batman"
// //// -simple resolved promise value after 3 seconds- "Superman"
// //// -simple resolved promise value after 2 seconds- "wonderwoman"
// //// promise doing something mathematical comparision in it and then resolving it
// //// Use Promise.all to make a promise out of them return it and print it.

// function heroes() {
//   return Promise.all([
//     Promise.resolve("Batman"),
//     new Promise((resolve) => setTimeout(() => resolve("Superman"), 3000)),

//     new Promise((resolve) => setTimeout(() => resolve("Wonderwoman"), 2000)),

//     new Promise((resolve) => {
//       const maths = 25 + 5 == 30;
//       resolve(maths);
//     }),
//   ]);
// }

// async function displayHeros() {
//   const promise = await heroes();
//   console.log(promise);
// }

// displayHeros();

// //// Make atleast 6 promises with setTimeout for each one and resolve them after
// //// 1s,2s,1s,3s,1s,1s. Make a collective promise using all promises. And print
// //// 1st,3rd and 4th promise only.
// let promise1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 1000);
// });
// let promise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(6);
//   }, 2000);
// });
// let promise3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("hello");
//   }, 1000);
// });
// let promise4 = new Promise((resolve) => {
//   // throw "somethong went wrong!";
//   setTimeout(() => {
//     resolve("Tarun");
//   }, 3000);
// });
// let promise5 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 1000);
// });
// let promise6 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// const collectivePromise = Promise.all([
//   promise1,
//   promise2,
//   promise3,
//   promise4,
//   promise5,
//   promise6,
// ])
//   .then((result) => {
//     console.log(result); //[ 5, 6, 'hello', 'Tarun', 10, 2 ]
//     console.log(result[0]);
//     console.log(result[2]);
//     console.log(result[3]);
//     return result;
//   })

//   .catch((error) => {
//     console.log(error);
//   });

// ///// In the above code we will throw error in 4th promise and see what happens
// let promise1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 1000);
// });
// let promise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(6);
//   }, 2000);
// });
// let promise3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("hello");
//   }, 1000);
// });
// let promise4 = new Promise((resolve) => {
//   // throw "somethong went wrong!";  or

//   setTimeout(() => {
//     resolve("Tarun");
//   }, 3000);
// });
// let promise5 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     reject(new Error("some error occured!"));
//   }, 1000);
// });
// let promise6 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// const collectivePromise = Promise.all([
//   promise1,
//   promise2,
//   promise3,
//   promise4,
//   promise5,
//   promise6,
// ])
//   .then((result) => {
//     console.log(result); //[ 5, 6, 'hello', 'Tarun', 10, 2 ]
//     console.log(result[0]);
//     console.log(result[2]);
//     console.log(result[3]);
//     return result;
//   })

//   .catch((error) => {
//     console.log(error);
//   }); ////Promise.all() waits for all the promises to either resolve or for
//   //// any one of them to reject. If any promise in the array rejects,
//   //// Promise.all() immediately rejects with that error, and the .catch()
//   ////block is executed.
//   //// The catch() method is executed because promise4 is rejected right away,
//   //// causing the entire collectivePromise to be rejected. When a promise in
//   //// Promise.all() rejects, it bypasses the .then() block and goes directly to
//   ////  the .catch() block.

// // ///// Question asked by flipkart for SDE-1 role:-
// // //// Make atleast 4 promises. Resolve every promise except the third one.
// // //// Throw an error in the 3rd promise after a delay of 1 second. Make other
// // //// promises wait for 2 sec to resolve each promise.Using Promise.all handle
// // //// that error.

// const promise1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Hello");
//   }, 10000);
// });
// const promise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Welcome");
//   }, 2000);
// });
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("you")
//     reject("Something went wrong!");
//   }, 1000);
// });
// const promise4 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("to");
//   }, 2000);
// });
// const promise5 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("javascript");
//   }, 2000);
// });
// const allPromise = Promise.all([
//   promise1,
//   promise2,
//   promise3,
//   promise4,
//   promise5,
// ]);
// allPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   }); ////When Promise.all() is called, all the promises
// ////(promise1, promise2, promise3, promise4, and promise5) start executing
// //// at the same time, not one after the other.

///// If we print something in every promise in above example, then even after
////  the third promise rejects all promises print its respective dialogue
/////  because all promises start executing at the same time, for example:

// const promise1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Hello");
//     console.log("hello");
//   }, 10000);
// });
// const promise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Welcome");
//     console.log("welcome");
//   }, 2000);
// });
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("you")
//     reject("Something went wrong!");
//     console.log("rejected promise");
//   }, 1000);
// });
// const promise4 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("to");
//     console.log("to");
//   }, 2000);
// });
// const promise5 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("javascript");
//     console.log("javascript");
//   }, 2000);
// });
// const allPromise = Promise.all([
//   promise1,
//   promise2,
//   promise3,
//   promise4,
//   promise5,
// ]);
// allPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ////When Promise.all() is called, all the promises
// ////(promise1, promise2, promise3, promise4, and promise5) start executing
// //// at the same time, not one after the other.

// //ouput will be as follows:
// // rejected promise
// // Something went wrong!
// // welcome
// // to
// // javascript
// // hello

// //// This question was asked in an interview of a mobile company
// //// URL--> We have a json object. You have to access a property in that json object.
// //// How would you do that?

// let fetchData = async () => {
//   const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   //// fetch() will return a resolved promise
//   const response = await data.json();
//   console.log(response);
//   //// response = { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
//   console.log(response.title);
// };
// fetchData();

//// You are given an array [32,43,55,66,7].Multiply each element by 3 using
//// map then filter all elements which are divisible by 2. Then sum all the
//// elements using reduce. Use only polyfills. Don't use inbuilt functions.
//// solution for this  question is in 27 July chatApp video lecture at 2:56:00

//// Given a url:'www.random.com', please print json body of this object
////  let obj = {
////       map:[{you:batman},{we:superman},{help:wonderwoman},{hey:[1,2,3,4,{toy:{u:7}}]}]
////            }
//// fetch "7" from the obove object and print it.

// let obj = {
//   map: [
//     { you: "batman" },
//     { we: "superman" },
//     { help: "wonderwoman" },
//     { hey: [1, 2, 3, 4, { toy: { u: 7 } }] },
//   ],
// };
// async function fetchData() {
//   const url = "https://jsonplaceholder.typicode.com/todos/1";
//   const response = await fetch(url);
//   const data = await response.json();
//   const cloneobj = JSON.parse(JSON.stringify(obj));
//   data.clone = cloneobj
//   console.log(data.clone.map[3].hey[4].toy.u);
// }
// fetchData()////this is written by me

// //////Below code is given by instructor from a student without running may be wrong
// const fetchData = async ()=>{
//     const response = await fetch('www.random.com')
//     const data = await response.json()
//     console.log(data.map[3].hey[4].toy.u)
// }
// fetchData()

///////////////////////////////////////////////////////////
//// export and import
//// export an array
// export let months1 = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "April",
//   "May",
//   "June",
//   "July",
//   "Aug",
//   "Sept",
//   "Oct",
//   "Nov",
//   "Dec",
// ];
// //// export a variable
// export const MUDULES_BECAME_STANDARD_YEAR1 = 2015;
// //// export a class
// export class User1 {
//   constructor(name) {
//     this.name = name;
//   }
// }
// //// export functions
// function sayHi() {
//   console.log(`Hello ${user}!`);
// }

// function sayBye() {
//   console.log(`Bye ${user}!`);
// }

// export { sayHi, sayBye };

// ///////////////////////////////////////////////////////////////
// //// FILE1.JS
// function sayHi() {
//   console.log(`Hello ${user}!`);
// }

// function sayBye() {
//   console.log(`Bye ${user}!`);
// }
// export { sayHi, sayBye };
// /////////////////////////////////////////////////////////
// ////FILE54.JS
// import { sayHi, sayBye } from "./FILE1.JS"; ////when both files are in same folder
// //// If your file is in some other foler then you will have
// ////to write './Foldername/FILE1.JS'
// //// If your file is inside other folder's folder(folder inside folder)
// //// then you write './foldername/insideFoldername/FILE1.JS'

// sayHi("John"); //// Hello, John!
// sayBye("John"); //// Bye, John!

////////////////////////////////////////////////////////////////////////

// // FILE1.JS
// function sayHi() {
//   console.log(`Hello ${user}!`);
// }

// function sayBye() {
//   console.log(`Bye ${user}!`);
// }
// export { sayHi, sayBye };

// //////////////////////////////////////////////////////////////////////////////////
// ///   import * as say from './FILE1.JS'

// say.sayHi("John");
// say.sayBye("John");

// ////With Default:
// //// Modules provide a special export default ("the default export") syntax to make the
// //// "one thing per module" way look better.Put export default before the entity
// //// to export:
// //// user.js
// export default class User {
//   constructor(name) {
//     this.name = name;
//   }
// }
// //// There may be only one export default per file.
// //// …And then import it without curly braces:

// //// main.js
// import user from "./user.js"; //not {User}, just user
// new User("John");
// ////Imports without curly braces look nicer.
// //// A common mistake when starting to use modules is to forget
// //// curly braces at all. So, remember, import needs curly braces for
// //// named exports and doesn’t need them for the default one.

// //// Debouncing
// //// This is asked 7 times out of 10 interviews.//IMPORTANT//
// //// Demonstrate debouncing.

// let counter = 0;
// const getData = () => {
//   console.log("retrieving data", counter++);
// };
// const debounce = (getData_fn, delay) => {
//   let timerID;
//   return function () {
//     let context = this;
//     let args = arguments;
//     clearTimeout(timerID);
//     timerID = setTimeout(() => {
//       getData_fn.apply(this, args); // Use `context` instead of `this` to preserve context
//     }, delay);
//   };
// };
// const better_function = debounce(getData, 1000);

//// Throttling////asked in swiggy's interview(SDE-3, 50LPA)

// let counter = 0;
// const getData = () => {
//   console.log("retrieving data", counter++);
// };
// function throttle(callback, delay = 1000) {
//   let shouldWait = false;
//   return (...args) => {
//     //betterfn
//     if (shouldWait) return;
//     //time difference of 1 sec or 1000ms
//     callback(...args); //calling callback
//     shouldWait = true;
//     setTimeout(() => {
//       shouldWait = false;
//     }, delay);
//   };
// }
// const betterfn = throttle(getData, 1000);

// ////practice throttling code
// let counter = 0;
// let getData = () => {
//   console.log("retreiving data", counter++);
// };
// let throttle = (callback, delay = 1000) => {
//   let shouldWait = false;
//   return (...args) => {
//     if (shouldWait) return;
//     callback(...args)
//     shouldWait = true;
//     setTimeout(() => {
//       shouldWait = false;
//     }, delay);
//   };
// };
// let betterfn = throttle(getData,1000)


///// Sockets
//// we will understand socket by making a small project which is a chat app.
//// refer to notes for github repo of the project.


//// Refer to video lectures of May 2024 of Advance Js for extra topics to cover.
//// Also some topics in greater detail.

//// Module completed.
