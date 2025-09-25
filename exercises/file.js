// let nums=[1,2,3]

// for(const item of nums){
//   console.log(item);
  
// }

// let inf={name:"hosein",age:19,city:"njf"}

// for(const names in inf){
//     console.log(names,":",inf[names]);
    
// }


// const obj1={c:3,d:4}
// const obj2={a:1,b:2}

// const obj= {...obj1, ...obj2}
// console.log(obj);

// import * as math from './app.js'

// console.log(math.math(1,2));
// console.log(math.default("ali"));
// console.log(math.name);

function myorder (time,target){
return new Promise((resolve,reject)=>{
  let ready = true
 setTimeout(()=>{
  if(ready){
    resolve(`${target} is ready after ${time} seconds`)
  }else{
    reject(`your order failed`)
  }
 },time*1000)
})

}

async function order(){
  try{
    const food =await myorder(2,"pizza")
    console.log(food);

    const drink = await myorder(2,"soda")
    console.log(drink);
    
    const dessert = await myorder(3,"fries")
    console.log(dessert);
  }catch(error){
    console.log(`error: ${error}`);
    
  }
}

order()





// const names = {name:"hosein",age:19}
// const {name,age}=names
// console.log(name);
// console.log(age);

