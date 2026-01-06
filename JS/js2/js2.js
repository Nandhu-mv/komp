// document.getElementById('btn').addEventListener('click',function(event){
//     alert(`OLA ${event.target.id}`)
// })
// document.getElementById('btn1').addEventListener('click',function(event){
//     alert(`OLA ${event.target.id}`)
// })
// document.getElementById('btn2').addEventListener('click',function(event){
//     alert(`OLA ${event.target.id}`)
// })


//Event Delogation --------- effect on all child elements

// document.getElementById('main1').addEventListener('click',function(event){
//     alert(`HI ${event.target.id}`);
// })



// Bubbling -- from child to parents

// document.getElementById('parent').addEventListener('click',function(){
//     console.log(`And Parent`);
// })
// document.getElementById('child').addEventListener('click',function(){
//     console.log(`Hi Child`);
// })

// function formin(){
//     let user = document.getElementById('name').value
//     let pass = document.getElementById('pass').value

//     if (user && pass) {

//         alert(`Welcome ${user}`)
        
//     }

//     else{

//         alert('maybe u forgot smtin?')

//     }

// }

                        //FORMS AND INPUTS

// document.getElementById('login').addEventListener('submit',formin)
// document.getElementById('login0').addEventListener('submit',()=>{

//     let user = document.getElementById('name0').value
//     let pass = document.getElementById('pass0').value

//     if (user && pass) {

//         alert(`Welcome ${user}`)
        
//     }

//     else{

//         alert('maybe u forgot smtin?')

//     }



// })




                            //!!!!async FUNCTIONS ---- CALLBACK,PROMISE,Async-Await
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!





    // function cb(){

    //     console.log('This the called back function')
    // }


    // function asink(cb) {

    //     console.log("the cb will be called in 5 seconds ");

    //     setTimeout(() => {
    //         cb();
    //     }, 5000);
                
    // }

    // asink(cb)

    // let prms = new Promise((resolve,reject)=>{

    //     let success = false
    //     setTimeout(()=>{

    //         if (success) {
    //             resolve('WON')
    //         }
    //         else{
    //             reject('LoSt')
    //         }

    //     }, 2000);
    // })

    // prms.then((result)=>console.log(result))
    // .catch((error)=>console.log(error))
    // .finally(()=>console.log("FINISHED......"))



    // function data() {

    //     return promise = new Promise((resolve)=>{

    //         setTimeout(() => {
    //             resolve("___________DATA___________")
    //         },2000);

    //     })

    // }
    
    // async function GD(data) {

    //     console.log("Fetching data.....");

    //     let result = await data()

    //     console.log(result);
        
    //     console.log("FINISHED");
        
    // }

    // GD(data)



    // async function get() {
        
    //     try {
            
    //         res = await fetch('https://jsonplaceholder.typicode.com/posts')

    //         data = await res.json()

    //         console.log(data);
            
            
    //     } catch (error) {

    //         console.log("An eroor HAZ oCOORED");

    //         console.log(error)
            
            
    //     }

    //     finally{
    //         console.log("WE GOT OUT");
            
    //     }
    // }

    // get()

                            // DIRECT INPUT IN JS

//     user = prompt("1 2 3 4 5"," ")

//     let arr = user.split(" ").map(Number);
// console.log(arr); // [1, 2, 3, 4, 5]


//     if (user == " " ) {
        
//         console.log(`Hello ${user}`);

//     }



                    //____________LOCAL STORAGE__________

    
    // localStorage.setItem("id","0")
    // document.write(localStorage.getItem("id"))

    // // localStorage.removeItem("id")

    // localStorage.clear()

    // console.log(localStorage.key(1));
    

    // const obj = {
    //     id : 0,
    //     name : "Spade",
    //     age : 25 
    // }

    // localStorage.setItem("id2",JSON.stringify(obj))

    // console.log(JSON.parse(localStorage.getItem("id2")));
    



    // STUDIES  

//     let time = 10;
// const timerEl = document.getElementById("timer");

// function countdown() {
//   timerEl.textContent = time;

//   if (time === 0) {
//     timerEl.textContent = "Done!";
//     return;
//   }

//   time--;

//   setTimeout(countdown, 1000);
// }

// countdown();


// console.log(typeof null);  Object

// console.log([] == false);  true

// console.log("5" + 3 - 2);  51

// let x; 
// console.log(x ?? "default");  default

// console.log(0 && "Hello" || "World");  world

// console.log(Boolean(" ")); 

// console.log([1,2,3].map(num => num > 2));

// console.log([1,2,3].filter(num => num > 2));

// console.log([1,2,3].forEach(num => num > 2));

// console.log(!!"false");

// console.log([..."Hello"].length);

// console.log(Math.min(-100,1,2,3,4,5,10000)); [] => wont work needs spread op ...[]
// console.log(Math.min()); return lowest 

// let x = 11
// let y = 10

// const  ar3 = (x,b) => x*b ;

// console.log(ar3(x,y));

// let text = ""

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=> res.json() )

// .then((postres)=>{
//   text = postres;
//   console.log(text);
// })
// .catch((error)=>{
//   console.log(error);
  
// })

// const str1 = "Na  "

//  let str3 = `heloooo ${str1}`


//      console.log(str3.lastIndexOf('o'));
//     console.log(str3.indexOf('o'));
//     console.log(str3.includes('alo'));
//     console.log(str3.startsWith('he'));
    

//     console.log(str3.slice(0,5));       // (start,end)
//     console.log(str3.substring(-2,4));   // (start,end)  -value = 0
//     console.log(str3.substr(2,6));   // substr (start,length)

//     console.log(str1.trim());
//     console.log(str1.padStart(10,"ab cd"));
//     console.log(str1.padEnd(9,"hey2"));
//     console.log(str1.repeat(4))


const ar2 = [1,2,3,4,3,2]

// ar2.splice(2,1,"a")

// console.log(ar2);

new ar = ar2.reduce((acc,a)=>{ acc[new1].push(a+"yes") },{new1 : b = []})

console.log(ar);


