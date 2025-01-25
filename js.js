// document.write("Zainab Bashir")
console.log("hello world")

let a = 20
let b = "20"
let c = "Zahra"
let d = ` ${a} and ${b} are sisters and ${c} is daughter of ${b}`
// let newName= a.concat(b)
let e =  "Zainab"
let f = "Aamna"
//  function onePlusAvg(x,y){
//     return 1+(x+y)/2
//  }

 console.log(a)
  console.log(b)
console.log(c)
console.log(d)
// console.log(newName)
//  console.log(b.trim())
//  console.log(a.slice(1,5))
//  console.log(a < b)
 //console.log("average of e anf f is ", (a+b)/2 )
// console.log("average  plus 1 of e anf f is ", onePlusAvg(e,f) )
console.log(a===b)
console.log(a!=b)
console.log(a!==b)
console.log(a==b)
console.log(a !=b)

let age= 12;
if(age>=0 && age<=2)
{
document.write("Newly Born")
}
else if(age>=2.1 && age<=10 )
{
document.write("Child")
}
else if(age>=10 && age<=19 )
{
document.write("Teenager")
}
else if(age>=20 && age<=45 )
{
document.write("Young")
}
else if(age>=45 && age<=60 )
{
document.write("Adults")
}
else 
document.write("Old People")
        

for(let i=22;i<50;i++)
  if(i%2===0)
{
document.write(i+"<br>")
}

// let password;
// do{
//   password = prompt("What is your name?")
// }
// while(
//   password !=="zainab"
// )

let  g = Math.ceil(3.77)
document.write(g)

let arr = [3,"zainab" , 88,"rayan" , "zahra" , 33]
console.log( arr.length)
console.log( arr.push("lemon"))
console.log( arr)
console.log( arr.pop())
console.log( arr)
console.log( arr.unshift("zainab"))
console.log( arr)
console.log( arr.shift())
console.log( arr)

let obj={
  firstName : "zainab" ,
  lastName : "bashir" ,
  age : 22,
  email: "zainabb28@gmail.com",

}
document.write(obj)
console.log(obj)
// for(let key in obj){
//   document.write(onj[key])
// }