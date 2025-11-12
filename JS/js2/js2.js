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

    user = prompt("1 2 3 4 5"," ")

    let arr = user.split(" ").map(Number);
console.log(arr); // [1, 2, 3, 4, 5]


    if (user == " " ) {
        
        console.log(`Hello ${user}`);

    }

    




